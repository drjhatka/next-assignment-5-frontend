"use server"
import {Blog} from "@/types/types";

export const createBlog = async(blogData:Blog)=>{
    const response = await fetch( process.env.NEXT_BACKEND_URL+'/blogs/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(blogData),
        cache:"no-store"
    })
    return await response.json()
}

export const getBlogs = async(blogId:string)=>{

}

export const getAllBlogs = async()=> {
    const response =await fetch(process.env.NEXT_BACKEND_URL+'/blogs/', {
        method:"GET",
    })
    return await response.json()
}

export const updateBlog = async(blogData:Blog)=>{}

export const deleteBlog = async(blogId:string)=>{}