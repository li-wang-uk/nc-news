import { useEffect, useState } from "react";
import ArticleContentCard from "./ArticleContentCard";
import { useParams } from 'react-router-dom';
import { getArticleById } from "../src/api";

function ArticleContent() {
    const [articleContent, setArticleContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();

    useEffect(() => {
        getArticleById(article_id)
        .then((data) => {
            setArticleContent(data);
            setIsLoading(false);
        })
    },[])


    if(isLoading) {
        return <h2> Loading ... </h2>
      }

      return (
        <div className = "article-content">
        <ul>
            {articleContent.map((article) => {
            return (
            <ArticleContentCard article={article} key={article.article_id} />)
            ;
          })}
    
        </ul>
        </div>
      )

}

export default ArticleContent;