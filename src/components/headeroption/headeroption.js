import { Avatar } from '@material-ui/core';
import React from 'react';
import './headeroption.css';

const HeaderOption=({active ,avatar,Icon, title})=>{
    return(
        <div className={"header-option"+(active? " header-option-active":"")}>
            {Icon && <Icon className="header-icon"/>}
            {avatar && <Avatar className="header-icon" src={avatar}/>}
            <h4>{title}</h4>
        </div>
    )
}

export default HeaderOption;