/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, Box } from "theme-ui"
import Fade from "react-reveal/Fade"

const Footer = () => {
  return (
    <footer
      sx={{
        fontSize: ["8px", null, null, "14px"],
        flexShrink: 0,
        margin: "0 auto",
        textAlign: "center",
        width: ["100%", null, null, "37%"],
      }}
    >
      <Fade big delay={2000}>
        <Box>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link
            variant="primary"
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Gatsby
          </Link>
          ,{" "}
          <Link
            variant="primary"
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer noopenner"
          >
            Netlify
          </Link>
          , &{" "}
          <Link
            variant="primary"
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
          Developed with{" "}
          <span role="img" aria-label="emoji">
            💖
          </span>{" "}
          by{" "}
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
