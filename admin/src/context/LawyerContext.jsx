import { set } from "mongoose";
import { createContext, useState } from "react";

export const LawyerContext =createContext();

const LawyerContextProvider=(props)=>{
    
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [lToken, setLToken]=useState(localStorage.getItem('lToken')?localStorage.getItem('lToken'):'')

    const value={
      lToken, setLToken,
      backendUrl,
    }

    return (
        <LawyerContext.Provider value={value}>
            {props.children}
        </LawyerContext.Provider>
    )
}


export default LawyerContextProvider