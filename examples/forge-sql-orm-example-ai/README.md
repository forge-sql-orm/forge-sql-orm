# Forge SQL ORM — AI Semantic Search Example

This example demonstrates **AI semantic search** with Forge SQL ORM:

- Frontend computes embeddings with local model `all-MiniLM-L6-v2` (`@huggingface/transformers`).
- Backend stores vectors in TiDB/Forge SQL.
- Search uses cosine distance (`vecCosineDistance`) and returns the closest documents.

## What this example does

1. In **Add documents**, you enter:
   - `Title`
   - `Document` (up to 2048 chars)
2. Before insert, frontend generates embedding from `Document`.
3. Backend `create` resolver saves:
   - `title`
   - `document`
   - `embedding`
4. In **AI(Vector) search**, you enter query text.
5. Frontend generates query embedding and calls backend `search`.
6. Results are sorted by cosine distance and shown as:
   - `id`
   - `title`
   - document open button
   - similarity percent: `(1 - distance) * 100`

## Project structure

- Backend resolvers: [`src/index.ts`](./src/index.ts)
- Schema: [`src/entities/schema.ts`](./src/entities/schema.ts)
- Frontend app: [`static/forge-orm-example/src/App.tsx`](./static/forge-orm-example/src/App.tsx)
- Embedding code: [`static/forge-orm-example/src/ai.ts`](./static/forge-orm-example/src/ai.ts)

## Requirements

- [Forge CLI](https://developer.atlassian.com/platform/forge/)
- Atlassian site for `forge install`
- Node.js compatible with your Forge app runtime

## Quick start

### 1) Install backend dependencies

```sh
cd examples/forge-sql-orm-example-ai
npm install
```

### 2) Install and build frontend

```sh
cd static/forge-orm-example
npm install
npm run build
```

### 3) Deploy and install app

```sh
cd ..
forge register   # once
forge deploy
forge install --site <your-site>.atlassian.net
```

## Important note about vector dimension

The embedding model `all-MiniLM-L6-v2` returns vectors with a fixed dimension.  
`embedding` column dimension in [`src/entities/schema.ts`](./src/entities/schema.ts) must match that model output exactly.

If dimensions do not match, insert/search will fail at DB level.

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

### AI search examples

Open tab **AI(Vector) search** and test:

1. **Test: extract main topic** (Target: `Tree`)

   ```text
   I am looking for information about large organisms that live for hundreds of years, have a woody trunk, and use their leaves to turn sunlight into energy while providing shade and stabilized soil for the ecosystem.
   ```

   Expected top match: **Tree** (clear lead due to "woody trunk" and photosynthesis context).

2. **Test: behavioral description** (Target: `Cat`)

   ```text
   Small domestic predators that were respected in ancient history, known for being very independent, having great vision in the dark, and the ability to land on their feet when they jump from high places.
   ```

   Expected top match: **Cat** (ancient history + landing on feet + night vision).

3. **Test: mixed long query** (Target: `Mice`)

   ```text
   Tell me about tiny mammals that are often found in houses or fields, which scientists use in laboratories to study genetics and develop new medicines because they breed very fast and are biologically similar to humans.
   ```

   Expected top match: **Mice** (strong medical research and rodent traits signal).

## References

- [Forge SQL ORM README](https://github.com/forge-sql-orm/forge-sql-orm/blob/master/README.md)
- [TiDB Vector Search overview](https://docs.pingcap.com/ai/vector-search-overview/)
- [TiDB Vector functions and operators](https://docs.pingcap.com/ai/vector-search-functions-and-operators/)
