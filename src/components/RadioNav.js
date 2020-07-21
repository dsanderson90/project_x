import React from "react"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import "./RadioNav.css"
import RadioNavButton from "./RadioNavButton"
const RadioNav = ({ handleSetSection }) => {
  return (
    <>
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
          <RadioNavButton handleSetSection={handleSetSection} title="about" />
          <RadioNavButton
            handleSetSection={handleSetSection}
            title="projects"
          />
          <RadioNavButton handleSetSection={handleSetSection} title="blog" />
          <RadioNavButton
            handleSetSection={handleSetSection}
            title="snippets"
          />
          <RadioNavButton handleSetSection={handleSetSection} title="resume" />
        </section>
      </Flex>

    </>
  )
}

export default RadioNav
