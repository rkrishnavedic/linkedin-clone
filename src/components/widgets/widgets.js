import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import React from 'react';
import './widgets.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Widgets = ()=>{


    const newsArticle = (heading, subtitle) =>{
        return(
            <div className="widgets-article">

                <div className="widgets-article-left">
                    <FiberManualRecordRoundedIcon style={{color:'gray',width:'10px', marginRight:'10px'}}/>
                </div>

                <div className="widgets-article-right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
                 
            </div>
        )
    }


    return(
        <div className="widgets">
            <div className="widgets-header">
                <h3>SyncedIn News</h3>
            </div>
            
            {newsArticle("4.03 lakh new cases, 4092 deaths","Top news • 26,851 readers ")}
            {newsArticle("Cryptic signals on crypto trade","1d ago • 888 readers ")}
            {newsArticle("How to spot a bad manager","1d ago • 104,444 readers ")}
            {newsArticle("Cognizant tries to hire, train, retain","4d ago • 13,612 readers ")}
            {newsArticle("Kindly, write better emails","1d ago • 2,116 readers")}

            <div className="widgets-show-more">
                
                    <h4>Show More </h4> <ArrowDropDownIcon/>
               
            </div>
        </div>
    )
}

export default Widgets;