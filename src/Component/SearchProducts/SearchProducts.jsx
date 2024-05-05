import React, {  useState } from 'react'
import AddtoCart from '../AddtoCart/AddtoCart'
import { SearchBar } from '../../Services/search'
import { useGlobalState } from '../../Context/Context'

function SearchProducts() {
    // const [inputs, setInputs] = useState('')
    const { setSearchInput} = useGlobalState()
    
    const getInput = (e) => {
        // setInputs(e.target.value)
        setSearchInput(e.target.value)
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
            </div>
        </div>
    )
}

export default SearchProducts