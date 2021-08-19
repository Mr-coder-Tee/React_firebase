import React from 'react';
import NewsFeedBanner from '../Banner/NewsfeedBanner';
const NewsFeed = () => {
    return ( <div>
        <NewsFeedBanner/>
        NewsFeed--------
    </div> );
}
 
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=process.env.REACT_APP_NEWSFEED_APIKEY


export default NewsFeed;