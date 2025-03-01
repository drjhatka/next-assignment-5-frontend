
import {  Button } from '@mui/material'

import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

import ProjectCard from '../shared/ProjectCard'
import Project from '@/types/types'
import TitleBar from '../shared/TitleBar'
import BioBanner from './BioBanner'
import SkillCard from './SkillCard'
import NavbarUI from '../shared/NavbarUI'

const PublicHome = ({ projects }: { projects: Project[] }) => {
  return (
    <div>
        <NavbarUI></NavbarUI>
      <main className='flex flex-col items-center justify-center mt-16 text-center p-8'>
        {/* Hero Section */}
        <BioBanner></BioBanner>

        {/* Skills Section */}
        
        <SkillCard></SkillCard>
        {/* Projects Section */}
        <section id='projects' className='mt-12 w-full  max-w-4xl'>
          <TitleBar title={"My Projects"}></TitleBar>
          <div className='grid grid-cols-1  sm:grid-cols-2 gap-6'>
            {
                projects.slice(0,4)?.map((project:Project)=><ProjectCard key={project._id} project={project}></ProjectCard>)
            }
          </div>
          <div className='my-10 '>
            <Button href='/projects' variant='contained' size='large' color='secondary' >
                See All Projects
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='mt-12 w-full max-w-4xl'>
          <h2 className='text-2xl font-semibold mb-4'>Contact Me</h2>
          <div className='flex gap-4 justify-center'>
            <Link href='https://github.com' className='text-2xl'>
              <FaGithub />
            </Link>
            <Link href='https://linkedin.com' className='text-2xl'>
              <FaLinkedin />
            </Link>
            <Link href='mailto:your@email.com' className='text-2xl'>
              <FaEnvelope />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PublicHome
