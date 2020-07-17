import React from "react"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import "./RadioNav.css"
import RadioNavButton from "./RadioNavButton"
const RadioNav = ({ handleSetSection }) => {
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
        <RadioNavButton
          handleSetSection={handleSetSection}
          title='"projects"'
          href="projects"
        />
        <RadioNavButton
          handleSetSection={handleSetSection}
          href="about"
          title='"about"'
        />
        <RadioNavButton
          handleSetSection={handleSetSection}
          href="resume"
          title='"resume"'
        />
        <RadioNavButton
          handleSetSection={handleSetSection}
          href="blog"
          title='"blog"'
        />
        <RadioNavButton
          handleSetSection={handleSetSection}
          title='"snippets"'
          href="snippets"
        />
      </section>
    </Flex>
  )
}

export default RadioNav
