import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistic = () => {
    const quizs = useLoaderData();
    const quizData = quizs?.data || [];
    return (

        <div>
            <h2>This is Statistic page</h2>
            <div>
                <h2 className='my-8 text-center text-2xl font-bold text-orange-600'>Check Your Ability, Attend the text!!</h2>
                <div className='grid grid-cols-1 gap-12  md:grid-cols-2 mx-auto'>
                    <LineChart className='flex ' width={500} height={400} data={quizData}>
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