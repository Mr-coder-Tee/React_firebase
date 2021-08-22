import React from 'react'
import img from '../../../images/banner.jpg'
import art from '../../../images/article.jpeg'


const NewsFeedCard = ({article}) => {
    console.log(article)
    return ( 
        <div className="NewsFeedCard">
            <div className="imgbx">
                <img src={art} alt="img" />
            </div>
            <div className="info">
                <h3>{article.byline.original}</h3>
                <p>{article.abstract}</p>
            </div>
        </div>
     );
} 
 
export default NewsFeedCard;