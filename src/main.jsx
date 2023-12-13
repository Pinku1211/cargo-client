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
import Brand from './Pages/Brand/Brands';
import Brands from './Pages/Brand/Brands';
import Details from './Pages/Details/Details';
import Update from './Pages/Update/Update';
import Message from './components/Chat/Message.jsx';

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
        element: <Private><MyCart></MyCart></Private>,
        loader: () => fetch('https://cargo-server-two.vercel.app/cart')
      },
      {
        path: '/brands/:brand',
        element: <Brands></Brands>,
        loader: ({params}) => fetch(`https://cargo-server-two.vercel.app/products/${params.brand}`)
      },
      {
        path: '/details/:brand/:id',
        element: <Private><Details></Details></Private>,
        loader: ({params}) => fetch(`https://cargo-server-two.vercel.app/products/${params.brand}/${params.id}`)
      },
      {
        path: '/update/:brand/:id',
        element: <Private><Update></Update></Private>,
        loader: ({params}) => fetch(`https://cargo-server-two.vercel.app/products/${params.brand}/${params.id}`)
      }, 
      {
        path: '/message',
        element: <Private><Message></Message></Private>
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
