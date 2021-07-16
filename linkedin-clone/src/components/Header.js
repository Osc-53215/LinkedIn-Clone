import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {

    return (
        
        <div className = 'header'>
            <div className = 'header__left'>
                <img 
                src = 'https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' 
                alt = ''/>

                <div className = 'header__search'>
                    <SearchIcon />
                    <input type = 'text'/>
                </div>

                
            </div>

            <div className = 'header__right'>
                <HeaderOption Icon = {HomeIcon} title = 'Home' />
                <HeaderOption Icon = {SupervisorAccountIcon} title = 'Home' />

            </div>
            
        </div>
    )
}

export default Header
