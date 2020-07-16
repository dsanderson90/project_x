import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import { jsx, Flex, Box } from "theme-ui"
const Nav = () => {
  return (
    <Flex
      sx={{
        fontFamily: "heading",
        fontSize: [".5rem", ".7rem"],
        fontWeight: "500",
        justifyContent: ["center", "flex-end"],
        margin: "0 0px 0 0",
      }}
    >
      <Fade right delay={300}>
        <Box sx={{ margin: "20px 8px", color: "white" }}>
          Rants
        </Box>
        <Box sx={{ margin: "20px 8px", color: "white" }}>
          Projects
        </Box>
        <Box sx={{ margin: "20px 8px", color: "white" }}>
         Snippets
        </Box>
        <Box sx={{ margin: "20px 8px", color: "white" }}>
          Contact
        </Box>
      </Fade>
    </Flex>
  )
}

export default Nav
