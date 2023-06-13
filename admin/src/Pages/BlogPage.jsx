import React,{Suspense,lazy} from 'react'
import LazyLoader from "../Components/masterLayout/LazyLoader";
import MasterLayout from "../Components/masterLayout/MasterLayout";
const  Blog = lazy(()=>import('../Components/Blog/Blog'));

const BlogPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Blog/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default BlogPage;