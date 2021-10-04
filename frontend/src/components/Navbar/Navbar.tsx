import React, { useState } from 'react';
import './navbar.scss';

import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import netflixLogo from '../../assets/images/netflix.png';

const avatar = "https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const Navbar:React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }
    
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={netflixLogo} alt=""/>
                    <span> Home </span>
                    <span> Series </span>
                    <span> Movies </span>
                    <span> New and Popular </span>
                    <span> My list </span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span> KID </span>
                    <Notifications className="icon"/>
                    <img src={avatar} alt=" " />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span> Settings </span>
                            <span> Logout </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
