import React,{lazy, Suspense} from 'react';
import MasterLayout from "../Components/masterLayout/MasterLayout";
import LazyLoader from "../Components/masterLayout/LazyLoader";

const  AllProduct = lazy(()=>import('../Components/Product/AllProduct'));

const ProductPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <AllProduct/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProductPage;