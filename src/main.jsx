import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ToastContainer } from 'react-toastify'
import Navbar from './components/Navber'
import {  Outlet } from "react-router";
import { RouterProvider } from "react-router/dom"
import { router } from './router/Router'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ToastContainer />
   <RouterProvider router={router} />,
  </StrictMode>,
)
