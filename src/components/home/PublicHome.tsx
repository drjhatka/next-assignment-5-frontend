
// import {  Button } from '@mui/material'

// import Link from 'next/link'
// import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

// import ProjectCard from '../shared/ProjectCard'
import Project from '@/types/types'
// import TitleBar from '../shared/TitleBar'
 import BioBanner from './BioBanner'
import SkillCardContainer from './SkillCardContainer'
// import NavbarUI from '../shared/NavbarUI'
import ProjectsDrawer from './ProjectsDrawer'
// import Footer from './Footer'

const PublicHome = ({ projects }: { projects: Project[] }) => {
  return (
    <div>

      <main className='flex flex-col items-center justify-center mt-16 text-center p-8'>
        {/* Hero Section */}
        <BioBanner></BioBanner>

        {/* Skills Section */}
        <SkillCardContainer></SkillCardContainer>

        {/* Projects Section */}
        <ProjectsDrawer projects={projects}></ProjectsDrawer>

        {/* Contact Section */}
      </main>
    </div>
  )
}

export default PublicHome
