

function ArticleContentCard({article}) {
    const dateOnlyRegex = /(\d+)[-](\d+)[-](\d{2})/g;

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
            <p> Votes: {article.votes}</p>
            <p> Total comments: {article.comment_count}</p>
        </section>
 
        </div>
    )
}

export default ArticleContentCard;