import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Flex, Box } from "theme-ui"
import RadioNav from "../components/RadioNav"
import { Reveal } from "react-reveal"
import { Snippets } from "../components/Snippets"
import { Blog } from "../components/Blog"
import { Resume } from "../components/Resume"
const IndexPage = () => {
  const lookup ={
    "about": "Hi I am David Sanderson! I am a software developer from Albuquerque New Mexico. I am passionate about design and engineering creative solutions to interesting problems."
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
      <Reveal top>
        <Flex
          sx={{
            color: "white",
            justifyContent: "center",
            fontSize: ["14px", null, null, "20px"],
            letterSpacing: "2px",
            padding: "20px",
            borderBottom: "1px solid #E5FFF0",
            margin: [" 0 10%", null, null, " 0 33%"],
          }}
        >
          David Sanderson
        </Flex>
      </Reveal>
      <Reveal bottom>
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
      </Reveal>
      <RadioNav handleSetSection={handleSetSection} />
      <Reveal right>

      <Flex my={4} sx={{justifyContent: "center"}}>

      {section}
      </Flex>
      </Reveal>
    </Layout>
  )
}

export default IndexPage
