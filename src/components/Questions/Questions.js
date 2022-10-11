import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Questions = ({ singleQuestion, serial }) => {
    const [showAns, setShowAns] = useState(false);
    const { question, options, correctAnswer } = singleQuestion;

    const handleQuizSelect = (e) => {
        console.log(e.target.value)
        const value = e.target.value;
        if (value === correctAnswer) {
            alert('correct answer')
        }
        else {
            alert('wrong answer')
        }
    }
    return (
        <div>
            <div className='flex  justify-between'>
                <div>Ques {serial + 1}: <div dangerouslySetInnerHTML={{ __html: question }} /> </div>
                {
                    showAns ? <FontAwesomeIcon onClick={() => setShowAns(false)} icon={faEyeSlash} />
                        : <FontAwesomeIcon onClick={() => setShowAns(true)} icon={faEye} />
                }
            </div>

            <h2 className={`bg-green-400 ${showAns ? 'block' : 'hidden'} inline py-1 px-2 rounded`}>{correctAnswer}</h2>
            {/* {showAns &&
                <h2 className='bg-green-400 inline py-1 px-2 rounded'>{correctAnswer}</h2>
            } */}

            <div className='grid grid-cols-2'>
                {
                    options.map((option, indix) => (
                        <div key={indix}>
                            <label>
                                <input className='mr-2' type="radio" value={option} name="radiovalues" onChange={handleQuizSelect} />
                                <b>{option}</b>
                            </label>
                        </div>
                    ))
                }
            </div>

            {/* <div className="radio">
                <label>
                    <input type="radio" value="option1" onChange={handleQuizSelect} />
                    Option 1
                </label>
            </div> */}
        </div>
    );
};

export default Questions;