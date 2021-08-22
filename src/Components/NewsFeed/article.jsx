import React from 'react'
import NewsFeedBanner from '../Banner/NewsfeedBanner';




const Article = ({article}) => {
    console.log("article=====",article)
    return ( <div className="newsArticle">
        <NewsFeedBanner/>
        article
    </div> );
}
 
export default Article;