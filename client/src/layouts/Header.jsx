import React,{useState} from 'react';
import {Link} from "react-router-dom";
 const Header = () => {
     const [path,setPath] = useState(window.location.pathname);


    return (
        <div>
            <header className="header" id="navbar-collapse-toggle">
                <ul className="icon-menu d-none d-lg-block">
                    <li className={path=="/" ? "icon-box active" : "icon-box"}>
                        <i className="fa fa-home"></i>
                        <Link   to="/">
                            <h2>Home</h2>
                        </Link>
                    </li>
                    <li className={path=="/about" ? "icon-box active" : "icon-box"}>
                        <i className="fa fa-user"></i>
                        <Link to="/about">
                            <h2>About</h2>
                        </Link>
                    </li>
                    <li className={path=="/portfolio" ? "icon-box active" : "icon-box"}>
                        <i className="fa fa-briefcase"></i>
                        <Link to="/portfolio">
                            <h2>Portfolio</h2>
                        </Link>
                    </li>
                    <li className={path=="/contact" ? "icon-box active" : "icon-box"}>
                        <i className="fa fa-envelope-open"></i>
                        <Link to="/contact">
                            <h2>Contact</h2>
                        </Link>
                    </li>
                    <li className={path=="/blog" ? "icon-box active" : "icon-box"}>
                        <i className="fa fa-comments"></i>
                        <Link to="/blog">
                            <h2>Blog</h2>
                        </Link>
                    </li>
                </ul>
                <nav className="d-block d-lg-none">
                    <div id="menuToggle">
                        <input type="checkbox"/>
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="list-unstyled" id="menu">
                            <li className="active"><a href="index.html"><i className="fa fa-home"></i><span>Home</span></a></li>
                            <li><a href="about.html"><i className="fa fa-user"></i><span>About</span></a></li>
                            <li><a href="portfolio.html"><i className="fa fa-folder-open"></i><span>Portfolio</span></a></li>
                            <li><a href="contact.html"><i className="fa fa-envelope-open"></i><span>Contact</span></a></li>
                            <li><a href="blog.html"><i className="fa fa-comments"></i><span>Blog</span></a></li>
                        </ul>
                    </div>
                </nav>

            </header>
        </div>
    );
};

export default Header;