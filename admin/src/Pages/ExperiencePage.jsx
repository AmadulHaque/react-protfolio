import React,{Suspense,lazy} from 'react'
import LazyLoader from "../Components/masterLayout/LazyLoader";
import MasterLayout from "../Components/masterLayout/MasterLayout";
const  Experience = lazy(()=>import('../Components/Experience/Experience'));

export default function ExperiencePage() {
  return (
    <div>
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Experience/>
            </Suspense>
        </MasterLayout>
    </div>
  )
}
