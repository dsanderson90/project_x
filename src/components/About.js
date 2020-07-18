import React from "react"
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
            <h1>{title}</h1>
          </Swing>
        </Jump>
        <p>{content}</p>
      </Display>
    </Fade>
  )
}
