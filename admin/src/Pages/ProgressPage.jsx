import React,{lazy, Suspense} from 'react';
import MasterLayout from "../Components/masterLayout/MasterLayout";
import LazyLoader from "../Components/masterLayout/LazyLoader";

const  Progress = lazy(()=>import('../Components/Progress/Progress'));

const ProgressPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Progress/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProgressPage;