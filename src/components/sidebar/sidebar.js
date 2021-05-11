import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const RecentTopic=(topic)=>{
    return (
        <div className="sidebar-recent-topic">
            <span className="topic-hash">#</span>
            <p>{topic}</p>
        </div>
    )
}

const Sidebar=()=>{

    const user = useSelector(selectUser);


    return(
        <div className="sidebar">

            <div className="sidebar-top">
                <img src={user.background? user.background: 'https://miro.medium.com/max/2248/1*92adf06PCF91kCYu1nPLQg.jpeg'} alt="background"/>
                <Avatar src={user.photoUrl} className="user-avatar"/>
                <h3>{user.displayName}</h3>
                <h4>{user.desc}</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar-stat-num">2,307</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views of your post</p>
                    <p className="sidebar-stat-num">1,192</p>
                </div>
            </div>

            <div className="sidebar-myitems">
                <BookmarkRoundedIcon/>
                <p>My items</p>
            </div>

            <div className="sidebar-bottom">
                <p className="recent-heading">Recent</p>
                {RecentTopic('reactjs')}
                {RecentTopic('sidejs')}
                {RecentTopic('jsxjs')}

                <div className="discover-more">
                    <p>Discover More</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;