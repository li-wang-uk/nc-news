import { useEffect, useState } from "react";
import ArticleContentCard from "./ArticleContentCard";
import { useParams } from 'react-router-dom';
import { getArticleById } from "../src/api";
import Error from "./error";

function ArticleContent() {
    const [articleContent, setArticleContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    const [apiError,setApiError] = useState(null)

    useEffect(() => {
        getArticleById(article_id)
        .then((data) => {
            setArticleContent(data);
        })
        .catch((err) => {
          console.log(err)
          setApiError(err)
          setArticleContent({})
        })
        .finally(() => {
          setIsLoading(false);
        })
    },[])


    if(isLoading){
      return <h2> Loading ... </h2>
    } else if (apiError) {
      return <Error message={apiError.message} />
      } else{
      return (
        <div className = "article-content">
        <ul>
            {articleContent.map((article) => {
            return (
            <ArticleContentCard article={article} key={article.article_id} />
            );
          })}
    
        </ul>
        </div>
      )
    }
}

export default ArticleContent;