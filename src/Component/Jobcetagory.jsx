import React from 'react';

const Jobcetagory = ({data}) => {
    const {icon ,title,available}=data
    return (
        <div className='bg-gray-100 border rounded  p-7 '>
            <img src={icon} alt="" />
            <p className='text-sm font-bold text-gray-700 mt-8'>{title}</p>
            <p className='text-xs text-gray-700  mt-2'>{available} Jobs Available</p>
        </div>
    );
};

export default Jobcetagory;