import React from 'react';
import Header from "../layouts/Header.jsx";
import Blog from "../components/Blog/Blog.jsx";

const BlogPage = () => {
    return (
        <div className="blog">
            <Header/>
            <Blog/>
        </div>
    );
};

export default BlogPage;