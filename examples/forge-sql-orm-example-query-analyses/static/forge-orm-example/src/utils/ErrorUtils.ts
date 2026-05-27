// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

import { showFlag } from "@forge/bridge";

export const showError = (title: string, message: string) => {
  showFlag({
    id: "error-flag",
    title: title,
    type: "error",
    description: message,
    isAutoDismiss: true,
  });
};
