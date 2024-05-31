import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Ecom from './routes/Ecom.jsx'
import Posts from './routes/Posts.jsx'
import Vdi from './routes/Vdi.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/ecom',
    element: <Ecom />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/vdi',
    element: <Vdi />,
  },
  {
    path: '/',
    element: <App />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
