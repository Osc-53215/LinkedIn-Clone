import React from 'react';
import './Posts.css';
import {Avatar} from '@material-ui/core'

function Posts({ name, description, message, photoUrl }) {
    return (
        <div className = 'posts'>
            <div className="post__header">
                <Avatar />

                <div className="post__info">
                    <h2>Oscar colon</h2>
                    <p>description</p>
                </div>
            </div>

            <div className="post__body">
                <p>Message goes here</p>
            </div>
        </div>
    )
}

export default Posts
