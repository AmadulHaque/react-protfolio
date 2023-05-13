import React,{Suspense,lazy} from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
// import LazyLoader from "../Components/masterLayout/LazyLoader";
// const  Dashboard = lazy(()=>import('../components/Dashboard/Dashboard.jsx'));
const  DashboardPage= () => {
    return (
        <div>

             <MasterLayout/>

        </div>
    );
};

export default DashboardPage;