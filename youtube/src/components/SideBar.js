import React from 'react';
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HistoryIcon from '@mui/icons-material/History';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarrow'>
                <HomeIcon className='sidebarrow__icon' />
                <h2 className='sidebarrow__title'>Home</h2>
            </div>
            <div className='sidebarrow'>
                <WhatshotIcon className='sidebarrow__icon' />
                <h2 className='sidebarrow__title'>Trending</h2>
            </div>
            <div className='sidebarrow'>
                <HistoryIcon className='sidebarrow__icon' />
                <h2 className='sidebarrow__title'>History</h2>
            </div>
            <div className='sidebarrow'>
                <VideoLibraryOutlinedIcon className='sidebarrow__icon' />
                <h2 className='sidebarrow__title'>Library</h2>
            </div>
            <div className='sidebarrow'>
                <SubscriptionsOutlinedIcon className='sidebarrow__icon' />
                <h2 className='sidebarrow__title'>Subscription</h2>
            </div>
            
        </div>
    )
}

export default SideBar;