import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import { NotFound } from "./pages/NotFound/NotFound";
import { Courses } from './pages/Courses/Courses';
import { Course } from './components/Course/Course';
import { Layout } from './components/Layout/Layout';
import { Login } from './pages/Login/Login';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'courses',
        children: [
          {
            path: '',
            element: <Courses />
          },
          {
            path: 'course/:email',
            element: <Course />
          }
        ]
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
