/** @jsx jsx */
import { jsx, Flex, Button, Heading } from "theme-ui"
import React, { useEffect } from "react"
import Prism from "prismjs"
import Display from "./Display"
import Fade from "react-reveal/Fade"

import { jsSnippets, cssSnippets, htmlSnippets } from "../data/snippets"
import Snippet from "./Snippet"
export const Snippets = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
    return () => {}
  }, [])

  const js = jsSnippets.map(el => (
    <Snippet
      title={el.title}
      language="javascript"
      code={el.code}
      purpose={el.purpose}
    />
  ))
  const css = cssSnippets.map(el => (
    <Snippet
      title={el.title}
      language="css"
      code={el.code}
      purpose={el.purpose}
    />
  ))
  const html = htmlSnippets.map(el => (
    <Snippet
      title={el.title}
      language="html"
      code={el.code}
      purpose={el.purpose}
    />
  ))

  return (
    <Display>
      <Fade top>
        <h1>Snippets</h1>
      </Fade>
      <Fade delay={1000}>
        <h4 sx={{ textAlign: "center" }}>
          A vault for frequently used code that I often forget or google.{" "}
          <span>😬</span>
        </h4>
      </Fade>
      <Flex my={4}>
        <Fade delay={1500}>
          <Button mx={2} as="a" variant="secondary" href="#js">
            JS
          </Button>
        </Fade>
        <Fade delay={1750}>
          <Button as="a" href="#css" mx={2}>
            CSS
          </Button>
        </Fade>
        <Fade delay={2000}>
        <Button mx={2} as="a" variant="secondary" href="#html">
          HTML
        </Button>
        </Fade>
      </Flex>
      <Fade delay={3000}>
      <Heading mt={4} id="js">
        JavaScript
      </Heading>
      </Fade>

      {js}
          
      <Heading mt={4} id="css">
        CSS
      </Heading>
      {css}

      <Heading mt={4} id="html">
        HTML
      </Heading>
      {html}
    </Display>
  )
}
