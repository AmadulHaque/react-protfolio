import React from 'react';
import Header from "../layouts/Header.jsx";
import Home from "../components/Home/Home.jsx";
const HomePage = () => {
    return (
        <div className='root-bg home'>
            <Header/>
            <Home/>
        </div>
    );
};

export default HomePage;