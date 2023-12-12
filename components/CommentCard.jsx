function CommentCard ({comment}){
    const dateOnlyRegex = /(\d+)[-](\d+)[-](\d{2})/g;
    return (
        <li className = "comment-card">
            <p>{comment.body}</p>
            <p>By: {comment.author}</p>
            <p>Commented on: {comment.created_at.match(dateOnlyRegex)}</p>
            <p>Votes: {comment.votes}</p>
            

        </li>
    )
}

export default CommentCard;