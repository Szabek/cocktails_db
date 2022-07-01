import React from 'react'
import {useParams, Link} from 'react-router-dom'
import Loading from "../components/Loading";
import Description from "../components/cocktail/Description";
import IngredientsList from "../components/cocktail/IngredientsList";
import Instructions from "../components/cocktail/Instructions";
import Rating from "../components/cocktail/Rating";
import CommentsList from "../components/comments/CommentsList";

const SingleCocktail = () => {
    const {id} = useParams()
    const [loading, setLoading] = React.useState(false)
    const [cocktail, setCocktail] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getCocktail() {
            try {
                const response = await fetch(
                    `http://localhost:8000/cocktails/${id}`
                )
                const data = await response.json()
                if (data) {
                    setCocktail(data)
                } else {
                    setCocktail(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getCocktail()
    }, [id])
    if (loading) {
        return (<Loading/>)
    }
    if (!cocktail) {
        return (<h2>No cocktail to display</h2>)
    }
    const {name, type, img, glass, description, ingredients, instructions, ratings} = cocktail;
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={"/images/" + img} className="card-img-top" alt={name}/>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Rating id={id} ratings={ratings}/>
                                    </li>
                                    <li className="list-group-item">
                                        Type: {type}
                                    </li>
                                    <li className="list-group-item">
                                        Glass: {glass}
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div className="col-8">
                    <Description description={description}/>
                    <IngredientsList list={ingredients}/>
                    <Instructions list={instructions}/>
                </div>
            </div>
            <div className="row">
                <CommentsList id={id}/>
            </div>
        </div>
    )
}

export default SingleCocktail
