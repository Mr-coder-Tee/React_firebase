import React,{useEffect,useState} from 'react';
import NewsFeedBanner from '../Banner/NewsfeedBanner';
import NewsFeedCard from './NewsFeedCard/NewsFeedCard';
import { Link } from 'react-router-dom';



const NewsFeed = () => {
    const[data,setData]=useState([]);

    const fetchNews=async()=>{
        await fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key="+process.env.REACT_APP_NEWSFEED_APIKEY)
        .then((res)=>{return  res.json()})
        .then((_data)=>{setData(_data.response.docs)})
        .catch((err)=>{console.log("error->",err)})
        .finally(()=>{console.log("finish")})
    }

    
 
     useEffect(()=>{
        fetchNews();
    },[])

 console.log(data);

    return ( <div className="newsfeed">
        <NewsFeedBanner/>
        <div className="newsCardHolder">
            {
                data.map((article)=>(
                    <Link key={article.id}>
                        <NewsFeedCard article={article}/>
                    </Link>
                ))
            }
        
        </div>
    </div> );
}
 
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=process.env.REACT_APP_NEWSFEED_APIKEY
//https://newsapi.org/v2/everything?domains=wsj.com&apiKey=process.env.REACT_APP_NEWSFEED_APIKEY
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=

export default NewsFeed;