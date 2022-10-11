import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    let activeLinkRouter = "underline";
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


                <div className={`text-xl flex flex-col md:flex-row md:gap-12 justify-center w-full bg-rose-300 absolute md:bg-white md:static duration-500 ease-out ${open ? 'left-[250px]' : 'top-[-120px]'}`}>

                    <NavLink to='/'
                        className={({ isActive }) =>
                            isActive ? activeLinkRouter : undefined
                        }
                    >Home
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeLinkRouter : undefined
                    } to='/statistic'>Statistic</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeLinkRouter : undefined
                    } to='/topics'>Topics</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeLinkRouter : undefined
                    } to='/blog'>Blog</NavLink>

                </div>


            </nav>
        </div>
    );
};

export default Navbar;