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

export const patchArticleVote = (article_id, vote) => {
    const updatedVote =  {inc_votes:vote};
    return NcNewsApi.patch(`/articles/${article_id}/`, updatedVote)
    .then (({data}) => {
        return data.articles.votes;
    })
}

export const postNewComment = (article_id,newComment) => {

    return NcNewsApi.post(`/articles/${article_id}/comments`, newComment)
    .then(({data}) => {
        return data.comment
    })
}

export const getAllTopics = () => {
    return NcNewsApi.get("/topics")
    .then(({data}) => {
        return data.topics;
    })
}

export const deleteCommentById = (comment_id) => {
    return NcNewsApi.delete(`/comments/${comment_id}`)
}