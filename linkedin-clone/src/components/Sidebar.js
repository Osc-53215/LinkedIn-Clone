import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className = 'sidebar__recentItem'>
            <span classname = 'sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className = 'sidebar'>
            <div className = 'sidebar__top'>
                <img 
                src = 'https://images.unsplash.com/photo-1618335829737-2228915674e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' 
                alt = ''
                />
                <Avatar className = 'sidebar__avatar'/>
                <h2>Oscar Colon</h2>
                <h4>oscarcolon732@gmail.com</h4>
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
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('desgin')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
