import React from 'react';
import './Feed.css';
import CreatIcon from '@material-ui/icons/Create';

function Feed() {
    return (
        <div className = 'feed'>
            <div className="feed__inputContainer">
                <CreatIcon />
                <form>
                    <input type="text" />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Feed
