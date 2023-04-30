import React from 'react';
import Header from "../layouts/Header.jsx";

const AboutPage = () => {
    return (
        <div className="about">
            <Header/>
            <section className="title-section text-left text-sm-center">
                <h1>
                    ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
            </section>
            {/* Page Title Ends */}
            {/* Main Content Starts */}
            <section className="main-content ">
                <div className="container">
                    <div className="row">
                        {/* Personal Info Starts */}
                        <div className="col-12 col-lg-5 col-xl-6">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                                        personal infos
                                    </h3>
                                </div>
                                <div className="col-12 d-block d-sm-none">
                                    <img
                                        src="img/img-mobile.jpg"
                                        className="img-fluid main-img-mobile"
                                        alt="my picture"
                                    />
                                </div>
                                <div className="col-6">
                                    <ul className="about-list list-unstyled open-sans-font">
                                        <li>
                                            {" "}
                                            <span className="title">first name :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                Steve
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">last name :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                Milner
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">Age :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                27 Years
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">Nationality :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                Tunisian
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">Freelance :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                Available
              </span>{" "}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="about-list list-unstyled open-sans-font">
                                        <li>
                                            {" "}
                                            <span className="title">Address :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                Tunis
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">phone :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                +21621184010
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">Email :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                you@mail.com
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">Skype :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                steve.milner
              </span>{" "}
                                        </li>
                                        <li>
                                            {" "}
                                            <span className="title">langages :</span>{" "}
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                French, English
              </span>{" "}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 mt-3">
                                    <a href="about.html" className="btn btn-download">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Personal Info Ends */}
                        {/* Boxes Starts */}
                        <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                            <div className="row">
                                <div className="col-6">
                                    <div className="box-stats with-margin">
                                        <h3 className="poppins-font position-relative">12</h3>
                                        <p className="open-sans-font m-0 position-relative text-uppercase">
                                            years of <span className="d-block">experience</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="box-stats with-margin">
                                        <h3 className="poppins-font position-relative">97</h3>
                                        <p className="open-sans-font m-0 position-relative text-uppercase">
                                            completed <span className="d-block">projects</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="box-stats">
                                        <h3 className="poppins-font position-relative">81</h3>
                                        <p className="open-sans-font m-0 position-relative text-uppercase">
                                            Happy<span className="d-block">customers</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="box-stats">
                                        <h3 className="poppins-font position-relative">53</h3>
                                        <p className="open-sans-font m-0 position-relative text-uppercase">
                                            awards <span className="d-block">won</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Boxes Ends */}
                    </div>
                    <hr className="separator" />
                    {/* Skills Starts */}
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                                My Skills
                            </h3>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p25">
                                <span>25%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                html
                            </h6>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p89">
                                <span>89%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                javascript
                            </h6>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p70">
                                <span>70%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                css
                            </h6>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p66">
                                <span>66%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                php
                            </h6>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p95">
                                <span>95%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                wordpress
                            </h6>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p50">
                                <span>50%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                jquery
                            </h6>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p65">
                                <span>65%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                angular
                            </h6>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-sm-5">
                            <div className="c100 p45">
                                <span>45%</span>
                                <div className="slice">
                                    <div className="bar" />
                                    <div className="fill" />
                                </div>
                            </div>
                            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                                react
                            </h6>
                        </div>
                    </div>
                    {/* Skills Ends */}
                    <hr className="separator mt-1" />
                    {/* Experience & Education Starts */}
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                                Experience <span>&amp;</span> Education
                            </h3>
                        </div>
                        <div className="col-lg-6 m-15px-tb">
                            <div className="resume-box">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-briefcase" />
                                        </div>
                                        <span className="time open-sans-font text-uppercase">
              2018 - Present
            </span>
                                        <h5 className="poppins-font text-uppercase">
                                            Web Developer{" "}
                                            <span className="place open-sans-font">Envato</span>
                                        </h5>
                                        <p className="open-sans-font">
                                            Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                                            labore adipisicing elit,{" "}
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-briefcase" />
                                        </div>
                                        <span className="time open-sans-font text-uppercase">
              2013 - 2018
            </span>
                                        <h5 className="poppins-font text-uppercase">
                                            UI/UX Designer{" "}
                                            <span className="place open-sans-font">Themeforest</span>
                                        </h5>
                                        <p className="open-sans-font">
                                            Lorem incididunt dolor sit amet, consectetur eiusmod dunt
                                            doldunt dol elit, tempor incididunt
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-briefcase" />
                                        </div>
                                        <span className="time open-sans-font text-uppercase">
              2005 - 2013
            </span>
                                        <h5 className="poppins-font text-uppercase">
                                            Consultant{" "}
                                            <span className="place open-sans-font">Videohive</span>
                                        </h5>
                                        <p className="open-sans-font">
                                            Lorem ipsum dolor sit amet, tempor incididunt ut
                                            laboreconsectetur elit, sed do eiusmod tempor duntt
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 m-15px-tb">
                            <div className="resume-box">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-graduation-cap" />
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2015</span>
                                        <h5 className="poppins-font text-uppercase">
                                            Engineering Degree{" "}
                                            <span className="place open-sans-font">
                Oxford University
              </span>
                                        </h5>
                                        <p className="open-sans-font">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            do tempor incididunt ut labore
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-graduation-cap" />
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2012</span>
                                        <h5 className="poppins-font text-uppercase">
                                            Master Degree{" "}
                                            <span className="place open-sans-font">Kiev University</span>
                                        </h5>
                                        <p className="open-sans-font">
                                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                            tempor incididunt ut adipisicing
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-graduation-cap" />
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2009</span>
                                        <h5 className="poppins-font text-uppercase">
                                            Bachelor Degree{" "}
                                            <span className="place open-sans-font">
                Tunis High School
              </span>
                                        </h5>
                                        <p className="open-sans-font">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            do eiusmod tempor ut labore
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Experience & Education Ends */}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;