import React from 'react'

const Description = ({description}) => {
    return (
        <div>
            <h3>Description:</h3>
            <article>
                {description}
            </article>
        </div>
    )
}

export default Description
