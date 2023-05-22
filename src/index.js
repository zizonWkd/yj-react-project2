import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Profile from './Profile';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);
