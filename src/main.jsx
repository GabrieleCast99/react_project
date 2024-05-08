import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import { NotFound } from "./pages/NotFound/NotFound";
import { Courses } from './pages/Courses/Courses';
import { Course } from './components/Course/Course';
import { Layout } from './components/Layout/Layout';
import { Login } from './pages/Login2/Login';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { AuthContextProvider } from './contexts/AuthContext/AuthContextProvider';
import { Contacts } from './pages/Contacts/Contacts';
import { RegistrationForm } from './pages/ComponentiRest/Registration/RegistrationForm';
import { Dashboard } from './pages/DashBoard/Dashboard';
import { ProtectedRout } from './components/ProtectedRoute';
 

const router = createBrowserRouter([
  {
    element: (
    <AuthContextProvider>
      < Layout />
    </AuthContextProvider>
    ),
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
      },
      {
        path: '/registration',
        element: <RegistrationForm />

      },
      {
        path: '/dashboard',
        element: <Dashboard />

      },
      {
        path: 'Contacts',
        element: <Contacts />
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
