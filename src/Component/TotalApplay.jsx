import React from 'react';
import { MapPinIcon, CurrencyDollarIcon, } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const TotalApplay = ({ product }) => {
    const {id, logo, jobTitle, companyName, jobtime, jobLocation, salary } = product
    const navigate = useNavigate()
    return (
        <div className='my-container flex items-center justify-between border border-gray-300 gap-9 mt-9 rounded-lg'>
            <div className='flex gap-6 items-center'>
                <img src={logo} alt="" className='flex-shrink-0  w-20 h-20 border-transparent  rounded outline-none sm:w-32 sm:h-32 ' />
                <div>
                    <h1 className=' text-2xl font-bold text-gray-700'>{jobTitle}</h1>
                    <p className='text-2xl font-medium text-gray-700 mt-2'>{companyName}</p>
                    <div className='flex items-center gap-4 mt-4 '>
                        <p className='border border-blue-400 px-5 py-2 text-blue-400 text-base rounded'>{jobtime[0]}</p>
                        <p className='border border-blue-400 px-5 rounded py-2 text-blue-400 text-base'>{jobtime[1]}</p>
                    </div>
                    <div className=' flex items-center gap-4 text-gray-700 text-xl font-semibold mt-6' >
                        <p className='text-gray-700 text-xl font-semibold flex items-center'>
                            <MapPinIcon className='h-6 w-6 text-gray-500 mr-2'></MapPinIcon>
                            
                            <span>{jobLocation}</span></p>
                        <p className='text-gray-700 text-xl font-semibold flex items-center '>
                            <CurrencyDollarIcon className='h-6 w-6 text-gray-500 mr-2'></CurrencyDollarIcon>
                            <span>{salary}</span></p>
                    </div>
                </div>
            </div>
            <div>
<button className='btn-primary' onClick={()=>navigate(`../jobdetails/${id}`)}> View Details</button>
            </div>
        </div>
    );
};

export default TotalApplay;