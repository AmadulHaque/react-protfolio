import React from 'react';
import Header from "../layouts/Header.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";

const PortfolioPages = () => {
    return (
        <div className="root-bg portfolio">
            <Header/>
            <Portfolio/>
        </div>
    );
};

export default PortfolioPages;