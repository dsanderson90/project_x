export const cssSnippets = [
  {
    title: "Reset box-sixing to border-box.",
    code: `
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}`,
    purpose: "",
  },
  {
    title: "Polaroid",
    code: `img.polaroid {
    background:#000; /*Change this to a background image or remove*/
    border:solid #fff;
    border-width:6px 6px 20px 6px;
    box-shadow:1px 1px 5px #333; /* Standard blur at 5px. Increase for more depth */
    -webkit-box-shadow:1px 1px 5px #333;
    -moz-box-shadow:1px 1px 5px #333;
    height:200px; /*Set to height of your image or desired div*/
    width:200px; /*Set to width of your image or desired div*/
}`,
  },
]

export const jsSnippets = [
  {
    title: "Array to CSV",
    code: `const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => 
      \`"\${x}"\`).join(delimiter))
      .join('\n'):`,
    purpose: " converts the elements to strings with comma-separated values.",
  },
  {
    title: "isBrowser",
    code:
      "const isBrowser = () => ![typeof window, typeof document].includes('undefined');",
    purpose: "checks if the code is being executed in a browser.",
  },
  {
    title: "Bottom Visible",
    code: `const bottomVisible = () =>
      document.documentElement.clientHeight + window.scrollY >=
      (document.documentElement.scrollHeight || document.documentElement.clientHeight);`,
    purpose: "checks if the bottom of the page is visible",
  },
  {
    title: "Remove Duplicates from an array.",
    code: `const unique = [...new Set(array)];`,
  },
  {
    title: "Create Directory",
    code: `const fs = require('fs');
    const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
    createDirIfNotExists('test'); 
    // creates the directory 'test', if it doesn't exist`,
  },
  {
    title: "is",
    code: `const is = (type, val) => ![, null].includes(val) && val.constructor === type;`,
    purpose: `checks if a value is a particular type`,
  },
]

export const htmlSnippets = [
  {
    title: "Open a link in a new tab.",
    code: `
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noreferrer nooppener">
  Link Name here
</a>`,
    purpose: "",
  },
]
