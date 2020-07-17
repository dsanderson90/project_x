import React from "react"
import Fade from "react-reveal/Fade"
import { Flex } from "theme-ui"
export const About = ({ title, content }) => {
  return (
    <Flex sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center", margin: ["40px 80px", null, null, "40px 380px"]}}>
      <h1>{title}</h1>
      <p>{content}</p>
    </Flex>
  )
}
