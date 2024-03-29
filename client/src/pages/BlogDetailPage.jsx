import React from 'react';
import Header from "../layouts/Header.jsx";
import BlogDetail from "../components/Blog/BlogDetail.jsx";
const BlogDetailPage = () => {
    return (
        <div className="root-bg blog-post">
            <Header/>
            <BlogDetail/>
        </div>
    );
};

export default BlogDetailPage;