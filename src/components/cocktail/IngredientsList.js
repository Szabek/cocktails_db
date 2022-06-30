import React from 'react'
import Ingredient from "./Ingredient";

const IngredientsList = ({list}) => {
    return (
        <div>
            <h4>Ingredients:</h4>
            <ul className="ingredients">
                {list.map((ingredient, i) => (
                    <Ingredient key={i} {...ingredient} />
                ))}
            </ul>
        </div>
    )
}

export default IngredientsList
