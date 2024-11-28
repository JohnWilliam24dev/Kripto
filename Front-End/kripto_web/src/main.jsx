import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Error404 from './pages/404/Error404.jsx'
import Register from './pages/Register/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'

if (typeof global === 'undefined') {
  window.global = window;
}

const router =createBrowserRouter([
   {
    path:"/",
    element: <Home/>,
    errorElement: <Error404/>
   },
   {
    path:"/login",
    element: <Login/>
   },
   {
    path:"/register",
    element:<Register/>
   },
   {
    path:"/Dashboard",
    element:<Dashboard/>
   }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
