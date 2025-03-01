import {jwtDecode} from "jwt-decode";

const decodeAccessToken= (accessToken:string)=>{
    return jwtDecode(accessToken)
}

export  const authUtils ={
    decodeAccessToken
}