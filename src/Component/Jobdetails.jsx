import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, InboxIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../utils/fakeDB';



const JobDetails = () => {
    const dynamic = useParams()
    //    console.log(dynamic.id)

    const [job, setJob] = useState({});
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                const jobs = data.find(pd => pd.id == dynamic.id)
                setJob(jobs)
            })
    }, [])

    const { id, logo, jobTitle, companyName, jobLocation, salary, jobDescription, jobtime, jobResponsibilities, educationalRequirement, experience, phone, email, address } = job;

    const handleAddToCart=id=>{
        addToDb(id)
    }
    return (
        <div>
            <h1 className='mt-14 text-3xl font-bold text-gray-700 text-center'>Job Details</h1>

            <div className='grid md:grid-cols-2 gap-10 mt-12 my-container'>
                <div>
                    <p><span className='text-base font-bold text-gray-700 '>Job Description:</span>{jobDescription}</p>
                    <p className='mt-6'><span className='text-base font-bold text-gray-700 '>Job Responsibility:</span>{jobResponsibilities}</p>
                    <p className='mt-6'><span className='text-base font-bold text-gray-700 '>Educational Requirements:</span> <br /> {educationalRequirement}</p>
                    <p className='mt-6'><span className='text-base font-bold text-gray-700 '>Experiences:</span> <br />{experience}</p>

                </div>
                <div>
                    <div  className='p-8 bg-blue-100 rounded'>
                    <div>
                        <h1 className='text-2xl font-bold border-b-2  pb-5 border-gray-200'>Job Details</h1>
                        <p className='flex items-center mr-2 mt-6'><CurrencyDollarIcon className='h-6 w-6 text-gray-500 mr-2'></CurrencyDollarIcon> <span className='text-base font-bold text-gray-700 '>Salary: </span>{salary}
                        </p>

                        <p className='flex items-center mr-2 mt-4'>
                            <CalendarDaysIcon className='h-6 w-6 text-gray-500 mr-2'></CalendarDaysIcon>
                            <span className='text-base font-bold text-gray-700 '>Job Title: </span>{jobTitle}

                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-2xl font-bold border-b-2  pb-5 border-gray-200'>Contact Information</h1>

                        <p className='flex items-center mr-2 mt-6'>
                            <PhoneIcon className='h-6 w-6 text-gray-500 mr-2'></PhoneIcon>
                            <span className='text-base font-bold text-gray-700 '>Phone: </span>{phone}
                        </p>
                        <p className='flex items-center mr-2 mt-6'>
                            <InboxIcon className='h-6 w-6 text-gray-500 mr-2'></InboxIcon>
                            <span className='text-base font-bold text-gray-700 '>Email: </span>{email}
                        </p>
                        <p className='flex items-center mr-2 mt-6'>
                            <MapPinIcon className='h-6 w-6 text-gray-500 mr-2'></MapPinIcon>
                            <span className='text-base font-bold text-gray-700 '>Address: </span>{address}
                        </p>

                    </div>
                    </div>
                    <button className='text-gray-600 mt-4 text-2xl font-bold text-center mx-auto bg-gradient-to-r from-blue-300 to-purple-200 w-full rounded py-3' onClick={()=>handleAddToCart(id)} >Apply Now</button>
                </div>
                
            </div>

        </div>
    );
};

export default JobDetails;