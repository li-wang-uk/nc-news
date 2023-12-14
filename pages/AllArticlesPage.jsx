import ArticleList from "../components/ArticleList";
import { useSearchParams } from 'react-router-dom'
export default function AllArticlesPage() {
  const [searchParams] = useSearchParams();
  const topicInUrl = searchParams.get("topics");
    return (
        <main>
          <ArticleList topicInUrl = {topicInUrl}/>
        
        </main>
    )
}