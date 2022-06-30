import React from 'react'
import {useAppContext} from "../context";

const SearchForm = () => {
    const {setSearchTerm} = useAppContext();
    return (
        <form className="d-flex">
            <input className="form-control me-2 border-secondary" type="search" placeholder="Search"
                   aria-label="Search"/>
        </form>
    )
}

export default SearchForm
