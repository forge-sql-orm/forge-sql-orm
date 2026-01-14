const a = `
html[data-color-mode="light"][data-theme~="light:light"], [data-subtree-theme][data-color-mode="light"][data-theme~="light:light"],
html[data-color-mode="dark"][data-theme~="dark:light"], [data-subtree-theme][data-color-mode="dark"][data-theme~="dark:light"] {
  color-scheme: dark;
  --ds-background-disabled: #B3DF72;
}
`;
export { a as default };
