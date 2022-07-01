import React from 'react'

const AlcoholTypeTable = ({tableData}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Type</th>
                <th scope="col">Count</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Alcoholic</td>
                <td>{tableData.alcoholic}</td>
            </tr>
            <tr>
                <td>Non-Alcoholic</td>
                <td>{tableData.nonAlcoholic}</td>
            </tr>
            </tbody>
        </table>
    )
}

export default AlcoholTypeTable
