import React from "react"
/** @jsx jsx */
import { useColorMode } from "theme-ui"
import { jsx, Flex } from "theme-ui"
import "./RadioNav.css"
import RadioNavButton from "./RadioNavButton"
const RadioNav = ({ handleSetSection }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
    <Flex sx={{justifyContent: "center"}}>
      <RadioNavButton title={colorMode === "default" ? "🌕" : "🌞"} />
    </Flex>
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
