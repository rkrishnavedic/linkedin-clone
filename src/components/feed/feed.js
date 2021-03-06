import React, {useState, useEffect} from 'react';
import './feed.css';
import { Avatar } from '@material-ui/core';
import InputOption from '../inputoption/inputoption';
import PanoramaRoundedIcon from '@material-ui/icons/PanoramaRounded';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import VerticalSplitRoundedIcon from '@material-ui/icons/VerticalSplitRounded';
import Post from '../post/post';
import {db, timestamp} from '../../firebase/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Feed = ()=>{
    const [posts, setPosts] = useState([]);
    const [postInputText, setPostInputText] = useState(''); 

    const user = useSelector(selectUser);

    useEffect(()=>{
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map((doc)=>{
                return {
                id: doc.id,
                data: doc.data()
            }
        }))
        })
        console.log('useEffect calls');
    },[]);

    const addPost = (e)=>{

        e.preventDefault();

        if(postInputText){
        db.collection('posts').add({
            username: user.displayName,
            desc: user.desc,
            message: postInputText,
            photoUrl: user.photoUrl,
            timestamp: timestamp,
        })

        setPostInputText('');
        }
    }

    return(
        <div className="feed">

            <div className="feed-input-container">
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Avatar src ={user.photoUrl} style={{marginRight: '10px', width:'48px', height:'48px'}}/>
                    <div className="feed-input">
                        <form onSubmit={addPost}>
                            <input value={postInputText} onChange={(e)=>setPostInputText(e.target.value)} type="text" placeholder="Start a post"/>
                            <button onSubmit={addPost}>Send</button>
                        </form>
                    </div>
                </div>

                <div className="feed-input-options">
                    <InputOption color="#70B5F9" Icon={PanoramaRoundedIcon} title='Photo'/>
                    <InputOption color="#7FC15E" Icon={SubscriptionsIcon} title='Video'/>
                    <InputOption color="#E7A33E" Icon={EventRoundedIcon} title='Event'/>
                    <InputOption color="#ff8080" Icon={VerticalSplitRoundedIcon} title='Write article'/>
                </div>

            </div>

            <hr style={{width:'103.5%',border:'0.1px solid lightgray',marginTop:'15px', marginBottom:'5px'}}/>

            {
                posts.map(({id, data})=>{
                    return(
                        <Post data={data} key={id}/>
                    )
                })
            }
        </div>
    )
}

export default Feed;