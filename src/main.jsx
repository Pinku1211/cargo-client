import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Pages/Root/Root.jsx';
import Error from './Pages/Error/Error.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import AddProduct from './Pages/Login/AddProduct';
import MyCart from './Pages/Login/cart/MyCart';
import Private from './components/Private/Private';
import { HelmetProvider } from 'react-helmet-async';
import Brand from './Pages/Brand/Brand';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element: <Private><AddProduct></AddProduct></Private>
      },
      {
        path: '/mycart',
        element: <Private><MyCart></MyCart></Private>
      },
      {
        path: '/brands/:id',
        element: <Brand></Brand>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
