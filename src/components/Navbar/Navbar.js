import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between'>
            <div>
                <div>
                    <h2 className='text-3xl text-orange-600 font-bold'>MS TECH QUIZ</h2>

                </div>
            </div>
            <nav>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <FontAwesomeIcon className='h-6 w-6 md:hidden' icon={faXmark} />
                            : <FontAwesomeIcon className='h-6 w-6 md:hidden' icon={faBars} />
                    }
                </div>


                <div className={`text-xl flex flex-col md:flex-row justify-center w-full bg-rose-300 absolute md:bg-white md:static duration-500 ease-out ${open ? 'left-[250px]' : 'top-[-120px]'}`}>

                    <Link className='ml-12 hover:text-orange-600' to='/'>Home</Link>
                    <Link className='ml-12 hover:text-orange-600' to='/statistic'>Statistic</Link>
                    <Link className='ml-12 hover:text-orange-600' to='/topics'>Topics</Link>
                    <Link className='ml-12 hover:text-orange-600' to='/blog'>Blog</Link>

                </div>


            </nav>
        </div>
    );
};

export default Navbar;