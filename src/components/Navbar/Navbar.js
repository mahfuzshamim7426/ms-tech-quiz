import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h2 className='text-3xl text-orange-600'>MS TECH QUIZ</h2>
            </div>
            <nav className='text-xl'>
                <Link className='ml-12 hover:text-orange-600' to='/'>Home</Link>
                <Link className='ml-12 hover:text-orange-600' to='/statistic'>Statistic</Link>
                <Link className='ml-12 hover:text-orange-600' to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Navbar;