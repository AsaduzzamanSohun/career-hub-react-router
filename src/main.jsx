import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Jobs from './components/home_components/Jobs/Jobs.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: "/job/:id",
        loader: () => fetch("../public/jobs.json"),
        element: <JobDetails></JobDetails>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
