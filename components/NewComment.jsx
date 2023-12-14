import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCommentsById, postNewComment } from "../src/api";


function NewComment({comments,setComments}) {

    const [input, setInput] = useState("")
    const [err,setErr] = useState(null)
    const {article_id} = useParams();
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    
    useEffect(() => {
        getAllCommentsById(article_id)
        .then(data => {
            setComments(data)
        })
    },[])
    let temporaryId = Math.random()
    const newComment = {body: input, author: "tickle122"}
    const handleSubmit = (event) => {
        event.preventDefault()
        newComment.comment_id = temporaryId;
        newComment.votes = 0;
        setComments((currComments) => {
        return[newComment,...currComments]
    })

        postNewComment(article_id,newComment)
        .catch((err) => {
            setErr('Something went wrong, please try again.')
            
        })
        setInput("")
        setErr(false)

    }

    return (
  
        <form className="new-comment">
            <label> New comment:   
                <textarea className="input-area" type="text" placeholder = "Please input your comment here" onChange ={handleChange} value ={input}/> 
            </label>
            <p>
            </p>
            <div>
            {err ? <p>{err}</p> : null}
            </div>
            <p></p>
            <button className = "send-comment-button" onClick = {handleSubmit} > Submit &rarr;  </button>
           
        </form>
    )
   

}

export default NewComment;

