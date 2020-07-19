import React from "react"

import Display from "./Display"
import Fade from "react-reveal/Fade"
import ResumeLink from "./ResumeLink";

export const Resume = () => (
  <Fade top>
    <Display>
      <ResumeLink link="https://google.com"/>
    </Display>
  </Fade>
)
