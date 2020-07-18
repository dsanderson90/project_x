import React from "react"
import Display from "./Display"
import Fade from "react-reveal/Fade"
import ProjectCard from "./ProjectCard"
import { projectsData } from "../data/projects"
export const Projects = () => {
  const projects = projectsData.map(project => {
    return (
      <ProjectCard
        key={project.id}
        title={project.title}
        tags={project.tags}
        description={project.description}
        repo={project.repo}
        url={project.url}
      />
    )
  })
  return (
    <Fade top>
      <Display>
        <h1>Projects</h1>
        {projects}
      </Display>
    </Fade>
  )
}
