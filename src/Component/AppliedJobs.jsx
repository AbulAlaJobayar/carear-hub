import React, { useState } from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import TotalApplay from './TotalApplay';

const AppliedJobs = () => {
    const allData = useLoaderData()
    const savedCart = getStoredCart();
    let totalData = []
    for (const id in savedCart) {
        const data = allData.find(pd => pd.id == id);
        if (data) {
            totalData.push(data)
        }
    }
    return (
        <div >
             <h1 className='mt-14 text-3xl font-bold text-gray-700 text-center'>Applied Jobs</h1>
            <div className='my-container'>
                {
                    totalData.map((product, index) => <TotalApplay key={index} product={product}></TotalApplay>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;