import React from 'react'
import img from '../../../images/banner.jpg'


const NewsFeedCard = ({article}) => {
    return ( 
        <div className="NewsFeedCard">
            <div className="imgbx">
                <img src={article.urlToImage} alt="" />
            </div>
            <div className="info">
                <h3>{article.author}</h3>
                <p>{article.title}</p>
            </div>
        </div>
     );
}
 
export default NewsFeedCard;