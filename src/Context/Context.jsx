import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = ({ children }) => {
    const [addProductValues, setAddProductValues] = useState("")
    const [userId, setUserId] = useState('')
    const [id, setId] = useState('')
    const [url, setUrl] = useState('')
    const [serachInput, setSearchInput] = useState('')
    const [searchProductsData, setSearchProductData] = useState([])
    const [countingProduct, setCountingProduct] = useState('')
    return <GlobalContext.Provider value={{
        addProductValues,
        userId,
        url,
        id,
        countingProduct,
        searchProductsData,
        serachInput,
        setAddProductValues,
        setUserId,
        setUrl,
        setId,
        setSearchInput,
        setSearchProductData,
        setCountingProduct
    }}>
        {children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}