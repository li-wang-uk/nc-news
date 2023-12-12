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