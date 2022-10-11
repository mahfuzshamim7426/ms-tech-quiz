import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Questions = ({ singleQuestion, serial, countNumber, setCountNumber }) => {
    const [showAns, setShowAns] = useState(false);
    const { question, options, correctAnswer } = singleQuestion;
    const handleQuizSelect = (e) => {
        const value = e.target.value;
        if (value === correctAnswer) {
            setCountNumber(countNumber + 1)
            toast.success('Right Answer', { autoClose: 2000, closeOnClick: true, })
        }
        else {
            toast.error('Wrong Answer', { autoClose: 2000, closeOnClick: true, })
        }
    }
    return (
        <div className=' my-12 mx-4  md:mx-36 border border-sky-500 p-8 rounded-md bg-gradient-to-r from-orange-700 to-cyan-700'>
            <div className='flex  justify-between'>
                <div className='flex text-white'>Question {serial + 1}: <div className='ml-2' dangerouslySetInnerHTML={{ __html: question }} /> </div>
                {
                    showAns ? <FontAwesomeIcon className='text-white' onClick={() => setShowAns(false)} icon={faEyeSlash} />
                        : <FontAwesomeIcon className='text-white' onClick={() => setShowAns(true)} icon={faEye} />
                }
            </div>

            <h2 className={`bg-green-400 ${showAns ? 'block' : 'hidden'} inline py-1 px-2 rounded`}>{correctAnswer}</h2>
            {/* {showAns &&
                <h2 className='bg-green-400 inline py-1 px-2 rounded'>{correctAnswer}</h2>
            } */}

            <div className='grid grid-cols-2 text-white'>
                {
                    options.map((option, indix) => (
                        <div key={indix}>
                            <label>
                                <input className='mr-2 mt-4' type="radio" value={option} name="radiovalues" onChange={handleQuizSelect} />
                                <b>{option}</b>
                                <ToastContainer closeOnClick />
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Questions;