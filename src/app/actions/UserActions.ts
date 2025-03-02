"use server"
import {cookies} from "next/headers";
import {TUser} from "@/types/types";


export const loginUser =async(loginData:{email:string, password:string})=> {
    const response =await  fetch(process.env.NEXT_BACKEND_URL+'/auth/login',{
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    })
    const loginResponse = await response.json()
    const cookieStore= await cookies()
    //set accessToken in client cookie
    cookieStore.set('accessToken', loginResponse.accessToken)
    return loginResponse
}

export const logoutUser =async()=> {
    const response:Response = await fetch(process.env.NEXT_BACKEND_URL+'/auth/logout',{
        method: 'POST',
    })

    console.log("Res",response)
    return await response.json();
}

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

export const getUser =async(email:{email:string})=> {
    const response = await fetch(process.env.NEXT_BACKEND_URL+'/users/'+email)
    return await response.json()
}
export const getUsers =async()=> {
    const response = await fetch(process.env.NEXT_BACKEND_URL+'/users/')
    return await response.json()
}
