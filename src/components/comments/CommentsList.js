import React from 'react'
import Comment from "./Comment";
import {useAppContext} from "../../context";
import AddComment from "./AddComment";
import style from "../../styles/Comments.scss"

const CommentsList = ({id}) => {
    const {getCommentsByID} = useAppContext();
    const coctailComments = getCommentsByID(parseInt(id));
    const showCreator = () => {
        let component = document.getElementById("addComment");
        component.style.display = 'block';
    }
    return (
        <div className="m-3">
            <h3>Comments:</h3>
            {coctailComments.map((item) => {
                return (
                    <div className="col-12">
                        <Comment key={item.id} {...item} />
                    </div>
                )
            })}
            <button className="btn btn-warning" onClick={() => showCreator()}>AddComment</button>
            <div id="addComment"> 
                <AddComment idCoctail={id}/>
            </div>
        </div>
    )
}

export default CommentsList
