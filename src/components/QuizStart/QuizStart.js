import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizStart = () => {
    const [countNumber, setCountNumber] = useState(0);
    const quiz = useLoaderData();
    const startQuiz = quiz.data;
    const questions = startQuiz.questions;
    console.log('questions:', questions)
    const { name, total } = startQuiz;
    console.log(quiz)
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-16 text-blue-600'>Quiz of {name}</h2>
            <h2 className='text-center mt-2 text-xl text-fuchsia-700'>Total Questions: {total}</h2>
            <span className='text-2xl font-bold mt-2 flex justify-center md:justify-end'>Total Marks: {countNumber}</span>
            {
                questions.map((singleQuestion, index) => <Questions
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                    serial={index}
                    countNumber={countNumber}
                    setCountNumber={setCountNumber}
                >
                </Questions>)
            }
        </div>
    );
};

export default QuizStart;