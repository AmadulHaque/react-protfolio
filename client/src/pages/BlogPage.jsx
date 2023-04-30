import React from 'react';
import Header from "../layouts/Header.jsx";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";
import {Link} from "react-router-dom";
const BlogPage = () => {
    return (
        <div className="blog">
            <Header/>
            <section className="title-section text-left text-sm-center ">
                <h1>my <span>blog</span></h1>
                <span className="title-bg">posts</span>
            </section>
            <section className="main-content ">
                <div className="container">
                    {/* Articles Starts */}
                    <div className="row">
                        {/* Article Starts */}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                            <article className="post-container">
                                <div className="post-thumb">
                                    <Link to="/blog-post/1" className="d-block position-relative overflow-hidden">
                                        <img src={img1} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>
                                            <Link to="/blog-post/1">
                                                How to Own Your Audience by Creating an Email List
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore...
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Article Ends */}
                        {/* Article Starts */}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                            <article className="post-container">
                                <div className="post-thumb">
                                    <Link to="/blog-post/2" className="d-block position-relative overflow-hidden">
                                        <img src={img2} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>
                                            <Link to="/blog-post/2">
                                                Top 10 Toolkits for Deep Learning in 2020
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore...
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Article Ends */}
                        {/* Article Starts */}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                            <article className="post-container">
                                <div className="post-thumb">
                                    <Link to="/blog-post/3" className="d-block position-relative overflow-hidden">
                                        <img src={img3} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>
                                            <Link to="/blog-post/3">
                                                Everything You Need to Know About Web Accessibility
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore...
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Article Ends */}
                        {/* Article Starts */}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                            <article className="post-container">
                                <div className="post-thumb">
                                    <Link to="/blog-post/4" className="d-block position-relative overflow-hidden">
                                        <img src={img4} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>
                                            <Link to="/blog-post/4">
                                                How to Inject Humor &amp; Comedy Into Your Brand
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore...
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Article Ends */}
                        {/* Article Starts */}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                            <article className="post-container">
                                <div className="post-thumb">
                                    <Link to="/blog-post/5" className="d-block position-relative overflow-hidden">
                                        <img src={img5} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>
                                            <Link to="/blog-post/5">
                                                Women in Web Design: How To Achieve Success
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore...
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Article Ends */}
                        {/* Article Starts */}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                            <article className="post-container">
                                <div className="post-thumb">
                                    <Link to="/blog-post/6" className="d-block position-relative overflow-hidden">
                                        <img src={img6} className="img-fluid" alt=""/>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <div className="entry-header">
                                        <h3>
                                            <Link to="/blog-post/6">
                                                Evergreen versus topical content: An overview
                                            </Link>
                                        </h3>
                                    </div>
                                    <div className="entry-content open-sans-font">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore...
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Article Ends */}
                        {/* Pagination Starts */}
                        <div className="col-12 mt-4">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            4
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Pagination Ends */}
                    </div>
                    {/* Articles Ends */}
                </div>
            </section>

        </div>
    );
};

export default BlogPage;