
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { getAllTopics } from "../src/api";
import TopicCard from "./TopicCard";

function TopicsList() {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllTopics(topics)
        .then ((data) => {
            setTopics(data);
            setIsLoading(false)
        })
    }, [])




    if(isLoading) {
        return <h2> Loading ... </h2>
      }

return (
<ul>
    {topics.map((topic) => {
        return (
           
     <div key ={topic.slug}>

            <Link to = {`/articles?topics=${topic.slug}`} >
            <TopicCard topic = {topic}/>
            </Link>

            </div>
        )
    })}
    </ul>
)
}

export default TopicsList;