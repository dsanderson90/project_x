import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, Box } from "theme-ui"
import Fade from "react-reveal/Fade"
const Footer = () => {
  return (
    <footer
      sx={{
        fontSize: ["8px", null, null, "14px"],
        textAlign: "center",
        flexShrink: 0,
      }}
    >
        <Fade big delay={2000}>
      <Box>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Gatsby
        </Link>
        ,{" "}
        <Link
          href="https://www.netlify.com/"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Netlify
        </Link>
        , &{" "}
        <Link
          href="https://theme-ui.com/"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Theme-ui
        </Link>
      </Box>
      </Fade>
      <Fade big delay={2600}>
      <Box mt={4}>
        Developed with 💖 by{" "}
        <Link
          sx={{ color: "#00ACEE", fontSize: "10px" }}
          href="https://twitter.com/_dsanderson"
          target="_blank"
          rel="noreferrer noopenner"
        >
          @_dsanderson
        </Link>
      </Box>
      </Fade>
    </footer>
  )
}

export default Footer
