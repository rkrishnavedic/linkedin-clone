import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from '../inputoption/inputoption';
import './post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ReactTimeAgo from 'react-time-ago';
import globeSvg from './globe.svg';


const Post = ({data: {username, desc, message, photoUrl, timestamp}})=>{
    
    return(
        <div className="post">
            <div className="post-header">
                    <Avatar style={{width: '48px', height:'48px'}} src={photoUrl}/>
                <div className="post-info">
                    <h3>{username}</h3>
                    <p>{desc}</p>
                    <p><ReactTimeAgo date={new Date(timestamp.seconds*1000)} timeStyle="twitter-first-minute"/> • <img alt='' src={globeSvg}/> </p>
                </div>
            </div>

            <div className="post-body">
                <p>{message}</p>
            </div>

            <div className="post-options">
                <InputOption color="gray" Icon={ThumbUpAltOutlinedIcon} title="Like"/>
                <InputOption color="gray" Icon={CommentOutlinedIcon} title="Comment"/>
                <InputOption color="gray" Icon={ShareOutlinedIcon} title="Share"/>
                <InputOption color="gray" Icon={SendRoundedIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Post;