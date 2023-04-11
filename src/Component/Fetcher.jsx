import React from 'react';
import {MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';

const Fetcher = ({ data}) => {

    const { id ,logo, jobTitle, companyName, jobtime, jobLocation,salary } = data;

    const navigate =useNavigate()
    
    return (
        <div className='gap-5 border-gray-200 p-10 border rounded '>
            <img className='object-cover w-56' src={logo} alt="" />
            <h2 className='text-2xl font-bold text-gray-700 mt-8'>{jobTitle}</h2>
            <p className='mt-2 text-gray-400 text-xl font-semibold'>{companyName}</p>
            <div className='mt-4 flex justify-start items-center gap-4'>
                <p className= 'border text-base font-bold border-blue-400 text-blue-400 rounded py-2 px-4'>

                {jobtime[0]}
                </p>
                <p className= 'border text-base font-bold border-blue-400 text-blue-400 rounded py-2 px-4'>{jobtime[1]}</p>
            </div>

            <div className='flex  items-center mt-4'>
                <p className=' flex items-center gap-2 mr-14 '>
               <MapPinIcon className="h-6 w-6 text-gray-500 mr-2" ></MapPinIcon>
                 <span className='text-xl font-semibold text-gray-400'>{jobLocation}</span></p>

                 <p className=' flex items-center gap-2 '>
                    <CurrencyDollarIcon className="h-6 w-6 text-gray-400 mr-2"></CurrencyDollarIcon>
                 <span className='text-xl font-semibold text-gray-400'>{salary}</span></p>
                
            </div>
            
            <button onClick={()=>navigate(`jobdetails/${id}`)} className=' btn-primary '>View Details</button>
    
        </div>
    );
};

export default Fetcher;