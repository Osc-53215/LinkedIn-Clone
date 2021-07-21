import React from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreatIcon from '@material-ui/icons/Create';

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
                        <InputOption />
                </div>
            </div>
        </div>
    )
}

export default Feed
