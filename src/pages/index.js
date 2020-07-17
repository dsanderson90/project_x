import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import { Flex, Box } from "theme-ui"
import RadioNav from "../components/RadioNav"
import { Reveal } from "react-reveal"
const IndexPage = () => (
  <Layout>
    <Flex sx={{ flexDirection: "column", fontFamily: "body" }}>
      <Reveal top>
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "14px",
            letterSpacing: "2px",
            padding: "20px",
            borderBottom: "1px solid #E5FFF0",
            margin: " 0 33%",
            
        
          }}
        >
          David Sanderson
        </Box>
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
          Front End Developer
        </Box>
      </Reveal>
      <RadioNav />
    </Flex>
  </Layout>
)

export default IndexPage
