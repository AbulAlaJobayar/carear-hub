import React from 'react';

const Home = () => {
    return (
        <>
            {/* top header section */}
            <div className='my-container md:flex items-center justify-between min-h-full  gap-10'>
                <div>
                    <h1 className='text-5xl font-extrabold text-gray-700  leading-tight'>
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
                <img  className='object-cover ' src="https://i.ibb.co/fqjkFjn/22654-6-man.png" alt="" />
                </div>
            </div>
            
            <section>

            </section>
        </>
    );
};

export default Home;