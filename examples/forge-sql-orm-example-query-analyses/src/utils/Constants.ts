// SPDX-FileCopyrightText: 2025-2026 Vasyl Zakharchenko
// SPDX-License-Identifier: MIT

export interface UserResponse {
  id: number;
  name?: string | null;
  email?: string | null;
}

export interface DuplicateResponse {
  count: number;
  name: string;
  email: string;
}

export type SortType = {
  name: string;
  sortType: "ASC" | "DESC";
};
