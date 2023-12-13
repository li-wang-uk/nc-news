import { useState, useEffect} from "react";
import { getAllCommentsById } from "../src/api";
import CommentCard from "./CommentCard";
import { useParams } from 'react-router-dom';
import NewComment from "./NewComment";
function CommentList() {
    const[comments,setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    useEffect(() => {
        getAllCommentsById(article_id)
        .then((data) => {
         
                setComments(data);
                setIsLoading(false);
        
        })
    },[])
    if(isLoading) {
        return <h2> Loading ... </h2>
      }
    return (
        <div>   
            <NewComment setComments = {setComments}/>
<ul>
    {comments.map((comment) => {
        return (
            <CommentCard comment = {comment} key = {comment.comment_id}/> 
        )
    })}
</ul>
        </div>
    )
}
export default CommentList;