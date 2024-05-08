import React from 'react'
import AddtoCart from '../AddtoCart/AddtoCart'
import { useGlobalState } from '../../Context/Context'
import LogoutButton from '../LogoutButton/LogoutButton'

function SearchProducts() {
    const { setSearchInput,countingProduct} = useGlobalState()
    
    const getInput = (e) => {
        setSearchInput(e.target.value)
    }
    if(countingProduct){
        
    }
    return (
        <div>
            <div className="d-flex" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => { getInput(e) }}
                />
                
                <AddtoCart />
                <LogoutButton/>
            </div>
        </div>
    )
}

export default SearchProducts