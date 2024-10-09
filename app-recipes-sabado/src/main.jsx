import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Vegetarian from './pages/recipes/Vegetarian'
import NonVegetarian from './pages/recipes/NonVegetarian'
let router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard/',
    element: <Dashboard />,
    children: [
      {
        path: 'vegetarian',
        element: <Vegetarian />
      },
      {
        path: 'non-vegetarian',
        element: <NonVegetarian />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
