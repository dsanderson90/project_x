import React from "react"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import "./RadioNav.css"
import RadioNavButton from "./RadioNavButton"
const RadioNav = () => {
  return (
    <Flex
      sx={{ justifyContent: "center", alignItems: "center" }}
      className="container"
    >
      <section
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          position: "relative",
        }}
        className="dark"
      >
        <RadioNavButton title='"projects"' />
        <RadioNavButton title='"about"' />
        <RadioNavButton title='"resume"' />
        <RadioNavButton title='"blog"' />
        <RadioNavButton title='"snippets"' />
      </section>
    </Flex>
  )
}

export default RadioNav
