const axios = require('axios');
const url ="https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

axios.get(url)
.then(  (result) => {
    if (result.status != 200){
        throw new Error('Invalid status code');
    }

    if(result.data.articleList){
        return result.data.articleList;
    }

})
.then( (articles) => {
    console.log(articles);
    return articles.map( (article,idx) => {
        return { title : article.title, rank:idx+1 }; ;
    });
})
.then( (result) => {
    console.log(result);
})
.catch( (error) => {
    console.error(error);
});

