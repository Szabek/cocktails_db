import React from 'react'
import {useParams, Link} from 'react-router-dom'
import Loading from "../components/Loading";

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
    const {name, img, type} = cocktail;
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                    </div>
                </div>
                <div className="col-8">
                    D
                </div>
            </div>
        </div>
    )
}

export default SingleCocktail
