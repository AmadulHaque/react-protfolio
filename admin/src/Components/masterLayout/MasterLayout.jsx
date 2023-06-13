import React, {Fragment, useRef} from "react";
import {Container,Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../Assets/images/logo.svg";
import { HiMenu,HiViewGrid,HiPlus,HiOutlineLightningBolt,HiServer } from "react-icons/hi";
import {getUserDetails,removeSessions} from "../../Helper/SessionHelper";
import {BaseURl} from "../../Helper/config";

const MasterLayout = (props) => {

    let contentRef,sideNavRef=useRef();


    const onLogout=()=>{
        removeSessions();
    }

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };


    return (
        <Fragment>
            <Navbar  className="fixed-top px-0 shadow-sm ">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}> <HiMenu/> </a>
                        <img className="nav-logo mx-2"  src={logo} alt="logo"/>
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src={BaseURl+getUserDetails()[0]['photo']} alt="aa"/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src={BaseURl+getUserDetails()[0]['photo']} alt="aa"/>
                                    <h6>{getUserDetails()[0]['username']}</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">

                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout}  className="side-bar-item">
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={(div) =>{sideNavRef=div}} className="side-nav-open">
                <NavLink   className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/"  end>
                    <HiViewGrid/>
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/skill" >
                    <HiPlus/>
                    <span className="side-bar-item-caption">Skill </span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/experience" >
                    <HiPlus/>
                    <span className="side-bar-item-caption">Experience</span>
                </NavLink>


                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/project" >
                    <HiPlus/>
                    <span className="side-bar-item-caption">Project</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/blog" >
                    <HiOutlineLightningBolt/>
                    <span className="side-bar-item-caption">Blog</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/Progress" >
                    <HiServer/>
                    <span className="side-bar-item-caption">In Progress</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Completed" >
                    <HiServer/>
                    <span className="side-bar-item-caption">Completed</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Canceled" >
                    <HiServer/>
                    <span className="side-bar-item-caption">Canceled</span>
                </NavLink>

            </div>

            <div ref={(div) => contentRef = div} className="content">
                <div className="container">
                    {props.children}
                </div>
            </div>

        </Fragment>
    );
};

export default MasterLayout;