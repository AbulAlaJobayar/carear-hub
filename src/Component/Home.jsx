import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobcetagory from './Jobcetagory';
import Fetcher from './Fetcher';

const Home = () => {
    const datas = useLoaderData()
    console.log(datas)
const [showAll, setShowAll]=useState(false);
const handleShowAll=()=>{
    setShowAll(true)
}
    return (
        <>
            {/* top header section */}
            <div className='my-container md:flex items-center justify-between min-h-full  gap-10'>
                <div>
                    <h1 className='text-5xl lg:text-7xl font-extrabold text-gray-700  leading-tight'>
                        One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span>
                    </h1>
                    <p className='mt-6 text-xl'>
                        Explore thousands of job opportunities with <br /> all the information you need. Its your future. Come find it. Manage all  your job application from start to finish.
                    </p>
                    <div className='mt-6 '>
                        <button className='btn-primary'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img className='object-cover ' src="https://i.ibb.co/fqjkFjn/22654-6-man.png" alt="" />
                </div>
            </div>
            {/* job catagory  section*/}
            <section className='my-container'>
                <div className='text-center'>
                    <h1 className='text-gray-700 text-3xl  lg:text-5xl font-bold'>Job Category List</h1>
                    <p className='text-lg mt-4 text-gray-700'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='my-container grid md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {datas.slice(0, 4).map(data => <Jobcetagory key={data.id} data={data}></Jobcetagory>)}
                </div>
            </section>
            {/* Featured Jobs section */}
            <section className='my-container'>
            <div className='text-center'>
                    <h1 className='text-gray-700 text-3xl  lg:text-5xl font-bold'>Featured Jobs</h1>
                    <p className='text-lg mt-4 text-gray-700'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid lg:grid-cols-2 my-container gap-4'>
                    {datas.slice(0,showAll ? 6 : 4).map(data=><Fetcher key={data.id} data={data}></Fetcher>)}
                </div>
               <p  onClick={handleShowAll}> <button  className='mx-auto btn-primary text-center'>Show All</button></p>
            </section>
        </>
    );
};

export default Home;