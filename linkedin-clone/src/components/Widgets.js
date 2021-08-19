import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (header, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{header}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    
    return (
        <div className = 'widgets'>
            <div className= "widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('This is a test', 'Top news - 999 readers')}
        </div>
    );
}

export default Widgets;
