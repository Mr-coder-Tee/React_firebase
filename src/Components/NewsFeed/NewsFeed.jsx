import React,{useEffect,useState} from 'react';
import NewsFeedBanner from '../Banner/NewsfeedBanner';
import NewsFeedCard from './NewsFeedCard/NewsFeedCard';



const NewsFeed = () => {
    const[data,setData]=useState([]);

    const fetchNews=async()=>{
        await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey="+process.env.REACT_APP_NEWSFEED_APIKEY)
        .then((res)=>{return res.json()})
        .then((_data)=>{setData(_data.articles)})
        .catch((err)=>{console.log("error->",err)})
        .finally(()=>{console.log("finish")})
        console.log("bugg fixed")
    }


    

     useEffect(()=>{
        fetchNews();
    },[])



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