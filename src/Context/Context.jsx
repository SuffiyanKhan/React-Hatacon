import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = ({ children }) => {
    const [addProductValues, setAddProductValues] = useState("")
    const [userId, setUserId] = useState('')
    const [url, setUrl] = useState('')

    return <GlobalContext.Provider value={{
        addProductValues,
        userId,
        url,
        setAddProductValues,
        setUserId,
        setUrl
    }}>
        {children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}