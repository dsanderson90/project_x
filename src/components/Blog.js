/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Display from "./Display"
import Fade from "react-reveal/Fade"

export const Blog = () => (
  <Fade top>
    <Display>
      <h1>Blog</h1>
      <h4 sx={{ textAlign: "center", lineHeight: "170%" }}>Thanks for stopping by! I'm working on my first blog post, come check it out later!</h4>
    </Display>
  </Fade>
)
