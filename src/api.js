import axios from "axios" 
const NcNewsApi = axios.create({baseURL:"https://liwang-ncnews.onrender.com/api/"})

export const getAllArticles = (topic) => {
    return NcNewsApi.get("/articles",{
        params:{
            topic:topic
        },
    })
    .then (({data}) => {
        return data.articles;
    })
}

export const getArticleById = (article_id) => {
    return NcNewsApi.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data.articles;
    })
}

export const getAllCommentsById = (article_id) => {
    return NcNewsApi.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments;
    })
}