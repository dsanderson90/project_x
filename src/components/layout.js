/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/Nav.js"
import Header from "./header"
import { Container, Flex, Link } from "theme-ui"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container Centered container sx={{ fontFamily: "body"}}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer sx={{fontSize: ["12px", null, null, "14px"], textAlign: "center"}}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.org">Gatsby</Link>, <Link href="https://www.gatsbyjs.org">Netlify</Link>, & <Link href="https://www.gatsbyjs.org">Theme-ui</Link>
      </footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
