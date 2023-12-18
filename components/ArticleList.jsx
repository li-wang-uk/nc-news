import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../src/api";

function ArticleList({topicInUrl}) {
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState (topicInUrl)
    const [isLoading, setIsLoading] = useState(true);
    const [err,setErr] =useState(false);
    const [apiErr,setApiErr] = useState(false);
    const [sort_by,setSortBy] = useState("")
    const [order,setOrder] = useState("")
  
  useEffect(() => {
      getAllArticles(sort_by,order,topic)
      .then((data) => {
          setArticles(data);
          setIsLoading(false);

      })
      .catch((err) => {
        setErr("Something Wrong! Please try again later!");
        setIsLoading(false);
      })
      setErr(false);
    }, [sort_by,order,topic]);

 
    const updateTopic = (event) => {
      setTopic (event.target.value);
      window.history.replaceState(null, null, `/articles?topics=${event.target.value}&sort_by=${sort_by}&order=${order}`)
    };
    const updateSortBy = (event) => {
      setSortBy (event.target.value);
      window.history.replaceState(null, null, `/articles?topics=${topic}&sort_by=${event.target.value}&order=${order}`)
  }
  const updateOrder = (event) => {
    setOrder (event.target.value);
    window.history.replaceState(null, null, `/articles?topics=${topic}&sort_by=${sort_by}&order=${event.target.value}`)
}
  


    if(isLoading) {
      return <h2> Loading ... </h2>
    }else if(err){
      return <p>{err}</p>
    } else 
return (
      <div>
       <section>  {err ? <p>{err}</p> : null}</section>
        <label htmlFor="topic-selector">Choose a topic:</label>
        <p></p>

        <select onChange={updateTopic} className="options" id ="selector">
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

<select onChange={updateSortBy} className="options" id ="selector"> 
<option value="" hidden>
  Change Sort By
  </option>

<option value="author">author </option>
<option value="title">title </option>
<option value="article_id">article_id </option>
<option value="topic">topic </option>
<option value="created_at">created_at </option>
<option value="votes">votes </option>


</select>



<select onChange={updateOrder} className="options" id ="selector">
<option value="" hidden>
  Change Orders
  </option>

<option value="desc">descending </option>
<option value="asc">ascending</option>

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