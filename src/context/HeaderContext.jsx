import { createContext } from "react";
import { useState } from "react";

export const HeaderContext = createContext();

export function HeaderContextProvider({children}) {

    const [menuMobile, setMenuMobile] = useState(false);
    const [menuDesktop, setMenuDesktop] = useState(false);
    const [menuCart, setMenuCart] = useState(false);

    const openCloseMenuMobile = ()=>{
        setMenuMobile(!menuMobile)
    }
    const openCloseMenuDesktop = ()=>{
        setMenuDesktop(!menuDesktop)
    }
    const openCloseMenuCart = ()=>{
        setMenuCart(!menuCart)
    }
    return(
        <HeaderContext.Provider value={{menuMobile, openCloseMenuMobile, menuDesktop, openCloseMenuDesktop, menuCart, openCloseMenuCart}}>
            {children}
        </HeaderContext.Provider>
    )
}