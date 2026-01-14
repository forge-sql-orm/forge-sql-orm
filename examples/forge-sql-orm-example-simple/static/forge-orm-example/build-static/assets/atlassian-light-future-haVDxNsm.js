const t = `
html[data-color-mode="light"][data-theme~="light:light"], [data-subtree-theme][data-color-mode="light"][data-theme~="light:light"],
html[data-color-mode="dark"][data-theme~="dark:light"], [data-subtree-theme][data-color-mode="dark"][data-theme~="dark:light"] {
  color-scheme: light;
  --ds-background-disabled: #28311B;
}
`;
export { t as default };
