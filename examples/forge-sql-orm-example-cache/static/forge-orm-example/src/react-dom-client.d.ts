// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

declare module "react-dom/client" {
  import { Root } from "react-dom/client";
  export function createRoot(container: Element | DocumentFragment): Root;
}
