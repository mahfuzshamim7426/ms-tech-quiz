import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizs = useLoaderData();
    const quizData = quizs?.data || [];
    // console.log(quizs)
    return (
        <div>
            <Header></Header>
            <div>
                <h2 className='my-8 text-center text-2xl font-bold text-orange-600'>Check Your Ability, Attend the text!!</h2>
                <div className='grid grid-cols-1 gap-12  md:grid-cols-2 mx-auto'>
                    {
                        quizData.length > 1 &&
                        quizData.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
                {quizData.length < 1 &&
                    <div className='text-2xl my-8 text-center '>Sorry! No Data Found!!</div>
                }
            </div>
        </div>
    );
};

export default Home;