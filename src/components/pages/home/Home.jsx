import React from 'react';
import Header from '../../header/Header';
import "../../../index.css";
import Features from '../../features/Features';

const Home = () => {
    return (
        <div>
            <header className="header-bg">
            <Header/>
            </header>
            <Features/>
        </div>
    );
}

export default Home;
