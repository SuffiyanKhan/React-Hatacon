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
    const [totallPrice, setTotalPrice] = useState('')
    const [increment, setincrement] = useState('')
    return <GlobalContext.Provider value={{
        addProductValues,
        userId,
        url,
        id,
        totallPrice,
        countingProduct,
        searchProductsData,
        serachInput,
        increment,
        setAddProductValues,
        setUserId,
        setUrl,
        setId,
        setSearchInput,
        setSearchProductData,
        setTotalPrice,
        setincrement,
        setCountingProduct
    }}>
        {children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}