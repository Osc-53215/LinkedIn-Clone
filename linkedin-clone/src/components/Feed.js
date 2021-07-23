import React from 'react';
import './Feed.css';
import Posts from './Posts';
import InputOption from './InputOption';
import CreatIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { useState } from 'react';


function Feed() {
    const [posts, setPosts] = useState([])

    return (
        <div className = 'feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreatIcon />
                    <form>
                        <input type="text" />
                        <button type = 'submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                        <InputOption Icon = {ImageIcon} title = 'Photo' color = '#70B5F9'/>
                        <InputOption Icon = {SubscriptionsIcon} title = 'Video' color = '#E7A33E'/>
                        <InputOption Icon = {EventNoteIcon} title = 'Event' color = '#C0CBCD'/>
                        <InputOption Icon = {CalendarViewDayIcon} title = 'Write article' color = '#7FC15E'/>
                </div>
            </div>


            {posts.map((posts) => (
                <Posts />
            ))}

            <Posts
            name = 'Oscar Colon'
            description = 'This is a test'
            message = 'this is a message'
            photoUrl = ''
            />
        </div>
    )
}

export default Feed
