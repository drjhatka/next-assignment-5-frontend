"use server"
import Project from '../../types/types';

export const CreateProject = async (projectData: Project) =>{
    const response = await fetch(process.env.NEXT_BACKEND_URL+'/projects/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(projectData),
        cache:"no-store"
    })
    return await response.json()
}