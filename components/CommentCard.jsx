import { useState } from "react";

function CommentCard ({comment}){


    

    return (
        <li className = "comment-card">
            <p>{comment.body}</p>
            <p>By: {comment.author}</p>
            <p>Votes: {comment.votes}</p>


        </li>
    )
}

export default CommentCard;