"use server"

import Project from "@/types/types";

const getString = (formData:FormData,key: string): string | null => {
    const value = formData.get(key);
    return typeof value === "string" ? value : null; // Ensure it's a string
};
// @ts-expect-error dont know what state for now
export const createProject = async (previousState, formData: FormData):Promise<Project> =>{

    const project ={
        name:formData.get('name'),
        description:formData.get('description'),
        technologies:(getString(formData,'technologies'))?.split(','),
        repositoryUrl:formData.get('repositoryUrl'),
        liveUrl:formData.get('liveUrl'),
        imageUrl:formData.get('imageUrl'),
        features:getString(formData,'features')?.split(',')||[],
        category:getString(formData,'category')?.split(',')||[],
        contributors:getString(formData,'contributors')?.split(',')||[]
    }
        const response = await fetch(process.env.NEXT_BACKEND_URL+'/projects/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(project),
            cache:"no-store"
        })
        return  await response.json()
}

export const getAProject = async (projectId:string) =>{
    const response = await fetch(process.env.NEXT_BACKEND_URL+`/projects/${projectId}`,{
        method:"GET",
        cache:"no-store"
    })
    return  await response.json()
}
export const getAllProjects = async () =>{
    const response = await fetch(process.env.NEXT_BACKEND_URL+`/projects/`,{
        method:"GET",
        cache:"no-store"
    })
    return  await response.json()
}

export const updateProject = async (previousState:Project | undefined, formData: FormData) =>{
    const updatedProject ={
        name:formData.get('name'),
        description:formData.get('description'),
        technologies:(getString(formData,'technologies'))?.split(','),
        repositoryUrl:formData.get('repositoryUrl'),
        liveUrl:formData.get('liveUrl'),
        imageUrl:formData.get('imageUrl'),
        features:getString(formData,'features')?.split(',')||[],
        category:getString(formData,'category')?.split(',')||[],
        contributors:getString(formData,'contributors')?.split(',')||[]
    }
    const response = await fetch(process.env.NEXT_BACKEND_URL+`/projects/${formData.get('projectId')}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedProject),
        cache:"no-store"
    })
    return  await response.json()
}