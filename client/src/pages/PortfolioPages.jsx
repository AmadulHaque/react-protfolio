import React from 'react';
import Header from "../layouts/Header.jsx";
import img1 from "../assets/img/projects/project-1.jpg";
import img2 from "../assets/img/projects/project-2.jpg";
import img3 from "../assets/img/projects/project-3.jpg";
import img4 from "../assets/img/projects/project-4.jpg";
import img5 from "../assets/img/projects/project-5.jpg";
import img6 from "../assets/img/projects/project-6.jpg";
import img7 from "../assets/img/projects/project-7.jpg";
import img8 from "../assets/img/projects/project-8.jpg";
import img9 from "../assets/img/projects/project-9.jpg";

const PortfolioPages = () => {
    return (
        <div className="portfolio">
            <Header/>
            {/* Page Title Starts */}
            <section className="title-section text-left text-sm-center ">
                <h1>
                    my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
            </section>
            {/* Page Title Ends */}
            <section className="main-content text-center">
                <div id="grid-gallery" className="container grid-gallery">
                    {/* Portfolio Grid Starts */}
                    <section className="grid-wrap">
                        <ul className="row grid">
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img1} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img2} alt="Portolio Image" />
                                    <div>
                                        <span>Youtube Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img3} alt="Portolio Image" />
                                    <div>
                                        <span>Slider Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img4} alt="Portolio Image" />
                                    <div>
                                        <span>Local Video Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img5} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img4} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img7} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img8} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <li>
                                <figure>
                                    <img src={img9} alt="Portolio Image" />
                                    <div>
                                        <span>Image Project</span>
                                    </div>
                                </figure>
                            </li>
                            {/* Portfolio Item Ends */}
                        </ul>
                    </section>
                </div>
            </section>


        </div>
    );
};

export default PortfolioPages;