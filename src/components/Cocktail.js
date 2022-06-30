import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Cocktail.scss'

export default function Cocktail({ id, name, type, img}) {
    return (
        <div className="card">
            <img src={"/images/" + img} height={300} className="card-img-top listing-image" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5> 
                    <div className="mb-3">
                        <li className="list-group-item">Type: {type}</li>
                    </div>
                    <a href={'cocktail/' + id} className="btn btn-warning fw-bold">Details</a> 
                </div>
        </div>
    )
}
