import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedUserRoute=({children})=>{
    const user = localStorage.getItem('userMail')
    if(user){
        return children
    }
    else{
        return <Navigate to={'/login'}/>
    }
}

export const ProtectedAdminRoute=({children})=>{
    const user = localStorage.getItem('userMail')
    if(user == 'guptayashi32003@gmail.com'){
        return children
    }
    else{
        return <Navigate to={'/login'}/>
    }
}