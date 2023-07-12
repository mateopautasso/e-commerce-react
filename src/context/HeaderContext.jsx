import { createContext } from "react";
import { useState } from "react";

export const HeaderContext = createContext();

export function HeaderContextProvider({children}) {

    const [menuDesktop, setMenuDesktop] = useState(false);
    const [menuCart, setMenuCart] = useState(false);

    const openCloseMenuDesktop = ()=>{
        setMenuDesktop(!menuDesktop)
    }
    const openCloseMenuCart = ()=>{
        setMenuCart(!menuCart)
    }
    return(
        <HeaderContext.Provider value={{menuDesktop, openCloseMenuDesktop, menuCart, openCloseMenuCart}}>
            {children}
        </HeaderContext.Provider>
    )
}