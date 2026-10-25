// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React from "react";
import "./styles.css";
import Root from "./Root";
import { createRoot } from "react-dom/client";
import { view } from "@forge/bridge";

const container = document.getElementById("root");
const root = createRoot(container!);

const renderApp = () => {
  root.render(<Root />);
};
view.theme
  .enable()
  .then(() => {
    renderApp();
  })
  .catch((e) => {
    console.error(e.message);
    renderApp();
  });
