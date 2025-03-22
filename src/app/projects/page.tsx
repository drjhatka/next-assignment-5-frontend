import ProjectCard from '@/components/shared/ProjectCard'
import TitleBar from '@/components/shared/TitleBar'
import Project from '@/types/types'

const AllProjectsPage = async () => {
  
  const response = await fetch(process.env.NEXT_BACKEND_URL + '/projects')
  const projects = await response.json()
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <TitleBar title={'All My Projects'}></TitleBar>

        </div>
      <div className='grid md:grid-cols-2  lg:grid-cols-3 md:gap-5 lg:gap-5 gap-y-5'>
        {projects.data.map((project: Project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  )
}

export default AllProjectsPage
