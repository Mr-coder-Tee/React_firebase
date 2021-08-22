import React from "react";
import img from "../../../images/banner.jpg";
import art from "../../../images/article.jpeg";
import { Link } from "react-router-dom";

const NewsFeedCard = ({ article,getArticle }) => {
  return (
    <Link to={"/newsfeed/" + article.abstract} className="NewsFeedCard" onClick={()=>getArticle(article)}>
      <div>
        <div className="imgbx">
          <img src={art} alt="img" />
        </div>
        <div className="info">
          <h3>{article.byline.original}</h3>
          <p>{article.abstract}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsFeedCard;
