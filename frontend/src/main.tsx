import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './components/Home.tsx'
import Plans from './components/Plans.tsx'
import UserRegister from './components/UserRegister.tsx'
import './index.css'
import Layout from './components/Layouts.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/register",
    element: <UserRegister />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
)
