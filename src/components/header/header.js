import {  Search as SearchIcon, } from '@material-ui/icons';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import React, { useState } from 'react';
import HeaderOption from '../headeroption/headeroption';
import './header.css';
import {useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { auth } from '../../firebase/firebase';

const Header = ()=>{

    const [userDropdown, setUserDropdown] = useState(false);

    const user = useSelector(selectUser);

    const handleSignout=()=>{
        auth.signOut();
    }

    const Dropdown = ()=>{
        return(
            <div className="dropdown-container">
                <div className="dropdown-menu">
                    <div className="menu-user">
                        Some Info about user
                    </div>
                    <div onClick={handleSignout} className="menu-signout">
                        Sign out
                    </div>
                </div>
            </div>
        )
    }

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
                <span onClick={()=>setUserDropdown(!userDropdown)}><HeaderOption TextIcon={ArrowDropDownIcon} avatar={user.photoUrl? user.photoUrl: "none"} title="Me"/>
                </span>
                
                {userDropdown && <Dropdown/>}

                <HeaderOption />
                <hr className="option-divider"/>
                <HeaderOption />
                
                <HeaderOption Icon={AppsRoundedIcon} title="Work"/>
            </div>
        </div>
    )
}

export default Header;