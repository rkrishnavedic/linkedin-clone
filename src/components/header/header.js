import {  Search as SearchIcon, } from '@material-ui/icons';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import React from 'react';
import HeaderOption from '../headeroption/headeroption';
import './header.css';
import {useDispatch} from 'react-redux';
import {logout} from '../../features/userSlice';

const Header = ()=>{

    const dispatch = useDispatch();

    return(
        <div className="header-container">
            <div className="header-left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt='logo'/>
                <div className="search-bar">
                    <SearchIcon/>
                    <input placeholder="search"/>
                </div>
            </div>
            <div className="header-right">
                <HeaderOption active={true} Icon={HomeRoundedIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountRoundedIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs"/>    
                <HeaderOption Icon={SmsRoundedIcon} title="Messaging"/>    
                <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications"/> 
                <span onClick={()=>dispatch(logout())}><HeaderOption avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Me"/>
                </span>

                <HeaderOption />
                <hr className="option-divider"/>
                <HeaderOption />
                
                <HeaderOption Icon={AppsRoundedIcon} title="Work"/>
            </div>
        </div>
    )
}

export default Header;