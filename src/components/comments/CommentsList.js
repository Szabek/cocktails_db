import React from 'react'
import Comment from "./Comment";
import {useAppContext} from "../../context";
import Cocktail from "../Cocktail";

const CommentsList = ({id}) => {
    const {getCommentsByID} = useAppContext();
    const coctailComments = getCommentsByID(parseInt(id));
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
        </div>
    )
}

export default CommentsList
