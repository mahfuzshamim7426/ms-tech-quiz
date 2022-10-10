import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Statistic from './components/Statistic/Statistic';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    },
    { path: '*', element: <div className='text-center text-4xl font-bold mt-12'>This Page is not Available</div> }
  ])
  return (
    <div className="mx-28">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
