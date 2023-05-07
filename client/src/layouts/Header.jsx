// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import {Link} from "react-router-dom";
 const Header = () => {
     // eslint-disable-next-line no-unused-vars
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
                            <li className={path=="/" ? "active" : ""}>
                                <Link   to="/">
                                    <i className="fa fa-home"></i><span>Home</span>
                                </Link>
                            </li>
                            <li className={path=="/about" ? "active" : ""}>
                                <Link to="/about">
                                    <i className="fa fa-user"></i><span>About</span>
                                </Link>
                            </li >
                            <li className={path=="/portfolio" ? "active" : ""}>
                                <Link to="/portfolio">
                                    <i className="fa fa-folder-open"></i><span>Portfolio</span>
                                </Link>
                            </li>
                            <li className={path=="/contact" ? "active" : ""}>
                                <Link to="/contact">
                                    <i className="fa fa-envelope-open"></i><span>Contact</span>
                                </Link>
                            </li>
                            <li className={path=="/blog" ? "active" : ""}>
                                <Link to="/blog">
                                    <i className="fa fa-comments"></i><span>Blog</span>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        </div>
    );
};

export default Header;