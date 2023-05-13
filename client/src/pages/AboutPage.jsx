import React from 'react';
import Header from "../layouts/Header.jsx";
import About from "../components/About/About.jsx";

const AboutPage = () => {
    return (
        <div className="root-bg about">
            <Header/>
            <About/>
        </div>
    );
};

export default AboutPage;