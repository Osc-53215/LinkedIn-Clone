import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className = 'sidebar__top'>
                <img src = '' alt = ''/>
                <Avatar />
                <h2>Oscar Colon</h2>
                <h2>oscarcolon732@gmail.com</h2>
            </div>
        </div>
    )
}

export default Sidebar
