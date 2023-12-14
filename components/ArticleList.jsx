import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../src/api";

function ArticleList({topicInUrl}) {
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState (topicInUrl)
    const [isLoading, setIsLoading] = useState(true);
    const [err,SetErr] =useState(false);
  
  useEffect(() => {
      getAllArticles(topic)
      .then((data) => {
          setArticles(data);
          setIsLoading(false);
          window.history.replaceState(null, null, `/articles?topics=${topic}`)
      })
      .catch((err) => {
        SetErr("Something Wrong! Please try again later!");
      })
    }, [topic]);

    
  
    const updateTopic = (event) => {
      setTopic (event.target.value);
    };



    if(isLoading) {
      return <h2> Loading ... </h2>
    }

    return (
      <div>
       <section>  {err ? <p>{err}</p> : null}</section>
        <label htmlFor="topic-selector">Choose a topic:</label>
        <p></p>
        <select onChange={updateTopic} className="topic-options" id ="topic-selector">
        <option value="" hidden>
          Change Topics
          </option>
        <option value="">
          All Topics
        </option>
        <option value="cooking">Cooking </option>
        <option value="coding">Coding </option>
        <option value="football">Football </option>
      </select>

        <ul>
          {articles.map((article) => {
            return (
              <Link to = {`/articles/${article.article_id}` }  key={article.article_id}>
            <ArticleCard article={article} />
            </Link>)
            ;
          })}
        </ul>
      </div>
    );
  }
  
  export default ArticleList;