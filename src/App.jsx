import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Pricing from './components/Pricing';
import ApexChart from './components/ApexChart';
import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom';
import Profile from './components/Profile';
import Charts from './components/Charts';
import LogOut from './components/Logout';
function App() {
  const router = createBrowserRouter([
    {
        path: '/tailwind/',
        element: <Home />,
        children: [
        {
            path: '/tailwind/',
            element: <Profile />,
        },
        {
            path: '/tailwind/charts',
            element: <Charts />,
        },
        ],
    },
    {
      path : '/pricing',
      element : <Pricing/>,
    },
    {
      path : '/logout',
      element : <LogOut/>,
    },
]);
  return (
    <>
      {/* <Home/> */}
      <RouterProvider router={router} />
      {/* <Pricing/> */}
      {/* <ApexChart/> */}
    </>
  )
}

export default App
