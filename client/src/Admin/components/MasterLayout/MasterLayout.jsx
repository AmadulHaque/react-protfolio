import React, { Fragment, useRef} from 'react';
import { Accordion, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import  '../../assets/css/bootstrap.css';
import  '../../assets/css/dropdownmenu.css';
import '../../assets/css/progress.css';
import '../../assets/css/sidebar.css';
import '../../assets/css/animate.min.css';
import  '../../assets/css/style.css';


import {
    FaHome,
    FaTasks,
    FaPlusCircle,
    FaProductHunt,
    FaUserAlt,
    FaTruck,
    FaStore,
    FaCartArrowDown, FaBriefcaseMedical, FaStackExchange, FaBox
} from "react-icons/fa";
import {AiOutlineLogout, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai';
import { FaRegDotCircle,FaChartLine,FaShoppingBag} from "react-icons/fa";
import {removeSessions,getUserDetails} from "../../Helper/SessionHelper.js";
const MasterLayout = (props) => {
    let contentRef, sideNavRef,topNavRef = useRef();

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        let topNav = topNavRef;
        if (sideNav.classList.contains('side-nav-open')) {
            sideNav.classList.add('side-nav-close');
            sideNav.classList.remove('side-nav-open');
            content.classList.add('content-expand');
            content.classList.remove('content');
            topNav.classList.remove('top-nav-open');
            topNav.classList.add('top-nav-close');
        } else {
            sideNav.classList.remove('side-nav-close');
            sideNav.classList.add('side-nav-open');
            content.classList.remove('content-expand');
            content.classList.add('content');
            topNav.classList.add('top-nav-open');
            topNav.classList.remove('top-nav-close');
        }
    };

    const isSidebarAccordionActive = () => {
        let urlList = [];
        sidebarItems.map((item) => {
            urlList.push(
                item.subMenu.map((subItem) => {
                    return subItem?.url;
                })
            );
        });
        return urlList.findIndex((items) =>
            items.includes(window.location.pathname)
        );
    };

    const sidebarItems = [
        {
            title: 'Dashboard',
            icon: <FaHome className="side-bar-item-icon" />,
            url: '/dashboard',
            subMenu: [
                {
                    title: 'Dashboard',
                    icon: <FaHome className="side-bar-item-icon" />,
                    url: '/dashboard',
                },
            ],
        },
        {
            title: 'Supplier',
            icon: <FaTruck className="side-bar-item-icon" />,
            url: '/Supplier',
            subMenu: [
                {
                    title: 'New Supplier',
                    icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
                    url: '/SupplierCreateUpdatePage',
                },
                {
                    title: 'Supplier List',
                    icon: (
                        <FaTasks size={16} className="side-bar-subitem-icon" />
                    ),
                    url: '/SupplierListPage',
                },
            ],
        },
    ];

    const UserLogout = ()=>{
        removeSessions();
    }

    return (
        <Fragment style={{background: '#ffff !important'}}>
            <Navbar className="fixed-top px-0 ">
                <Container fluid={true}>

                    <Navbar.Brand>
                        <div ref={(div) => {topNavRef = div}} className="top-nav-open">
                            <h4 className="text-white m-0 p-0"><a onClick={MenuBarClickHandler}><AiOutlineMenu /></a></h4>
                        </div>
                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex align-items-center">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav"  alt=""/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img"  alt=""/>
                                    <h6></h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                    <AiOutlineUser className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={UserLogout}  className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </Container>
            </Navbar>


            <div ref={(div) => {sideNavRef = div}} className="side-nav-open border-radius-0 card">
                <NavLink to="/" end className="d-flex justify-content-center sticky-top bg-white">
                    <img className="logo"/>
                </NavLink>

                <Accordion defaultActiveKey={`${isSidebarAccordionActive()}`}>
                    {sidebarItems.map((item, index) => {
                        return item.subMenu.length !== 0 ? (
                            <Accordion.Item
                                key={index.toString()}
                                eventKey={`${index}`}
                                className="mt-2"
                            >
                                <Accordion.Header>
                                    <div className="side-bar-item">
                                        {item.icon}
                                        <span className="side-bar-item-caption">
                      {item.title}
                    </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {item.subMenu.map((subItem, index) => (
                                        <NavLink
                                            key={index.toString()}
                                            className={(navData) =>
                                                navData.isActive
                                                    ? 'side-bar-subitem-active side-bar-subitem '
                                                    : 'side-bar-subitem'
                                            }
                                            to={subItem?.url}
                                            end
                                        >
                                            {subItem?.icon}
                                            <span className="side-bar-subitem-caption">
                        {subItem?.title}
                      </span>
                                        </NavLink>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        ) : (
                            <NavLink
                                className={(navData) =>
                                    navData.isActive
                                        ? 'side-bar-item-active side-bar-item mt-2'
                                        : 'side-bar-item mt-2'
                                }
                                to={'/'}
                                end
                            >
                                {item.icon}
                                <span className="side-bar-item-caption">
                  {item.title}
                </span>
                            </NavLink>
                        );
                    })}
                </Accordion>

            </div>
            <div ref={(div) => (contentRef = div)} className="content">
                {props.children}
            </div>
        </Fragment>
    );
};

export default MasterLayout;
