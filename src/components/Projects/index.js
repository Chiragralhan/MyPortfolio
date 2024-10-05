import React from 'react'
import { projects } from '../../data/constants'
import ProjectCard from '../Cards/ProjectCards'
import { CardContainer, Container, Desc, Title, Wrapper } from './ProjectsStyle'

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          {/* You can add a description here if necessary */}
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
