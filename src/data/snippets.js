export const cssSnippets = [
  {
    title: "Reset box-sixing to border-box",
    code: `
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}`,
    why: "",
  },
]

export const jsSnippets = [
  {
    title: "Remove Duplicates from an array",
    code: `const unique = [...new Set(array)];`,
  },
]

export const htmlSnippets = [
  {
    title: "Open a link in a new tab.",
    code: `
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noreferrer">
  Link Name here
</a>`,
    why: "",
  },
]
