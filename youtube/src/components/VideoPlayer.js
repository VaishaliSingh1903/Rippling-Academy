import React, {useEffect, useState} from "react";
import "../App.css";
import {BrowserRouter as Router,Link,useParams} from "react-router-dom";
import Trending from "./Trending";
import YouTube from 'react-youtube';
import './videoplayer.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Button} from 'react-bootstrap';

const API = "AIzaSyDbKtrGjvZhOaTg5e7LNKECj5qs55bPWJI";


function VideoPlayer() {

    const {id} = useParams();

    useEffect(() => {
        fetchVideo();
        // console.log(id)
      },[id]) ;
    
    const [item, setItem] = useState({
        snippet: {}, 
        statistics: {}
    });

    const fetchVideo = async() => {
    try {
        const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API}`
        );
        const item = await data.json();
        // console.log(item.items[0]);
        setItem(item.items[0]);
        } catch (error) {
            console.error(error);
        }
    }
    
    
    return (
    <div className='videoplayer'>
        <div className='videoplayer__videodetails'>
            <div className='videoplayer__video'>
                <div>
                    <YouTube
                        videoId={item.id}
                    />
                </div>
            </div>
            <div className='videoplayer__videoinfo'>

                <div className='videoinfo'>
                        <div className='videoinfo__headline'>
                            <h1>{item.snippet.title}</h1>
                        </div>
                        <div className='videoinfo__stats'>
                            <p>{item.statistics.viewCount} views • {item.snippet.publishedAt}</p>
                            <div className="videoinfo__likes">
                                <ThumbUpOffAltIcon  title={item.likeCount} />
                                <ThumbDownOffAltIcon title={item.dislikeCount} />
                                <ReplyIcon title='SHARE' />
                                <AddToPhotosIcon title='SAVE' />
                                
                            </div>
                        </div>
                        <hr />
                        <div className="videoinfo__channel">
                            <div className='videoinfo__channelinfo'>
                                <h3 className='videoinfo__channeltitle'>{item.snippet.channelTitle}</h3>
                            </div>
                            <div className='videoinfo__subscribe'>
                                <Button color='secondary' >SUBSCRIBE</Button>
                            </div>
                        </div>    
                </div>
            </div>
        </div> 
        <div className='videoplayer__suggested'>
            <Trending />
        </div>
    </div> 
  );
}




export default VideoPlayer;
