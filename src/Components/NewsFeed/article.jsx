import React from 'react'
import NewsFeedBanner from '../Banner/NewsfeedBanner';




const Article = ({article}) => {
    console.log("article=====",article)
    return ( <div className="newsArticle">
        <NewsFeedBanner/>
        <div className="articleStructure">
            <div className="headline">
                <h1>{article.headline.main}</h1>
                <h5>{"by "+article.byline.original}{" on "}{article.pub_date}</h5>
            </div>
            <div className="intro">
                <h4>{article.abstract}</h4>
                <p>{article.lead_paragraph}</p>
                <p>{article.snippet}</p>
                <p>{article.print_section}</p>
                <p>{article.web_url}</p>
            </div>
        </div>
    </div> );
}
 
export default Article;