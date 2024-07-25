import { createContext } from "react";

export const CreateContextApi=createContext();


const ProvideContext=({children})=>{

    const value={
        name:"kalai 879696"
    }
    return(
        <CreateContextApi.Provider value={value}>
            {children}
        </CreateContextApi.Provider>
    )
}


export default ProvideContext;