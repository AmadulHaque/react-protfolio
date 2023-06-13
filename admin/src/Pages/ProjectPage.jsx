import React,{Suspense,lazy} from 'react'
import LazyLoader from "../Components/masterLayout/LazyLoader";
import MasterLayout from "../Components/masterLayout/MasterLayout";
const  Project = lazy(()=>import('../Components/Project/Project.jsx'));

const ProjectPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Project/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProjectPage;