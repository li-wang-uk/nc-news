import { useState, useEffect} from "react";
import { deleteCommentById, getAllCommentsById } from "../src/api";
import CommentCard from "./CommentCard";
import { useParams } from 'react-router-dom';
import NewComment from "./NewComment";
function CommentList() {
    const[comments,setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    const [message,setMessage] =useState(null)
    const [err,setErr] =useState(false)
    useEffect(() => {
        getAllCommentsById(article_id)
        .then((data) => {
         
                setComments(data);
                setIsLoading(false);
        })
    },[])


    const handleDelete = (comment) => {
        return () => {if (comment.author === "tickle122") {
            
            setComments( (currComments) => {
                return  [...currComments.filter(commentToDelete => commentToDelete.comment_id !== comment.comment_id)]
            })
            deleteCommentById(comment.comment_id)
            .then(() => {
                setMessage("Comment deleted")
            })
            .catch((err) => {
                setComments((currComments) => {
                    setErr('Something went wrong, please try again.')
                    return [comment,...currComments]
                })

            })
            setMessage(null)
            setErr(null)
        }
    }
}

    
    if(isLoading) {
        return <h2> Loading ... </h2>
      }
    return (
        <div>   
            <NewComment comments = {comments} setComments = {setComments}/>

            {message ? <p>{message}</p> : null} 
            {err ? <p>{err}</p> : null} 
            
<ul >
 
    {comments.map((comment) => {
        return ( 
            <div  key ={comment.comment_id}>
            <CommentCard comment = {comment}/> 
            <button className = "delete-button" onClick = {handleDelete(comment)} > Delete  </button>
            </div>
        )
    })}
</ul>

        </div>
    )
}
export default CommentList;