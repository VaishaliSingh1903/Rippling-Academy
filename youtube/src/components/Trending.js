import React, {useEffect, useState} from "react";
import "./trending.css";
// import VideoDetail from "./VideoDetail";
import { Link} from "react-router-dom";

const API = "AIzaSyDbKtrGjvZhOaTg5e7LNKECj5qs55bPWJI";
const MaxList = 20;


function Trending() {

  useEffect(() => {
    fetchVideos();
  },[]) ;

  const [items, setItems] = useState([]);

  const fetchVideos = async() => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${MaxList}&regionCode=US&key=${API}`
      );
      const items = await data.json();
      // console.log(items.items);
      setItems(items.items);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="recommended_videos">
      <div className="recommend_video">
        {items.map(item =>
          <div className='videocard' key={item.id}>
            <Link to={`/video/${item.id}`}>
              <img className='videocard__image' src={item.snippet.thumbnails.default.url} alt='' />
              <div className="videocard__text">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{item.statistics.viewCount} views • {item.snippet.publishedAt}</p>
              </div> 
            </Link>
        </div>
        )};
      </div>
    </div>
  );
}




export default Trending;

