import React from "react"
/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import "./RadioNav.css"
import RadioNavButton from "./RadioNavButton"
const RadioNav = () => {
  return (
      <Box className="container">
        <section className="dark">
          <RadioNavButton title="Test" />
          <RadioNavButton title="Test" />
          <RadioNavButton title="Test" />
          <RadioNavButton title="Test" />
          <RadioNavButton title="Test" />
        </section>
      </Box>
  )
}

export default RadioNav
