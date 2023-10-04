import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './comoponents/Root/Root';
import Home from './comoponents/Home/Home';
import LogIn from './comoponents/Login/LogIn';
import SignUp from './comoponents/SignUp/SignUp';
import About from './comoponents/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
       },
       {
        path:"/login",
        element: <LogIn></LogIn>
       },
       {
        path:"/signup",
        element:<SignUp></SignUp>
       },
       {
        path:"/about",
        element:<About></About>
       }
      ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
