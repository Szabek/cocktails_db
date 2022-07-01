import React from 'react'
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {useAppContext} from "../../context";

const Rating = ({id, ratings}) => {
    const {rateCocktail} = useAppContext();

    const averageAndRound = (arr) => {
        const av = Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 2) / 2;
        return Number.isNaN(av) ? 'Brak oceny. Bądź pierwszy!' : av;
    }
    
    return (
        <div>
            <ReactStars classNames="stars" count={5}
                        value={averageAndRound(ratings)}
                        onChange={(rate) => rateCocktail(id, rate)}
                        size={25}
            />
            <div className="avgRateText"> Average : {averageAndRound(ratings)} [ votes:{' '}
                {ratings.length}]
            </div>
        </div>
    )
}

export default Rating
