import React from 'react';
import Header from "../layouts/Header.jsx";

const ContactPage = () => {
    return (
        <div className="contact">
            <Header/>
            <section className="title-section text-left text-sm-center">
                <h1>get in <span>touch</span></h1>
                <span className="title-bg">contact</span>
            </section>

            <section className="main-content">
                <div className="container">
                    <div className="row">
                        {/* Left Side Starts */}
                        <div className="col-12 col-lg-4">
                            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                                Don't be shy !
                            </h3>
                            <p className="open-sans-font mb-3">
                                Feel free to get in touch with me. I am always open to discussing
                                new projects, creative ideas or opportunities to be part of your
                                visions.
                            </p>
                            <p className="open-sans-font custom-span-contact position-relative">
                                <i className="fa fa-envelope-open position-absolute" />
                                <span className="d-block">mail me</span>steve@mail.com
                            </p>
                            <p className="open-sans-font custom-span-contact position-relative">
                                <i className="fa fa-phone-square position-absolute" />
                                <span className="d-block">call me</span>+216 21 184 010
                            </p>
                            <ul className="social list-unstyled pt-1 mb-5">
                                <li className="facebook">
                                    <a title="Facebook" href="#">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a title="Twitter" href="#">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="youtube">
                                    <a title="Youtube" href="#">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                <li className="dribbble">
                                    <a title="Dribbble" href="#">
                                        <i className="fa-brands fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Left Side Ends */}
                        {/* Contact Form Starts */}
                        <div className="col-12 col-lg-8">
                            <form
                                className="contactform"
                                method="post"
                                action="http://slimhamdi.net/tunis/dark/php/process-form.php"
                            >
                                <div className="contactform">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <input type="text" name="name" placeholder="YOUR NAME" />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <input type="email" name="email" placeholder="YOUR EMAIL" />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="YOUR SUBJECT"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" placeholder="YOUR MESSAGE" defaultValue={""}/>
                                            <button type="submit" className="btn btn-contact">
                                                Send Message
                                            </button>
                                        </div>
                                        <div className="col-12 form-message">
                                            <span className="output_message text-center font-weight-600 text-uppercase" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Contact Form Ends */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;