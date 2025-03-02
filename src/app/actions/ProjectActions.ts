"use server"

import Project from "@/types/types";

export const projectActions = async (previousState, formData: FormData):Promise<Project> =>{
    const project ={
        name:formData.get('name'),
        description:formData.get('description'),
        technologies:formData.get('technologies').split(','),
        repositoryUrl:formData.get('repositoryUrl'),
        liveUrl:formData.get('liveUrl'),
        imageUrl:formData.get('imageUrl'),
        features:formData.get('features').split(','),
        category:formData.get('category').split(','),
        contributors:formData.get('contributors').split(',')
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