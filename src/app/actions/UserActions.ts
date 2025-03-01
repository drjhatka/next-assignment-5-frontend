"use server"
import {cookies} from "next/headers";

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
    const response:Response = await fetch('http://localhost:5000/api/auth/logout',{
        method: 'POST',
    })

    console.log("Res",response)
    return await response.json();
}