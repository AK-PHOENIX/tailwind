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
import Setting from './components/Setting';
import SignIn from './components/SignIn';
import UserTable from './components/Tables';
import ProjectTable from './components/ProjectTable';
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
        {
          path : '/tailwind/setting',
          element : <Setting/>,
        },
        {
          path : '/tailwind/userTable',
          element : <UserTable/>,
        },
        {
          path : '/tailwind/projectTable',
          element : <ProjectTable/>,
        },
        ],
    },
    {
      path : '/tailwind/pricing',
      element : <Pricing/>,
    },
    {
      path : '/tailwind/signin',
      element : <LogOut/>,
    },
    {
      path : '/tailwind/signup',
      element : <SignIn/>,
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
