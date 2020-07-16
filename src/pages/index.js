import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Card from "../components/Card"

import {  Flex, Box } from "theme-ui"


import RadioNav from "../components/RadioNav"
const IndexPage = () => (
  <Layout>

  <Flex sx={{ flexDirection: "column"}}>
  <Box sx={{ color: "white", textAlign: "center" }}>David Sanderson</Box>
  <RadioNav />
  </Flex>
  </Layout>
)

export default IndexPage
