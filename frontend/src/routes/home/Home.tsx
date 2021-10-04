import React from 'react';
import "./home.scss";

import { Featured, Navbar } from '../../components';
const Home:React.FC = () => {
    return (
        <div className="home">
            <Navbar/>
            <Featured />
        </div>
    )
}

export default Home;
