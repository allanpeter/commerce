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
import ThankYouPage from './components/ThankYou.tsx'
import Cart from './components/Cart.tsx'

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
  {
    path: "/thank-you",
    element: <ThankYouPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
)
