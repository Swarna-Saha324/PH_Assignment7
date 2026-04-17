import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer, Bounce } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import { RouterProvider } from "react-router"
import { router } from './router/Router'
import { FriendProvider } from './context/FriendContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <FriendProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
)
