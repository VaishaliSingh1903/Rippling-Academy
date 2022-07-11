import React,{useState} from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import "../App.css";
import "./Nav.css"


function Nav() {

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className="header__left">
        <Link to='/'>
          <img 
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            alt=''
          />
        </Link>
      </div>
      
      <div className="header__center">
        <input type='text' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/>
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__searchbutton'/>
        </Link>
      </div>

      <div className="header__right">
        <AppsOutlinedIcon className='header__icon'/>
        <NotificationsNoneOutlinedIcon className='header__icon'/>
        <VideoCallOutlinedIcon className='header__icon'/>
      </div>
          
    </div>
  );
}

export default withRouter(Nav);
