import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SigninPage from './auth/sign-in/index.jsx'
import Home from './home/index.jsx' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
         path: '/',
         element:<Home />
      }
    ]
  },
  {
    path: 'auth/sign-in',
    element: <SigninPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
