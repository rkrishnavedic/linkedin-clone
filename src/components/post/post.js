import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from '../inputoption/inputoption';
import './post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendRoundedIcon from '@material-ui/icons/SendRounded';


const Post = ({name, description, message, photoUrl})=>{
    return(
        <div className="post">
            <div className="post-header">
                    <Avatar src={photoUrl}/>
                <div className="post-info">
                    <h3>{name}</h3>
                    <p>{description}</p>
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