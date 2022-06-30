import React from 'react'
import Ingredient from "./Ingredient";

const Instructions = ({list}) => {
    return (
        <div>
            <h4>Instructions:</h4>
            <ul className="instructions">
                {list.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                ))}
            </ul>
        </div>
       
    )
}

export default Instructions
