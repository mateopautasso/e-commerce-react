import { createContext } from "react";
import { useState } from "react";

export const HomeContext = createContext();

export function HomeContextProvider({children}) {

    const [isLoading, setIsLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    const changeLoader = (boolean)=>{
        setIsLoading(boolean)
    }
    const loadProducts = (arrProducts) => {
        setListOfProducts(arrProducts)
    }
    const loadTotalProducts = (number)=>{
        setTotalProducts(number)
    }

    return (
        <HomeContext.Provider
            value={{isLoading, changeLoader, totalProducts, loadTotalProducts, listOfProducts, loadProducts}}>
            {children}
        </HomeContext.Provider>
    )
}

