import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Component/ErrorPage';
import Home from './Component/Home';
import Statistics from './Component/Statistics';
import Blog from './Component/Blog';
import AppliedJobs from './Component/AppliedJobs';
import Jobdetails from './Component/Jobdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('products.json')
      },
      {
        path: 'jobdetails:/jobdetailsiId',
        element:<Jobdetails></Jobdetails>,
        loader:()=>fetch('/products.json')

      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }, {
        path: 'appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      }



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
