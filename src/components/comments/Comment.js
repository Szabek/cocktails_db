import React from 'react'

const Comment = ({message, author, date}) => {
    
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {author}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{message}</p>
                        <footer className="blockquote-footer">{date}</footer>
                    </blockquote>
                </div>
            </div>
            {/*<h5>author</h5>*/}
            {/*<p>{message}</p>*/}
        </div>
        
    )
}

export default Comment
