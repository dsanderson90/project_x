import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Flex, Box } from "theme-ui"
import RadioNav from "../components/RadioNav"
import Fade from "react-reveal/Fade"
import { Snippets } from "../components/Snippets"
import { Blog } from "../components/Blog"
import { About } from "../components/About"
import { Resume } from "../components/Resume"
const IndexPage = () => {
  const [lookup, setLookup] = useState({
    about: (
      <About title="Hi I am David Sanderson!" content="I am a software developer from Albuquerque, New Mexico. I enjoy music, design, and engineering creative solutions to interesting problems." />
    ),
    resume: (
      <Resume/>
    )
  })
  const initialState = lookup["about"]
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
            padding: "20px",
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
        <Flex sx={{ width: ['10%', '50%', '33%'], margin: "40px auto"}}>
          {section}
        </Flex>
      </Fade>
    </Layout>
  )
}

export default IndexPage
