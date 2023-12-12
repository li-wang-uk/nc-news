

function ArticleCard({article}){
    return (
    <li className = "article-card"> 
      <p>{article.title}</p>
      <img className = "article-img" src = {article.article_img_url} alt= {`Illustration for the article: ${article.title} `}/>
    </li>
    )
}

export default ArticleCard