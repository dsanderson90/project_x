import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Flex, Box } from "theme-ui"
import RadioNav from "../components/RadioNav"
import Fade from "react-reveal/Fade"
import { Snippets } from "../components/Snippets"
import { Blog } from "../components/Blog"
import { About } from "../components/About"
import { Resume } from "../components/Resume"
import { Projects } from "../components/Projects"
const IndexPage = () => {
  const [components, setComponents] = useState([
    <About
      title="Hi I am David Sanderson!"
      content="I am a software developer from Albuquerque, New Mexico. I enjoy music, design, and engineering creative solutions to interesting problems."
    />,
    <Projects />,
    <Resume />,
    <Blog />,
    <Snippets />,
  ])
  const initialState = components[0]
  const [section, setSection] = useState(initialState)
  const handleSetSection = title => {
    setSection(title)
  }

  useEffect(() => {
    console.log(section)
    return () => {}
  }, [section, setSection])
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
      <Fade bottom>
        {components[0]}
      </Fade>
    </Layout>
  )
}

export default IndexPage
