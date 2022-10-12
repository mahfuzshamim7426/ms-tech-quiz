import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between p-2'>
            <div>
                <div>
                    <h2 className='text-3xl text-orange-600 font-bold'>MS TECH QUIZ</h2>

                </div>
            </div>
            <nav>
                {/* <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <FontAwesomeIcon className='h-6 w-6 md:hidden' icon={faXmark} />
                            : <FontAwesomeIcon className='h-6 w-6 md:hidden' icon={faBars} />
                    }
                </div> */}
                <div className='md:hidden' onClick={() => setOpen(true)}>
                    <FontAwesomeIcon className='h-8 w-8 md:hidden' icon={faBars} />
                </div>


                <div className={`p-3 text-xl flex flex-col md:flex-row md:gap-12 justify-center w-full bg-rose-200 absolute md:bg-white md:static duration-500 ease-out  left-0 ${open ? 'top-0' : '-top-full'}`}>
                    <div className='flex justify-end md:hidden' onClick={() => setOpen(false)}>
                        <FontAwesomeIcon className='h-8 w-8 md:hidden' icon={faXmark} />
                    </div>

                    <Link className='text-center' to='/'>Home</Link>
                    <Link className='text-center mt-2 md:mt-0' to='/statistic'>Statistic</Link>
                    <Link className='text-center mt-2 md:mt-0' to='/topics'>Topics</Link>
                    <Link className='text-center mt-2 md:mt-0' to='/blog'>Blog</Link>

                </div>


            </nav>
        </div>
    );
};

export default Navbar;