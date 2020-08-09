import React from "react"
/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import Jump from "react-reveal/Jump"
import Swing from "react-reveal/Swing"
import Display from "./Display"
import Fade from "react-reveal/Fade"

export const About = ({ title, content }) => {
  return (
    <Fade bottom>
      <Display>
        <Jump delay={500}>
          <Swing delay={350}>
            <Heading as="h1">{title}</Heading>
          </Swing>
        </Jump>
        <p sx={{ lineHeight: "body" }}>{content}</p>
      </Display>
    </Fade>
  )
}
