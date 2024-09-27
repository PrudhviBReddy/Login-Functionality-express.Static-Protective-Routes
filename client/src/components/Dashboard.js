import React from 'react';
import { useSelector } from 'react-redux';
import TopNavigation from './TopNavigation';

function Dashboard() {
    const storeObj = useSelector((store) => {
        console.log(store);
        return store;
    });

    const { loginDetails } = storeObj; 
    
    return (
        <div>
            <TopNavigation />
            <h1>Dashboard</h1>
            {loginDetails ? (
                <>
                    <h1>{loginDetails.firstName} {loginDetails.lastName}</h1>
                    <img 
                        src={`http://localhost:4567/${loginDetails.profilePic}`} 
                        alt={`${loginDetails.firstName} ${loginDetails.lastName}`} 
                    />
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default Dashboard;
