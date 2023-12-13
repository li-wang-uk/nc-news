import { useState } from "react";
import { useParams } from "react-router-dom";
import { postNewComment } from "../src/api";

function NewComment({setComments}) {
    const [input, setInput] = useState("")
    const [err,setErr] = useState(null)
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const {article_id} = useParams();
    const handleSubmit = (event) => {
        event.preventDefault()
        postNewComment(article_id,"tickle122",input)
        .then((newCommentsFromApi) => {
            setInput("")
            setComments((currComments) => {
                return[newCommentsFromApi,...currComments]
            })
        })
        .catch((err) => {
            setErr('Something went wrong, please try again.')
        })
        setInput("")
    }



    return (
  
        <form className="new-comment">
            <label> New comment:   
                <input className="new-comment" type="text" placeholder = "Please input your comment here" onChange ={handleChange} value ={input}/> 
            </label>
            <div>
            {err ? <p>{err}</p> : null}
            </div>
            <button className = "send-comment-button" onClick = {handleSubmit} > Submit &rarr;  </button>
            <p>
               
                </p>
        </form>
    )
   

}

export default NewComment;

