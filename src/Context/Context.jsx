import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = ({ children }) => {
    const [addProductValues, setAddProductValues] = useState("")
    const [userId, setUserId] = useState('')
    const [url, setUrl] = useState('')
    const [serachInput, setSearchInput] = useState('')
    const[searchProductsData,setSearchProductData]=useState([])

    return <GlobalContext.Provider value={{
        addProductValues,
        userId,
        url,
        searchProductsData,
        serachInput,
        setAddProductValues,
        setUserId,
        setUrl,
        setSearchInput,
        setSearchProductData
    }}>
        {children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}