// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import React from "react";
import "./styles.css";
import App from "./App";
import { RootStoreProvider } from "./store";
import { createRoot } from "react-dom/client";
import { view } from "@forge/bridge";
const container = document.getElementById("root");
const root = createRoot(container!);

const renderApp = () => {
  root.render(
    <RootStoreProvider>
      <App />
    </RootStoreProvider>,
  );
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
