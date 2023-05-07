import React from 'react';
import img from "../../assets/img/blog/blog-post-1.jpg";

const BlogDetail = () => {
    return (
        <>
            <section
                className="title-section text-left text-sm-center">
                <h1>my <span>portfolio</span></h1>
                <span className="title-bg">works</span>
            </section>
            <section className="main-content ">
                <div className="container">
                    <div className="row">
                        {/* Article Starts */}
                        <article className="col-12">
                            {/* Meta Starts */}
                            <div className="meta open-sans-font">
                              <span>
                                <i className="fa fa-user" /> steve
                              </span>
                                <span className="date">
                                <i className="fa fa-calendar" /> 9 January 2017
                              </span>
                                <span>
                                <i className="fa fa-tags" /> wordpress, business, economy, design
                              </span>
                            </div>
                            {/* Meta Ends */}
                            {/* Article Content Starts */}
                            <h1 className="text-uppercase text-capitalize">
                                Everything You Need to Know About Web Accessibility
                            </h1>
                            <img
                                src={img}
                                className="img-fluid"
                                alt="Blog image"
                            />
                            <div className="blog-excerpt open-sans-font pb-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            {/* Article Content Ends */}
                        </article>
                        {/* Article Ends */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;