import React from "react"
import Display from "./Display"
import Fade from "react-reveal/Fade"
import ProjectCard from "./ProjectCard"
import { projectsData } from "../data/projects"
export const Projects = () => {
  const projects = projectsData.map((project, i) => {
    let mirror = {
      mirror: i % 2 == 0,
    }
    return (
      <Fade delay={500} left {...mirror}>
        <ProjectCard
          key={project.id}
          title={project.title}
          tags={project.tags}
          description={project.description}
          repo={project.repo}
          url={project.url}
        />
      </Fade>
    )
  })
  return (
    <Display>
      <Fade delay={250} top>
        <h1>Projects</h1>
      </Fade>
      <div>{projects}</div>
    </Display>
  )
}
