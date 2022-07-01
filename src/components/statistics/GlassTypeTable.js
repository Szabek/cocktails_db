import React from 'react'
import Cocktail from "../Cocktail";

const GlassTypeTable = ({tableData}) => {
    let entries = Object.entries(tableData);
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Type</th>
                <th scope="col">Count</th>
            </tr>
            </thead>
            <tbody>
            {entries.map((item) => {
                return (
                    <tr>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                    </tr>

                )
            })}
            </tbody>
        </table>
    )
}

export default GlassTypeTable
