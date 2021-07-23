import React from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreatIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';

function Feed() {
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
                </div>
            </div>
        </div>
    )
}

export default Feed
