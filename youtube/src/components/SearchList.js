import React , {useEffect, useState} from "react";
import "../App.css";
import {Link,useParams} from "react-router-dom";

import './searchlist.css';
import TuneIcon from '@mui/icons-material/Tune';


const API = "AIzaSyDbKtrGjvZhOaTg5e7LNKECj5qs55bPWJI";
const max_res = 10;

const SearchList = (props) => {

  let {query} = useParams();

    useEffect(() => {
        fetchVideo();
        // console.log(id)
      },[query]) ;
    
    const [items, setItems] = useState([]);

    const fetchVideo = async() => {
    try {
        const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max_res}&q=${query}&key=${API}`
        );
        const items = await data.json();
        console.log(items.items);
        setItems(items.items)
        } catch (error) {
            console.error(error);
        }
    }

  return (

    <div className="searchpage">
        <div className="searchpage__filter">
            <TuneIcon />
            <h2>Filter</h2>
        </div>
       
     {
        items.map(item => {
        return (
          <Link key={item.id.videoId} to={`/video/${item.id.videoId}`}>
            <div className='videorow'>
              <img src={item.snippet.thumbnails.default.url} alt="" />
              <div className="videorow__text">
                  <h3>{item.snippet.title}</h3>
                  <p className='videorow__headline'>
                    {item.snippet.channelTitle}  • {item.snippet.publishTime}
                  </p>
                  <p className='videorow__description'>
                    {item.snippet.description}
                  </p>
              </div>
            </div>
          </Link>
          )
        }) 
      }  
      
    </div> 
  );
}

export default SearchList;
