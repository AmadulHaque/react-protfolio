import React from 'react';
import  img  from "../assets/img/2.jpg"
import Header from "../layouts/Header.jsx";
const HomePage = () => {
    return (
        <div className='home'>
            <Header/>
            <section className="container-fluid main-container container-home p-0  ">
                <div className="color-block d-none d-lg-block" />
                <div className="row home-details-container align-items-center">
                    <div style={{
                        backgroundImage: "url("+img+")",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                        height: "calc(100vh - 60px)",
                        zIndex: 111,
                        borderRadius: 15,
                        left: 30,
                        top: 30,
                        boxShadow: "0 0 7px rgba(0,0,0,.9)"
                    }} className="col-lg-4 bg position-fixed d-none d-lg-block" />
                    <div
                         className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                        <div>
                            <img
                                src={img}
                                className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
                                alt="my picture"
                            />
                            <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">
                                hi there !
                            </h6>
                            <h1 className="text-uppercase poppins-font">
                                <span>I'm</span> steve milner
                            </h1>
                            <p className="open-sans-font">
                                I'm a Tunisian based web designer &amp; front‑end developer focused on
                                crafting clean &amp; user‑friendly experiences, I am passionate about
                                building excellent software that improves the lives of those around
                                me.
                            </p>
                            <a href="about.html" className="btn btn-about">
                                more about me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;