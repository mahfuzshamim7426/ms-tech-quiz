import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistic = () => {
    const quizs = useLoaderData();
    const quizData = quizs?.data || [];
    return (

        <div>
            <div className='mr-12 md:mr-0 mt-8'>
                <h2 className='text-center my-8 text-2xl text-orange-600'>Charts for Name vs Total Questions:</h2>

                <div className='flex justify-center'>
                    <LineChart width={400} height={350} data={quizData}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                {quizData.length < 1 &&
                    <div className='text-2xl my-8 text-center '>Sorry! No Data Found!!</div>
                }
            </div>
        </div>
    );
};

export default Statistic;