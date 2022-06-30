import React from 'react'
import Loading from "./Loading";
import {useAppContext} from "../context";
import Cocktail from "./Cocktail";

const CocktailList = () => {
    const {cocktails, loading} = useAppContext();
    
    if (loading) {
        return <Loading/>
    }
    if (cocktails.length < 1 ) {
        return (
            <h1>No cocktails matched your search criteria</h1>
        )
    }
    return (
        <div className="container">
            <div className="row">
                    {cocktails.map((item) => {
                        return (
                            <div className="col-4">
                                <Cocktail key={item.id} {...item} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default CocktailList
