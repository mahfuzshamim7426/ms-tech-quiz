import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { name, logo, total, id } = quiz;
    return (
        <div className='align-middle border-2 border-sky-500 rounded-md mb-8 p-4 bg-black '>
            <div className='flex justify-center mt-4'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between text-white mt-8 md:mx-8'>
                <div className='text-3xl'>{name}</div>
                <Link to={`/quiz/${id}`}>
                    <button className='flex justify-center items-center bg-orange-600 p-2 rounded-md hover:bg-cyan-100 hover:text-black'>
                        <p className='mr-4'>Start Quiz</p>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
            <div className='text-white text-center mt-8'>
                Total Questions: {total}
            </div>
        </div>
    );
};

export default Quiz;