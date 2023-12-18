import axios, { AxiosError } from "axios" 
const NcNewsApi = axios.create({baseURL:"https://liwang-ncnews.onrender.com/api/"})


export const getAllArticles = (sort_by, order, topic) => {
    return NcNewsApi.get("/articles",{
        params:{
            sort_by:sort_by,
            order:order,
            topic:topic
        },
    })
    .then (({data}) => {
        return data.articles;
    })
    .catch(err => {
        console.log(err)
        return Promise.reject ({message: "Resource Not Found"});
    })


}

export const getArticleById = (article_id) => {
    return NcNewsApi.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data.articles;
    })
    .catch(err => {
        console.log(err)
        return Promise.reject ({message: "Article Not Found"});
    })
}


export const getAllCommentsById = (article_id) => {
    return NcNewsApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments;
    })
    .catch(err => {
        console.log(err)
        return Promise.reject();
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
    .catch(err => {
        console.log(err)
        return Promise.reject({message: "Something wrong. Please make sure the comment was posted by a valid user. The page will refresh in 5 seconds"});
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