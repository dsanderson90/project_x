import React from "react"
import { Box, Flex, Button, Link } from "theme-ui"
const ProjectCard = ({ title, tags, description, repo, url }) => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "2px solid white",
        padding: "10px",
        margin: "20px 0",
      }}
    >
      <Flex mt={2} sx={{ justifyContent: "center" }}>
        {tags &&
          tags.map(el => (
            <Button p={1} variant="secondary" mx={2}>
              {el.toLowerCase()}
            </Button>
          ))}
      </Flex>
      <h3>{title}</h3>
      <p>{description}</p>
      <Flex sx={{ justifyContent: "flex-end" }}>
        {url && (
          <Link target="_blank" rel="noopenner noreferrer" href={url}>
            <Button p={1} my={2} mx={1}>
              See Live
            </Button>
          </Link>
        )}
        {repo && (
          <Link target="_blank" rel="noopenner noreferrer" href={repo}>
            <Button p={1} my={2} mx={1} variant="secondary">
              View Source
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  )
}

export default ProjectCard
