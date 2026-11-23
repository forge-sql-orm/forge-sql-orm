// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { fileURLToPath } from "node:url";
import { prepareEsmDist } from "../../scripts/prepare-esm-dist.mjs";

prepareEsmDist(fileURLToPath(new URL("../dist/", import.meta.url)));
