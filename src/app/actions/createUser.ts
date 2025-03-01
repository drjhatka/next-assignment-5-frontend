"use server"
import { TUser } from '@/types/types';

export const createUser = async(userData:TUser)=>{
    const response = await fetch(process.env.NEXT_BACKEND_URL+'/users',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData),
        cache:"no-store"
    })
    return await response.json()

}