import React,{useEffect,useState} from 'react';
import NewsFeedBanner from '../Banner/NewsfeedBanner';
import NewsFeedCard from './NewsFeedCard/NewsFeedCard';



const NewsFeed = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
         await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey="+process.env.REACT_APP_NEWSFEED_APIKEY)
        .then((res)=>{return await res.json()})
        .then((_data)=>{setData(_data.articles)})
        .catch((err)=>{console.log("error->",err)})
        .finally(()=>{console.log("finish")})
    })



    return ( <div className="newsfeed">
        <NewsFeedBanner/>
        <div className="newsCardHolder">
            {
                data.map((article)=>(
                    <NewsFeedCard article={article}/>
                ))
            }
        
        
        </div>
    </div> );
}
 
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=process.env.REACT_APP_NEWSFEED_APIKEY
//https://newsapi.org/v2/everything?domains=wsj.com&apiKey=process.env.REACT_APP_NEWSFEED_APIKEY
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=

export default NewsFeed;