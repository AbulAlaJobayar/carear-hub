import React from 'react';

const Fetcher = ({data}) => {
    console.log({data});
    const {logo,jobTitle,companyName,jobtime,jobLocation}=data
    return (
        <div >
           <img className='object-cover' src={logo} alt="" />
           <h2>{jobTitle}</h2> 
           <p>{companyName}</p>
           <div className='flex justify-center items-center'>
            <p>{jobtime[0]}</p>
            <p>{jobtime[1]}</p>
           </div>
           <div>
            
           </div>
        </div>
    );
};

export default Fetcher;