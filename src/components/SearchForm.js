import React from 'react'
import {useAppContext} from "../context";

const SearchForm = () => {
    const {setSearchTerm} = useAppContext();
    return (
        <div className="form-row m-3">
            <div className="form-group col-md-3 mx-auto">
                <input className="form-control me-2 border-secondary" type="search" placeholder="Search"
                       aria-label="Search"/>
            </div>
        </div>
    )
}

export default SearchForm
