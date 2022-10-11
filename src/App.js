import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import QuizStart from './components/QuizStart/QuizStart';
import Statistic from './components/Statistic/Statistic';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistic',

          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            // console.log(params.quizId);
            return await fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)

          },
          element: <QuizStart></QuizStart>
        },

        { path: '*', element: <div className='text-center text-4xl font-bold mt-12'>404, This Page is not Available</div> }

      ]
    },

  ])
  return (
    <div className="container mx-auto">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
