import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label='DigiEmploy'
          title='DigiEmploy'
          className='inline-flex items-center'
        >
          <span className='ml-2 text-2xl font-bold tracking-wide text-gray-800 '>
          DigiEmploy
          </span>
        </Link>




        <ul className='items-center hidden space-x-8 lg:flex'>
          {/* no 1 li */}
          <li>
            <NavLink
              to='/'
              aria-label='home'
              title='home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/statistics'
              aria-label='statistics'
              title='statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          {/* no2 li */}

          <li>
            <NavLink
              to='/appliedJobs'
              aria-label='Shop'
              title='Shop'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>

          {/* no3 li */}
          <li>
            <Link to='/cart' aria-label='Cart' title='Cart'>
              <div className='relative py-3'>
                {/* <ShoppingCartIcon className='h-6 w-6 text-cyan-400' /> */}
              </div>
            </Link>
          </li>

          {/* no 4 li */}
          <li>
            <NavLink
              to='/blog'
              aria-label='About Us'
              title='About Us'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className=' btn-primary hidden lg:block '> Star Applying</button>
        {/* li-end */}

        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10 top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      to='/'
                      aria-label='DigiEmploy'
                      title='DigiEmploy'
                      className='inline-flex items-center'
                    >
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase '>
                      DigiEmploy
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                  <li>
                      <Link
                        to='/ '
                        aria-label='Home'
                        title='Home'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/statistics'
                        aria-label='Statistics'
                        title='Statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Statistics
                      </Link>
                    </li>

                    <li>
                      <Link
                        to='/appliedjobs'
                        aria-label='Applied Jobs'
                        title='Applied Jobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Applied Jobs
                      </Link>
                    </li>


                    <li>
                      <Link
                        to='/blog'
                        aria-label='Blog'
                        title='Blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                  <button className='btn-primary '> click me</button>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navigation
