import React from 'react';
import Header from "../layouts/Header.jsx";
import Contact from "../components/contact/contact.jsx";

const ContactPage = () => {
    return (
        <div className="contact">
            <Header/>
            <Contact/>
        </div>
    );
};

export default ContactPage;