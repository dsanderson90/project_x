import React from "react"
/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { copyToClipboard } from "../utils/copy-to-clipboard"
const Snippet = ({ language = "*", title, code, why }) => {
  const handleClick = () => {
    copyToClipboard(code)
  }

  return (
    <div sx={{ width: "100%" }}>
      <Heading as="h4" mb={2} mt={4}>
        {title}
      </Heading>
      <pre>
        <button
          sx={{
            position: "absolute",
            right: "1.25rem",
            top: "0.5rem",
            border: "0",
            borderRadius: "3px",
            padding: "0.5em",
            margin: "0.25em",
            opacity: "0.7",
            cursor: "pointer",
            fontFamily: "monospace",
            "&:hover": {
              opacity: "1",
            },
          }}
          onClick={handleClick}
        >
          Copy
        </button>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

export default Snippet
