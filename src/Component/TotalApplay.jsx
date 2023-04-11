import React from 'react';

const TotalApplay = ({product}) => {
    const {logo,jobTitle,companyName,jobtime,jobLocation,salary}=product
    return (
        <div className='my-container'>
           <img src={logo} alt="" className='object-cover w-40 border border-gray-200' /> 
           <div>
            <h1></h1>
           </div>
        </div>
    );
};

export default TotalApplay;