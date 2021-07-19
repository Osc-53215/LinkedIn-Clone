import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className = 'sidebar__top'>
                <img 
                src = 'https://images.unsplash.com/photo-1516641051054-9df6a1aad654?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' 
                alt = ''
                />
                <Avatar className = 'sidecar__avatar'/>
                <h2>Oscar Colon</h2>
                <h2>oscarcolon732@gmail.com</h2>
            </div>

            <div className = 'sidebar__stats'>
                <div className = 'sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className = 'sidebar__statNumber'>23,000</p>
                </div>
                <div className = 'sidebar__stat'>
                    <p>Views on post</p>
                    <p className = 'sidebar__statNumber'>2000</p>
                </div>
            </div>

            <div className = 'sidebar__bottom'>
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
