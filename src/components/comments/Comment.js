import React from 'react'

const Comment = ({message, author, date}) => {
    
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {date}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{message}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                </div>
            </div>
        </div>
        
    )
}

export default Comment
