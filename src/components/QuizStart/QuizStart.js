import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizStart = () => {
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
            {
                questions.map((singleQuestion, index) => <Questions
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                    serial={index}
                >
                </Questions>)
            }
        </div>
    );
};

export default QuizStart;