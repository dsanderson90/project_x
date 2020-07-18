/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Flex, Box } from "theme-ui"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import RadioNav from "../components/RadioNav"
import { Snippets } from "../components/Snippets"
import { Blog } from "../components/Blog"
import { About } from "../components/About"
import { Resume } from "../components/Resume"
import { Projects } from "../components/Projects"
const IndexPage = () => {
  const [components, setComponents] = useState({
    about: (
      <About
        title="Hi I am David Sanderson!"
        content="I am a software developer from Albuquerque, New Mexico. I enjoy music, design, and engineering creative solutions to interesting problems."
      />
    ),
    projects: <Projects />,
    resume: <Resume />,
    blog: <Blog />,
    snippets: <Snippets />,
  })

  const initialState = "about"
  const [section, setSection] = useState(initialState)
  const handleSetSection = title => {
    setSection(title)
  }

  return (
    <Layout>
      <Fade top>
        <Flex
          sx={{
            color: "white",
            justifyContent: "center",
            fontSize: ["14px", null, null, "20px"],
            letterSpacing: "2px",
            padding: "20px 0",
            borderBottom: "1px solid #E5FFF0",
            width: ["50%", null, null, "33%"],
            margin: "0 auto",
          }}
        >
          David Sanderson
        </Flex>
      </Fade>
      <Fade bottom>
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
            margin: "20px 0",
          }}
        >
          Software Developer
        </Box>
      </Fade>
      <RadioNav handleSetSection={handleSetSection} />
      {components[section]}
    </Layout>
  )
}

export default IndexPage
