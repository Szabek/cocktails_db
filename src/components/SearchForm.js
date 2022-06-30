import React from 'react'
import {useAppContext} from "../context";

const SearchForm = () => {
    const { setSearchTerm } = useAppContext()
    const searchValue = React.useRef('')
    
    React.useEffect(() => {
        searchValue.current.focus()
    }, [])
    
    function searchCocktail() {
        setSearchTerm(searchValue.current.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }
    
    return (
        <div className="form-row m-3">
            <div className="form-group col-md-3 mx-auto">
                <form className='search-form' onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2 border-secondary"
                            type='search'
                            placeholder="Search"
                            name='name'
                            id='name'
                            ref={searchValue}
                            onChange={searchCocktail}
                        />
                </form>
            </div>
        </div>
    )
}

export default SearchForm
