
function TopicCard({topic}){
    return (
    <li className = "topic-card"> 
      <p>{topic.slug}</p>
      <p>{topic.description}</p>
   
    </li>
    )
}

export default TopicCard