# Forge SQL ORM — AI Hybrid Search Example (vector + fulltext + rerank)

**Embeddings, fulltext scoring, and reranking run on the Forge backend** (resolver runtime), not in the Custom UI browser.

This example demonstrates **hybrid semantic search** with Forge SQL ORM:

- **AI models run on the Forge backend** via a sidecar bundle in [`ai-lib/`](./ai-lib) (see `manifest.yml` → `extraFiles`). Forge webpack does not bundle dynamic imports for the model; the sidecar is built separately and loaded at runtime from `src/ai.ts`.
- Custom UI sends **plain text** only (`create`: `title` + `document`; `search`: `text`).
- Backend stores vectors in TiDB/Forge SQL and uses a **four-step vector → fulltext → rerank → RRF** pipeline (see below).
- **Fulltext runs in Node.js** ([MiniSearch](https://github.com/lucaong/minisearch)) on vector candidates — Forge SQL has no `FULLTEXT` index / `MATCH AGAINST`.
- **No external AI APIs** — models are bundled in the app package (`allowRemoteModels = false`). This keeps inference on Atlassian-hosted compute and supports [**Runs on Atlassian**](https://developer.atlassian.com/platform/forge/runs-on-atlassian/) eligibility (verify with `forge eligibility` after deploy).

## What this example does

1. In **Add documents**, you enter:
   - `Title`
   - `Document` (up to 2048 chars)
2. Backend `create` computes the embedding from `document`, then saves `title`, `document`, and `embedding`.
3. In **AI(Vector) search**, you enter query text.
4. Backend `search` runs the [hybrid pipeline](#how-search-works-vector--fulltext--rerank--rrf).
5. Results are shown in **final Combined (RRF) order**, with:
   - `id`, `title`, document open button
   - **Combined (%)** — reciprocal rank fusion of vector, fulltext, and rerank ranks (drives **Final rank**)
   - **Vector (%)** — embedding similarity: `(1 - distance) * 100`
   - **Fulltext (%)** — MiniSearch BM25-style score on `title` + `document`, normalized 0–100% within the result list
   - **Rerank (%)** — cross-encoder fit, scaled 0–100% relative to other rows (100% = best rerank logit in this list)

## How search works (vector + fulltext + rerank + RRF)

### AI models ([`ai-lib/src/index.ts`](./ai-lib/src/index.ts))

| Model                   | Role          | Type                    | Used for                                                  |
| ----------------------- | ------------- | ----------------------- | --------------------------------------------------------- |
| `all-MiniLM-L6-v2`      | Bi-encoder    | Embedding (384 dim)     | Indexing documents and fast vector retrieval in Forge SQL |
| `ms-marco-MiniLM-L6-v2` | Cross-encoder | Relevance score (logit) | Reranking query + document pairs                          |

### Fulltext ([`src/fulltext.ts`](./src/fulltext.ts))

Forge SQL does not expose MySQL-style `FULLTEXT` search. This example scores keywords in the **resolver** with [MiniSearch](https://github.com/lucaong/minisearch):

- Index is built **on the fly** from vector candidates (up to 20 rows) — cheap and RoA-friendly.
- Fields: `title` (boost ×2) and `document`; options: `prefix: true`, `fuzzy: 0.2`.
- Output `fulltextScore` is normalized to 0–1 relative to the best hit in the batch.

Fulltext complements vector/rerank: it boosts **exact phrases** (e.g. `search-and-rescue acute sense of smell` → Dogs) but can misfire when the query contains many words from the wrong document (see [hybrid demo](#hybrid-demo-vector-and-fulltext-disagree--target-tree) below).

### Pipeline (`search` resolver in [`src/index.ts`](./src/index.ts))

```
Query text
    │
    ▼
[1] Embed query (all-MiniLM-L6-v2)
    │
    ▼
[2] Vector search in Forge SQL — ORDER BY vecCosineDistance, LIMIT 20
    │
    ▼
[3] Fulltext score each candidate (MiniSearch in Node.js)
    │
    ▼
[4] Rerank each candidate (ms-marco-MiniLM-L6-v2 — query + document together)
    │
    ▼
[5] Reciprocal Rank Fusion (RRF) — merge vector, fulltext, and rerank ranks
    │
    ▼
[6] Return top 5 by Combined score (raw vector distance and per-signal % kept for UI)
```

### RRF weights ([`src/hybridScore.ts`](./src/hybridScore.ts))

Final order uses **Reciprocal Rank Fusion**: each signal contributes `1 / (k + rank)` where **lower k = stronger weight** for that signal's #1 rank.

| Constant         | Value  | Signal        | Rationale                                                                                                                                                                                                                      |
| ---------------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `RRF_K_VECTOR`   | **70** | Vector rank   | **Weakest** in fusion. Vector already did its job in step 2 (shortlist from the whole table). Bi-encoder semantics overlap with rerank — cross-encoder refines the same meaning more accurately on candidates.                 |
| `RRF_K_RERANK`   | **50** | Rerank rank   | **Strong** — primary semantic judge on the final list (query + full document text).                                                                                                                                            |
| `RRF_K_FULLTEXT` | **40** | Fulltext rank | **Moderate-high** — keyword/phrase boost. Strong enough to surface exact matches, but vector + rerank together should win on paraphrases. Not as low as rerank because fulltext is a distinct signal (lexical, not embedding). |

At rank #1, approximate contribution per channel: fulltext `1/41 ≈ 0.024`, rerank `1/51 ≈ 0.020`, vector `1/71 ≈ 0.014`. Semantic pair (vector + rerank) outweighs fulltext alone; fulltext still moves the needle on keyword-heavy queries.

Tune constants in [`src/hybridScore.ts`](./src/hybridScore.ts) if your corpus is more keyword- or paraphrase-heavy.

**Reading the results table:** Compare **Vector**, **Fulltext**, and **Rerank** columns separately — they use different scales. **Combined (%)** is the only column that drives **Final rank**.

### Design trade-offs (what this pipeline is — and is not)

These are **deliberate engineering choices**, not omissions. Forge SQL constrains the design, and this example optimizes for clarity and "Runs on Atlassian" eligibility over textbook IR:

- **Fulltext here re-scores vector candidates — it is not an independent retrieval channel.** A "true" hybrid system retrieves lexical and semantic results _separately_, then merges. Forge SQL has no `FULLTEXT` index / `MATCH AGAINST`, so MiniSearch indexes only the top-20 vector candidates on the fly. **Consequence:** a document the vector stage misses can never be recovered by fulltext, and BM25 `idf` is computed over the 20-row batch (not the corpus), so `fulltextScore` is relative to each query — useful as a lexical _re-ranking_ signal, not as standalone search.
- **RRF fuses ranks, not scores — by design.** The cross-encoder produces a calibrated relevance logit (its strongest, most absolute signal), but Reciprocal Rank Fusion reduces every channel to its ordinal rank. This trades away rerank calibration for robustness: vector distance, BM25, and cross-encoder logits live on incomparable scales, and rank fusion sidesteps that without per-signal normalization tuning. If your corpus rewards trusting the reranker outright, drop RRF and sort by rerank logit directly (or lower `RRF_K_RERANK`).
- **Two-stage retrieval is intentional.** Bi-encoder builds a cheap shortlist; cross-encoder only re-scores those 20. This is the standard cost/quality split — full cross-encoder over the whole table would be accurate but far too slow for a resolver.

If you need independent lexical retrieval or score-level fusion, this example is a starting point, not a drop-in production search engine.

## Project structure

- Backend resolvers: [`src/index.ts`](./src/index.ts)
- Fulltext scoring (MiniSearch): [`src/fulltext.ts`](./src/fulltext.ts)
- RRF fusion: [`src/hybridScore.ts`](./src/hybridScore.ts)
- Backend AI loader (`getVector`, `rerank`): [`src/ai.ts`](./src/ai.ts) (dynamic import of `ai-lib/dist/dist/index.mjs`)
- Schema: [`src/entities/schema.ts`](./src/entities/schema.ts)
- Sidecar build: [`ai-lib/`](./ai-lib) — build before deploy/tunnel so the bundle matches your Forge runtime
- Frontend app: [`static/forge-orm-example/src/App.tsx`](./static/forge-orm-example/src/App.tsx)

## ai-lib build, runtime architecture, and deploy vs tunnel

The Forge app runtime (including **CPU architecture**) is set in [`manifest.yml`](./manifest.yml) under `app.runtime`, for example:

```yaml
app:
  runtime:
    name: nodejs24.x
    architecture: arm64
```

You must build **`ai-lib`** for the **same architecture** you declare there before `forge deploy`. If you change `architecture` in the manifest, rebuild `ai-lib` with the matching script.

**Important:** a bundle built for **`forge deploy`** (production ARM64 / x86_64) is **not** compatible with **`forge tunnel`**, and a **`build:tunnel`** bundle is **not** suitable for deployed Forge functions. Use the matching workflow below.

### For `forge deploy` — ARM64

```sh
cd ai-lib
npm i
npm run build:arm64
```

### For `forge deploy` — x86_64

```sh
cd ai-lib
npm i
npm run build:x86_64
```

### For `forge tunnel` only

```sh
cd ai-lib
npm i
npm run build:tunnel
```

After building `ai-lib`, build the Custom UI (see Quick start) and run `forge deploy` or `forge tunnel` as usual.

## Requirements

- [Forge CLI](https://developer.atlassian.com/platform/forge/)
- Atlassian site for `forge install`
- Node.js compatible with your Forge app runtime

## Quick start

### 1) Install backend dependencies

```sh
cd examples/forge-sql-orm-example-backend-ai
npm install
```

### 2) Install and build frontend

```sh
cd static/forge-orm-example
npm install
npm run build
```

### 3) Build ai-lib (see [ai-lib build, runtime architecture, and deploy vs tunnel](#ai-lib-build-runtime-architecture-and-deploy-vs-tunnel))

### 4) Deploy and install app

```sh
cd ..
forge register   # once
forge deploy
forge install --site <your-site>.atlassian.net
```

## Important notes about models

### Vector dimension

The embedding model `all-MiniLM-L6-v2` returns vectors with a fixed dimension.  
The `embedding` column dimension in [`src/entities/schema.ts`](./src/entities/schema.ts) must match that model output exactly.

If dimensions do not match, insert/search will fail at DB level.

### Bundled models

Both models are shipped under `models/` and loaded at runtime (see `manifest.yml` → `extraFiles`). Rebuild `ai-lib` for your target architecture before deploy; see [ai-lib build](#ai-lib-build-runtime-architecture-and-deploy-vs-tunnel).

## How to use in UI

### Add documents

Open tab **Add documents** and add these records one by one.

#### 1) Dogs

**Title:** `Dogs`  
**Document:**

```text
The Unwavering Bond: A Comprehensive Look at Domestic Dogs
Domestic dogs, scientifically known as Canis lupus familiaris, have shared a unique evolutionary journey with humans for over fifteen thousand years. Originally descended from ancient wolves, these resilient mammals have transitioned from wild predators to beloved family members, earning their reputation as "man's best friend." Their primary role has shifted significantly through history; while they were once valued strictly for their hunting prowess and guarding abilities, modern canines are now primarily cherished for their companionship and emotional support.
Physically, dogs exhibit an incredible diversity in size, coat texture, and temperament. From the tiny Chihuahua to the massive Great Dane, every breed possesses specific traits developed through centuries of selective breeding. Beyond their physical attributes, dogs are highly intelligent social animals capable of understanding human emotions and complex commands. They communicate through a sophisticated range of vocalizations, including barks and whines, alongside subtle body language like tail wagging or ear positioning.
Furthermore, the working capabilities of dogs remain vital to society today. Specialized service animals assist individuals with visual impairments, while brave search-and-rescue teams navigate treacherous terrain to save lives. Their acute sense of smell, which is thousands of times more sensitive than a human's, allows them to detect specific scents with remarkable precision. Whether they are performing a high-stakes job or simply waiting patiently for their owner to return home, dogs continue to demonstrate an unparalleled level of loyalty, devotion, and unconditional love that enriches human lives across every culture.
```

#### 2) Tree

**Title:** `Tree`  
**Document:**

```text
The Silent Giants: Understanding the Life of Trees
Trees are the fundamental pillars of our planet's terrestrial ecosystems, serving as complex biological organisms that sustain life on Earth. As perennial plants with an elongated stem or trunk, they are uniquely characterized by their woody structure and extensive root systems. Through the remarkable process of photosynthesis, trees convert sunlight, water, and carbon dioxide into life-sustaining oxygen and glucose. This chemical transformation not only supports the tree's own growth but also regulates the global atmospheric balance, making forests the "lungs of our planet."
The internal anatomy of a tree is a marvel of natural engineering. Beneath the protective outer bark lies the cambium layer, which facilitates the growth of new cells, and the xylem, a sophisticated vascular system that transports nutrients from the earth to the highest leaves. Throughout the seasons, deciduous trees undergo dramatic transformations, shedding their foliage in autumn to conserve energy before the harsh winter months. In contrast, evergreens maintain their needles year-round, showcasing the diverse evolutionary strategies plants use to survive in varying climates.
Beyond their biological functions, trees provide critical habitats for countless species of insects, birds, and fungi. They stabilize the soil against erosion, offer cooling shade during intense heat, and contribute to the water cycle by releasing moisture through transpiration. For humanity, trees have been an essential resource for millennia, providing timber for construction, fruit for sustenance, and a profound sense of tranquility. Protecting these ancient, towering organisms is vital for maintaining biodiversity and ensuring the environmental health of future generations.
```

#### 3) Fish

**Title:** `Fish`  
**Document:**

```text
The Aquatic Realm: Exploring the World of Fish
Fish represent a diverse group of craniate organisms that have mastered life in the world's oceans, rivers, and lakes for over five hundred million years. As cold-blooded vertebrates, they are perfectly adapted to their underwater environments, utilizing specialized organs called gills to extract life-sustaining oxygen directly from the water. Unlike land-dwelling mammals, fish possess streamlined bodies covered in protective scales and use various fins for propulsion, stability, and precise maneuvering through dense aquatic currents.
The biological variety among fish is staggering, ranging from the tiny, colorful inhabitants of tropical coral reefs to the colossal whale sharks that roam the open sea. Many species have evolved incredible sensory capabilities, such as the lateral line system, which detects minute vibrations and pressure changes in the surrounding water. This "sixth sense" allows them to navigate in complete darkness, avoid predators, and hunt with remarkable accuracy. Additionally, some fish exhibit complex social behaviors, forming massive schools that move in perfect unison to confuse attackers or increase foraging efficiency.
Reproduction and survival strategies in the aquatic world are equally fascinating. While some fish lay thousands of delicate eggs in hidden nests, others, like certain sharks, give birth to fully formed live young. Their role in the global food web is indispensable, as they serve as a primary protein source for billions of humans and countless other predators. From the deepest abyssal trenches to the shallowest mountain streams, fish continue to thrive as a testament to evolutionary resilience, playing a vital role in maintaining the delicate ecological balance of our blue planet's hydrosphere.
```

#### 4) Cat

**Title:** `Cat`  
**Document:**

```text
The Enigmatic Grace: Understanding the Domestic Cat
The domestic cat, or Felis catus, is a small carnivorous mammal celebrated for its agility, independent spirit, and mysterious demeanor. Having lived alongside humans for nearly ten thousand years, cats were originally revered in ancient societies—most notably in Egypt—for their ability to protect grain stores from rodents. Unlike dogs, which were bred for cooperation, cats have largely retained their solitary hunting instincts, making them fascinatingly self-sufficient companions in modern households.
Physically, cats are marvels of biological engineering. Their skeletons are incredibly flexible, allowing them to squeeze through tight spaces and always land on their feet thanks to a highly developed righting reflex. They possess extraordinary sensory perceptions; their night vision is far superior to that of humans, and their retractable claws allow for silent stalking and efficient climbing. A cat’s communication is equally nuanced, ranging from the gentle vibration of a purr, which often signals contentment or self-healing, to the sharp hiss used for territorial defense.
Behaviorally, cats are known for their fastidious grooming habits and complex social signals. While they are often labeled as aloof, many cats form deep emotional bonds with their owners, expressing affection through "kneading" or gentle head-butts. Their predatory prowess remains intact, even in indoor environments, where they often treat toys as "prey" to satisfy their instinctive need to hunt. As one of the world's most popular pets, cats continue to captivate us with their blend of wild heritage and domestic charm, offering a quiet, observant presence that has inspired artists and thinkers for millennia.
```

#### 5) Mice

**Title:** `Mice`  
**Document:**

```text
The Smallest Survivors: The World of Mice
Mice are small rodents belonging to the family Muridae, known for their incredible adaptability and presence in nearly every corner of the globe. Characterized by their pointed snouts, large rounded ears, and long, thin tails, these tiny mammals have successfully thrived alongside human civilizations for thousands of years. While often viewed as mere pests in granaries, mice are highly complex creatures with sophisticated social structures and remarkable survival instincts that allow them to inhabit diverse environments ranging from dense forests to urban households.
Biologically, mice are built for stealth and speed. Their whiskers, or vibrissae, are highly sensitive tactile organs that allow them to navigate in total darkness by sensing air currents and physical obstacles. They possess an extraordinary reproductive rate, a necessary evolutionary strategy to counter their role as a primary food source for numerous predators, including owls, snakes, and felines. Despite their small stature, mice are surprisingly intelligent; they exhibit problem-solving abilities and can communicate with one another using ultrasonic vocalizations that are completely inaudible to the human ear.
In the realm of science and history, the mouse has played an indispensable role. Due to their genetic similarity to humans, mice are the most commonly studied model organisms in medical research, contributing to countless breakthroughs in genetics and pharmacology. Whether they are scurrying through a field or living in a controlled laboratory setting, mice demonstrate a level of resilience and biological efficiency that far outweighs their size. Their ability to find food in the most difficult conditions and their cautious, nocturnal nature continue to make them one of the most successful mammalian species on Earth.
```

#### 6) Luna (pet profile — optional, for fulltext + hybrid demo)

Add this **after** the five sample documents above.

**Luna is a cat** — the text says _female British Shorthair_, _purring_, _kneading_, _righting reflex_, and the same behaviors as document **Cat**. The difference is not species but **granularity**:

|                     | **Cat** (document 4)                                             | **Luna** (document 6)                                           |
| ------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------- |
| **Title**           | `Cat`                                                            | `Luna` (pet name)                                               |
| **What it is**      | Generic encyclopedia article about domestic cats                 | One specific cat’s profile (weight, microchip, vet dates)       |
| **In the database** | Separate row — there is no parent/child link or `category` field | Same table; title is not `Cat` but content is still about a cat |

Search does not use a taxonomy (“under Cat”). All rows are peers; **vector, fulltext, and rerank** decide which row best matches the query. A question about **“a cat”** can match both; a question about **“a cat weighing 4.2 kg”** should match **Luna**, not the encyclopedia.

This demo shows fulltext and RRF picking the **right record** when the query mixes cat semantics with concrete data.

**Title:** `Luna`  
**Document:**

```text
Pet profile: Luna, a female British Shorthair born on 14 March 2019. Registered name Luna Sterling; indoor companion living in household ID HH-2048. Microchip: 985112004321567. Current weight 4.2 kg; last vet visit 12 January 2025. Vaccination batch VAX-7731; rabies booster due November 2025. Luna is known for kneading, gentle head-butts, and purring when content. She has excellent night vision, retractable claws, and always lands on her feet thanks to a strong righting reflex. Favorite prey toys: feather wand and red laser dot. Diet: 280 grams wet food daily plus fresh water.
```

### AI search examples

Open tab **AI(Vector) search** and test. Start with the **hybrid demo** below — it shows semantic search succeeding while fulltext picks the wrong document.

#### Hybrid demo: semantic search right, fulltext wrong (Target: `Tree`)

```text
Permanently rooted lifeforms trading atmospheric carbon for breathable output via sunshine. Search-and-rescue acute sense of smell.
```

The query has two parts:

1. **First sentence** — semantic paraphrase of **Tree** (`carbon`, `atmosphere`, `sunshine`, `rooted`) using words that are not literal quotes from the Tree document.
2. **Second sentence** — keyword bait from **Dogs** (`search-and-rescue`, `acute sense of smell`).

Typical results:

| Final rank | Title             | Vector (%)     | Fulltext (%)    | Rerank (%) | Combined (%) |
| ---------- | ----------------- | -------------- | --------------- | ---------- | ------------ |
| **#1**     | **Tree**          | **~42** (best) | ~53             | **~100**   | **~100**     |
| #2         | Dogs              | ~21            | **~100** (best) | ~21        | ~92          |
| #3–5       | Fish / Mice / Cat | lower          | low             | lower      | lower        |

What to notice:

- **Vector** and **Rerank** (semantic layers) → **Tree** — the first sentence carries the intended meaning.
- **Fulltext** (MiniSearch) → **Dogs** — the second sentence matches literal phrases in the Dogs document; fulltext does not understand that the first sentence is the real question.
- **Combined (RRF)** → **Tree** — vector + rerank together outweigh the fulltext mistake.

Without hybrid fusion, a keyword-only step would surface **Dogs**; semantic retrieve + rerank + RRF restore the correct **Tree** answer.

#### Keyword + rerank (Target: `Dogs`)

```text
search-and-rescue acute sense of smell
```

Expected: **Dogs** #1. **Vector** may rank **Cat** second; **Rerank** and **Fulltext** should be high for Dogs (exact phrases in the document).

#### Pet profile vs encyclopedia (Target: `Luna` — requires [document 6](#6-luna-pet-profile--optional-for-fulltext--hybrid-demo))

```text
Female cat that purrs and kneads, weight 4.2 kg, household companion.
```

The query describes a cat in plain language and adds **concrete data** (`4.2 kg`, `household`) that appear only in the **Luna** profile, not in the generic **Cat** article.

Typical results (top of list):

| Final rank | Title           | Vector (%)     | Fulltext (%) | Rerank (%) | Combined (%) |
| ---------- | --------------- | -------------- | ------------ | ---------- | ------------ |
| **#1**     | **Luna**        | ~45            | **~100**     | **~100**   | **~100**     |
| #2         | Cat             | **~52** (best) | ~47          | ~48        | ~86          |
| #3–5       | Dogs / Mice / … | lower          | low          | lower      | lower        |

What to notice:

- **Luna is still a cat** — vector ranking **Cat** slightly higher (~52% vs ~45%) does **not** mean Luna is “not a cat”. Both rows are semantically feline; the encyclopedia is a broader article, so bi-encoder can score it marginally higher on a generic “female cat…” query.
- **Fulltext** → **Luna** (~100%) — `4.2 kg`, `female`, `household`, `purrs`, `kneads` match the profile; unique numbers and fields break the tie.
- **Rerank** → **Luna** — cross-encoder sees query + **this cat’s** document, not the species article.
- **Combined (RRF)** → **Luna** — you get the **pet profile**, which is the correct answer in context, even though the topic is the same as **Cat**.

Shows why hybrid search matters when **specific records** (one pet, one ticket, one SKU) live beside **generic** articles on the same topic — same context (cat), different document to return.

#### Keyword + fulltext (Target: `Tree`)

```text
What snaps shut on insects and digests them?
```

No carnivorous plant in the corpus; **Tree** often wins via `insects` in the text and RRF. Shows fulltext + rerank correcting vector on short queries.

#### Pure semantic paraphrase (Target: `Tree`)

```text
Which lifeforms stay anchored in soil for generations, pull carbon from the atmosphere, and release gas that other species need to survive, all powered by radiation from above?
```

Expected: **Tree** #1 on vector, fulltext, rerank, and Combined — all signals agree.

#### More examples

1. **Long paraphrase** (Target: `Tree`):

   ```text
   I am looking for information about large organisms that live for hundreds of years, have a woody trunk, and use their leaves to turn sunlight into energy while providing shade and stabilized soil for the ecosystem.
   ```

2. **Behavioral description** (Target: `Cat`):

   ```text
   Small domestic predators that were respected in ancient history, known for being very independent, having great vision in the dark, and the ability to land on their feet when they jump from high places.
   ```

3. **Laboratory rodents** (Target: `Mice`):

   ```text
   Tell me about tiny mammals that are often found in houses or fields, which scientists use in laboratories to study genetics and develop new medicines because they breed very fast and are biologically similar to humans.
   ```

4. **Short phrase queries** (distinctive lines from each document):

   | Query                                                | Target |
   | ---------------------------------------------------- | ------ |
   | `righting reflex land on their feet`                 | Cat    |
   | `lateral line vibrations underwater`                 | Fish   |
   | `cambium xylem protective bark`                      | Tree   |
   | `ultrasonic vocalizations genetic similarity humans` | Mice   |

## Known limitations

- The lexical score is computed only over vector candidates, not the full corpus.
- Model bundles increase app package size and must match the target Forge runtime architecture.
- First model load can be slower than subsequent resolver calls.
- This example is optimized for clarity and RoA-friendly deployment, not for large-scale search.

## References

- [Forge SQL ORM README](https://github.com/forge-sql-orm/forge-sql-orm/blob/master/README.md)
- [Runs on Atlassian](https://developer.atlassian.com/platform/forge/runs-on-atlassian/)
- [TiDB Vector Search overview](https://docs.pingcap.com/ai/vector-search-overview/)
- [TiDB Vector functions and operators](https://docs.pingcap.com/ai/vector-search-functions-and-operators/)
