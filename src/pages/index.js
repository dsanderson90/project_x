import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Flex, Box } from "theme-ui"
import RadioNav from "../components/RadioNav"
import Fade from 'react-reveal/Fade';
import { Snippets } from "../components/Snippets"
import { Blog } from "../components/Blog"
import { Resume } from "../components/Resume"
const IndexPage = () => {
  const lookup ={
    "about": "Hi I am David Sanderson! I am a software developer from Albuquerque, New Mexico. I enjoy music, design, and engineering creative solutions to interesting problems."
  }

  const initialState = lookup["about"]
  const [section, setSection] = useState(lookup["about"])
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
            margin: [" 0 10%", "null", "0 20%", " 0 33%"],
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

      <Flex px={[1, 3, 5, 7]} mx={[2, null, null, null]} my={4} sx={{justifyContent: "center"}}>

      {section}
      </Flex>
      </Fade>
    </Layout>
  )
}

export default IndexPage
