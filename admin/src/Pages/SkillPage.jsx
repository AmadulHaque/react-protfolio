import React,{Suspense,lazy} from 'react';
import LazyLoader from "../Components/masterLayout/LazyLoader";
import MasterLayout from "../Components/masterLayout/MasterLayout";
const  Skill = lazy(()=>import('../Components/Skill/Skill'));

const SkillPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Skill/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default SkillPage;