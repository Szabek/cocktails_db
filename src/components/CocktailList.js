import React from 'react'
import Loading from "./Loading";
import {useAppContext} from "../context";

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
        <div>
            <h2>cocktail list component</h2>
        </div>
    )
}

export default CocktailList
