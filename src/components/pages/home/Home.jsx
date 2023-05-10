import React from 'react';
import Header from '../../header/Header';
import "../../../index.css";
import Features from '../../features/Features';
import Faq from '../../faq/Faq';
import Footer from '../../footer/Footer';

const Home = () => {
    return (
        <div>
            <header className="header-bg">
            <Header/>
            </header>
            <Features/>
            <Faq/>
            <Footer/>

        </div>
    );
}

export default Home;
