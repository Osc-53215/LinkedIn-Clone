import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className = 'sidebar__top'>
                <img src = '' alt = ''/>
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
