import { Button } from "@mui/material";
import TitleBar from "../shared/TitleBar";
import Project from "@/types/types";
import ProjectCard from "../shared/ProjectCard";

const ProjectsDrawer = ({projects}:{projects:Project[]}) => {
    return (
        
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
        
    );
};

export default ProjectsDrawer;