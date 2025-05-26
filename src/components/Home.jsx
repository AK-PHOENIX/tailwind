import React from 'react'
import { FaBiohazard } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import Switch from '@mui/material/Switch';
import { IoIosHeart } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Profile from './Profile';
import Charts from './Charts';
import Pricing from './Pricing';
import { Logout } from '@mui/icons-material';
import { createBrowserRouter , RouterProvider , Link, Outlet } from 'react-router-dom';
const Home = (props) => {
    
  return (
    <>
        <div className="homepage flex">
            <div className="sidebar   bg-white border-[1px] border-solid border-[#e5e5e5] rounded-[8px] flex flex-col m-[8px] ">
                <div className="w-[220px]">
                <div className="sidebar-logo flex pl-[15px] cursor-pointer gap-[16px] pt-[20px] py-[16px] pb-0 mb-[2rem]">
                    <img src="ham-burger.png" alt="" className="sidebar-logo-img w-[28px]" />
                    <h2 className="sidebar-logo-text">Creative Tim</h2>
                </div>
                <div className="sidenav w-full">
                    <div className="user-profile w-fit flex items-center gap-[16px] mx-[12px] my-[1.5px] py-[8px] px-[16px]">
                        <img src="rev-img.png" alt="" className="user-img w-[30px] h-[30px] rounded-[50%] object-cover" />
                        <h6 className="user-name text-[16px] text-[#171717]">Aman</h6>
                    </div>
                    <div  className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px]">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <Link to="/" className="navs-text py-[8px] px-[16px] text-[16px] text-[#171717]">My Profile</Link>
                    </div>
                    <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px]">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className="navs-text py-[8px] px-[16px] text-[16px] text-[#171717]">Settings</p>
                    </div>
                    <Link to='/pricing' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px]">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className="navs-text py-[8px] px-[16px] text-[16px] text-[#171717]">Pricing Page</p>
                    </Link>
                    <Link to='/charts' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px]">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className="navs-text py-[8px] px-[16px] text-[16px] text-[#171717]] ">Charts</p>
                    </Link>
                    <Link to='/logout' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px]">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className="navs-text py-[8px] px-[16px] text-[16px] text-[#171717]] ">Logout</p>
                    </Link>
                </div>
                </div>
            </div>
            <div className="main w-full p-6 ">
                <nav className="main-nav flex justify-between items-center m-4 ml-0">
                    <div className="left-opts flex justify-between items-center">
                        <img src="ham-burger.png" alt="" className="ham-burger w-[34px] " />
                        <p className="routes">Profile Overview</p>
                    </div>
                    <div className="right-opts flex justify-between items-center">
                        <input type="search" name="" placeholder='Search' id="" className='search p-3 border-[#D2D6DA] border-solid border-[1px] rounded-[8px] h-11' />
                        <div className="w-[34px] py-1.5 px-2 cursor-pointer"> 
                            <CiSettings className='user-mini-logo w-[18px] h-[18px]'/>
                            </div>
                        <div className="w-[34px] py-1.5 px-2 cursor-pointer">
                            <CiSettings className='settings w-[18px] h-[18px] '/>
                            </div>
                        <div className="w-[34px] py-1.5 px-2 cursor-pointer">
                            <CiSettings className='settings w-[18px] h-[18px] '/>
                            </div>
                    </div>
                </nav>
                {/* <Profile/> */}
                <Outlet/>
                <footer>
                    <div className="footer flex justify-between px-6">
                        <p className="copyright text-[16px] text-[#737373] flex gap-1">© 2025, made with <IoIosHeart />
                        by <span className='font-semibold text-[#171717]'> Creative Tim </span> for a better web.</p>
                        <div className="footer-nav">
                            <ul className='flex '>
                                <li className='text-[16px] text-[#737373] px-4'>Creative Tim</li>
                                <li className='text-[16px] text-[#737373] px-4'>About Us</li>
                                <li className='text-[16px] text-[#737373] px-4'>Blog</li>
                                <li className='text-[16px] text-[#737373] px-4'>License</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>
  )
}

export default Home