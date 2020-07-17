import React from "react"
import Jump from 'react-reveal/Jump';
import Swing from 'react-reveal/Swing';


import { Flex } from "theme-ui"
export const About = ({ title, content }) => {
  return (
    <Flex sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center", margin: ["40px 80px", null, null, "40px 380px"]}}>
      <Jump delay={500}>
      <Swing delay={350}>
      <h1>{title}</h1>
      </Swing>
      </Jump>
      <p>{content}</p>
    </Flex>
  )
}
