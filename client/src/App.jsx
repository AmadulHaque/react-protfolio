import React from 'react'
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPages from "./pages/PortfolioPages.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import DashboardPage from "./Admin/pages/DashboardPage.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/dashboard" element={<DashboardPage/>}/>
            <Route exact path="/about" element={<AboutPage/>}/>
            <Route exact path="/portfolio" element={<PortfolioPages/>}/>
            <Route exact path="/contact" element={<ContactPage/>}/>
            <Route exact path="/blog" element={<BlogPage/>}/>
            <Route exact path="/blog-post/:id" element={<BlogDetailPage/>}/>

        </Routes>
    </>
  )
}

export default App
