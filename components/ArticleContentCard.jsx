
import { useEffect, useState } from "react";
import { getArticleById, patchArticleVote } from "../src/api";
import { useParams } from "react-router-dom";


function ArticleContentCard({article}) {
    const dateOnlyRegex = /(\d+)[-](\d+)[-](\d{2})/g;
    const {article_id} = useParams();
    const [voteCount, setVoteCount] = useState(0)
    const [err,setErr] =useState(null);
    const [message,setMessage] = useState(null)
    
    useEffect(() => {
        getArticleById(article_id)
        .then(data => {
            setVoteCount(data[0].votes)
        })
    },[])

 
    const upVote = (id) => {
        setVoteCount((currentVote) => currentVote+1)
        patchArticleVote(id,1)
        .catch((err) => {
            setErr('Something went wrong, please try again.')
            setVoteCount((currentVote) => currentVote-1)
            patchArticleVote(id,-1)
        })
        setMessage("Vote sent")

    }

    const downVote = (id) => {
        setVoteCount((currentVote) => currentVote-1)
        patchArticleVote(id,-1)
        .catch((err) => {
            setErr('Something went wrong, please try again.')
            setVoteCount((currentVote) => currentVote+1)
            patchArticleVote(id,1)
        })
        setMessage("Vote sent")
    }

    return (
        <div> 
        <h2> {article.title}</h2>
        <h3> Author: {article.author}</h3>
        <h4> Created at: {article.created_at.match(dateOnlyRegex)}</h4>
        <img className = "article-img" src = {article.article_img_url} alt= {`Illustration for the article: ${article.title} `}/>
        <section>
            <p> {article.body}</p>
        </section>
        <section>
            <p> Votes: {voteCount} {err ? <p>{err}</p> : null} </p>
            <p>{message ? <p>{message}</p> : null}</p>
            <button onClick = {() => upVote( article.article_id)}>  
            <span> 👍 </span>
            </button>
            <button onClick = {() => downVote( article.article_id)}> 
            <span> 👎 </span>
            </button>
            <p> Total comments: {article.comment_count}</p>
            
        </section>
 
        </div>
    )
}

export default ArticleContentCard;