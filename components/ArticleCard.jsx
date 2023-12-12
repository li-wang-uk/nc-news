
import '../src/App.css'
function ArticleCard({article}){
    return (
    <li className = "article-card"> 
      <p>{article.title}</p>
      <p> Author: {article.author}</p>
      <p> Topic: {article.topic}</p>
      <img className = "article-img" src = {article.article_img_url} alt= {`Illustration for the article: ${article.title} `}/>
    </li>
    )
}

export default ArticleCard