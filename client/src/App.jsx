import React from 'react'
import {Route, Routes,Navigate ,Outlet} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPages from "./pages/PortfolioPages.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";

function App() {
  return (
    <>
        <Routes>
            {/*<Route element={<ProtectedRoute/>}>*/}
            {/*    <Route path="/dashboard" element={<DashboardPage/>}/>*/}
            {/*    <Route exact path="/Profile" element={<ProfilePage/>}/>*/}
            {/*</Route>*/}
            <Route exact path="/" element={<HomePage/>}/>
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

// const ProtectedRoute = () => {
//     if (getToken()) {
//         return <Outlet />;
//     }else{
//         return <Navigate to="login"/>;
//     }
// };
//
