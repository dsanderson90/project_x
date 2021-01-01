import React from "react"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import "./RadioNav.css"
import RadioNavButton from "./RadioNavButton"
const RadioNav = ({ handleSetSection, sections }) => {
  let t = sections.map(el => <RadioNavButton handleSetSection={handleSetSection} title={el} />)
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
          {t}
        </section>
      </Flex>

    </>
  )
}

export default RadioNav
