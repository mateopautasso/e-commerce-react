import { createContext } from "react";
import { useState } from "react";

export const LoadingContext = createContext();

export function LoadingContextProvider({children}) {

    const [isLoading, setIsLoading] = useState(true);

    const loadingTrue = ()=>{
        setIsLoading(true)
    }
    const loadingFalse = ()=>{
        setIsLoading(false)
    }

    return (
        <LoadingContext.Provider value={{isLoading, loadingTrue, loadingFalse}}>
            {children}
        </LoadingContext.Provider>
    )
}

