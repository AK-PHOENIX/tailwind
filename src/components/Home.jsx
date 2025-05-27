import React, { useState } from 'react'
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
import { createBrowserRouter , RouterProvider , Link, Outlet , useLocation} from 'react-router-dom';
const Home = () => {
    const location = useLocation();
    const [side, setSide] = useState(true);
    const [nav, setNav] = useState();
    const [setting, setSetting] = useState(false);
    const [sidenav, setSidenav] = useState(false);
    function Toggle(){
        if(sidenav == true){
            if(side == true){
                setSide(false);
            }else setSide(true);
        }
    }
    function showNav(){
        if(nav== true){
            setNav(false);
        }else setNav(true);
    }
    
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
        <div className="homepage sm:flex">
            <div className="sidebar  bg-white border-[1px] border-solid border-[#e5e5e5] rounded-[8px] flex flex-col m-[8px] " onMouseEnter={Toggle}>
                <div  className={ side ? 'sm:w-[220px]' : 'w-full' }>
                <div className="sidebar-logo max-sm:pr-[15px] flex justify-between sm:justify-baseline items-center pl-[15px] cursor-pointer gap-[16px]  pt-[10px] sm:pt-[20px] py-[12px] sm:py-[16px] pb-[10px] sm:pb-0 sm:mb-[2rem] ">
                <div className="user-profile sm:hidden w-fit flex items-center gap-[16px] my-[1.5px] py-[8px]">
                        <img src="rev-img.png" alt="" className="user-img min-w-[30px] h-[30px] rounded-[50%] object-cover" />
                        <h6 className={side ? "user-name text-[16px] text-[#171717]" : 'hidden'}>Aman</h6>
                    </div>
                    <img src="ham-burger.png" onClick={Toggle} alt="" className="sidebar-logo-img hidden sm:block w-[28px]" />
                    <div className="flex items-center sm:hidden ">
                        <div className="w-[34px] py-1.5 px-2 cursor-pointer"> 
                            <CiSettings className='user-mini-logo w-[20px] h-[20px]'/>
                        </div>
                    <img src="ham-burger.png" onClick={showNav} alt="" className="sidebar-logo-img  w-[28px]" />
                    </div>
                    <h2 className={side ? "sidebar-logo-text sm:block hidden" : 'hidden'}>Creative Tim</h2>
                </div>
                <div className="sidenav w-full items-center flex-col hidden  sm:block my-4">
                    <div className="user-profile w-fit sm:flex items-center gap-[16px] mx-[12px] my-[1.5px] py-[8px] px-[16px] hidden ">
                        <img src="rev-img.png" alt="" className="user-img min-w-[30px] h-[30px] rounded-[50%] object-cover" />
                        <h6 className={side ? "user-name text-[16px] text-[#171717]" : 'hidden'}>Aman</h6>
                    </div>
                    <div  className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <Link to="/tailwind/" className={ side ? "navs-text  px-[16px] text-[16px] text-[#171717]" : 'hidden'}>My Profile</Link>
                    </div>
                    <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={ side ? "navs-text  px-[16px] text-[16px] text-[#171717]" : 'hidden'}>Settings</p>
                    </div>
                    <Link to='/tailwind/logout' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={side ? "navs-text  px-[16px] text-[16px] text-[#171717]]" : 'hidden'}>Logout</p>
                    </Link>
                    <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={side ? "navs-text  px-[16px] text-[16px] text-[#171717]]" : 'hidden'}>Pages</p>
                    </div>
                    {/* <h2 className="username font-semibold text-[18px] pl-[20px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] text-[#171717]">Pages</h2> */}
                    <Link to='/tailwind/pricing' className="navs flex  pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={ side ? "navs-text  px-[16px] text-[16px] text-[#171717]" : 'hidden'}>Pricing Page</p>
                    </Link>
                    <Link to='/tailwind/charts' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={side ? "navs-text  px-[16px] text-[16px] text-[#171717]]" : 'hidden'}>Charts</p>
                    </Link>
                    
                </div>
                <div className={ nav ?"sidenav w-full items-center flex-col  max-sm:flex sm:hidden my-4" : 'hidden'}>
                    <div className="user-profile w-fit sm:flex items-center gap-[16px] mx-[12px] my-[1.5px] py-[8px] px-[16px] hidden ">
                        <img src="rev-img.png" alt="" className="user-img min-w-[30px] h-[30px] rounded-[50%] object-cover" />
                        <h6 className={side ? "user-name text-[16px] text-[#171717]" : 'hidden'}>Aman</h6>
                    </div>
                    <div  className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <Link to="/tailwind/" className={ side ? "navs-text  px-[16px] text-[16px] text-[#171717]" : 'hidden'}>My Profile</Link>
                    </div>
                    <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={ side ? "navs-text  px-[16px] text-[16px] text-[#171717]" : 'hidden'}>Settings</p>
                    </div>
                    <Link to='/tailwind/logout' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={side ? "navs-text  px-[16px] text-[16px] text-[#171717]]" : 'hidden'}>Logout</p>
                    </Link>
                    <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={side ? "navs-text  px-[16px] text-[16px] text-[#171717]]" : 'hidden'}>Pages</p>
                    </div>
                    {/* <h2 className="username font-semibold text-[18px] pl-[20px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] text-[#171717]">Pages</h2> */}
                    <Link to='/tailwind/pricing' className="navs flex  pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={ side ? "navs-text  px-[16px] text-[16px] text-[#171717]" : 'hidden'}>Pricing Page</p>
                    </Link>
                    <Link to='/tailwind/charts' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                        <div className="to-img w-[20px]"><FaBiohazard /></div>
                        <p className={side ? "navs-text  px-[16px] text-[16px] text-[#171717]]" : 'hidden'}>Charts</p>
                    </Link>
                    
                </div>
                </div>
            </div>
            <div className="main w-full p-3 sm:p-6 " onMouseEnter={Toggle}>
                <nav className="main-nav flex justify-between items-center py-1 mb-4 ml-0">
                    <div className="left-opts flex justify-between items-center">
                        <img src="ham-burger.png" alt="" className="ham-burger w-[34px] hidden sm:block" />
                        <p className="routes">Profile Overview</p>
                    </div>
                    <div className="right-opts flex justify-between items-center">
                        <input type="search" name="" placeholder='Search' id="" className='search p-3 border-[#D2D6DA] border-solid border-[1px] rounded-[8px] w-[180px] h-8 sm:h-11' />
                        <div className="w-[34px] py-1.5 px-2 cursor-pointer hidden sm:block"> 
                            <CiSettings className='user-mini-logo w-[20px] h-[20px]'/>
                            </div>
                        <div className="w-[34px] py-1.5 px-2 cursor-pointer">
                            <CiSettings className='settings w-[20px] h-[20px]' onClick={()=>{setSetting(true)}}/>
                            </div>
                            <div className={ setting ?"setting p-8 absolute top-0 right-0 w-[360px] min-h-100vh z-30 bg-white custom-shaow" : 'hidden'}>
                                <div className="dash-setting-head flex items-baseline justify-between">
                                <div className="config">
                                    <h2 className="setting-head font-bold text-[20px]">Dashboard Config</h2>
                                    <p className="setting-p text-[#737373]">See our dashboard options</p>
                                </div>
                                <div className="cross font-bold cursor-pointer" onClick={()=>setSetting(false)}>X</div>
                                </div>
                                <div className="colors my-6">
                                    <h2 className="sidenav-colors  font-bold text-4 mb-2">Sidenav colors</h2>
                                    <div className="colorss flex gap-3">
                                        <div className="colr cursor-pointer w-[22px] bg-black h-[22px] rounded-[50%] "></div>
                                        <div className="colr cursor-pointer w-[22px] bg-[blue] h-[22px] rounded-[50%] "></div>
                                        <div className="colr cursor-pointer w-[22px] bg-[red] h-[22px] rounded-[50%] "></div>
                                        <div className="colr cursor-pointer w-[22px] bg-[green] h-[22px] rounded-[50%] "></div>
                                        <div className="colr cursor-pointer w-[22px] bg-[yellow] h-[22px] rounded-[50%] "></div>
                                        <div className="colr cursor-pointer w-[22px] bg-[pink] h-[22px] rounded-[50%] "></div>
                                    </div>
                                </div>
                                <ul className="options flex flex-col gap-6">
                                    <li className="opts flex items-center justify-between font-bold text-4"><span>Navbar fixed</span> <Switch {...label}  color="default" /></li>
                                    <li className="opts flex items-center justify-between font-bold text-4"><span>Sidenav Mini</span> <Switch {...label} color="default" onChange={()=>{sidenav ? setSidenav(false) : setSidenav(true)}}/></li>
                                    <li className="opts flex items-center justify-between font-bold text-4"><span>Light/Dark</span> <Switch {...label}  color="default" /></li>
                                </ul>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-gradient-to-br from-[#42424a] to-[#191919]  px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                        Buy Now
                                    </a>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-gradient-to-br from-[#42424a] to-[#191919]  px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                        Buy Just Now
                                    </a>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-[white] border-[1px] border-[#343439] px-3.5 py-2.5 text-sm font-medium text-black shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                        Buy Just Now
                                    </a>
                            </div>
                        <div className="w-[34px] py-1.5 px-2 cursor-pointer hidden sm:block">
                            <CiSettings className='settings w-[20px] h-[20px]'/>
                            </div>
                    </div>
                </nav>
                {/* <Profile/> */}
                <Outlet/>
                <footer>
                    <div className="footer flex flex-col sm:flex-row sm:justify-between sm:px-6 sm:gap-auto gap-2">
                        <p className="copyright text-[14px] justify-center sm:justify-start sm:text-[16px] text-[#737373] flex  sm:flex-row gap-1">© 2025, made with <IoIosHeart />
                        by <span className='font-semibold text-[#171717]'> Creative Tim </span> for a better web.</p>
                        <div className="footer-nav">
                            <ul className='flex justify-center sm:justify-start'>
                                <li className='text-[14px] sm:text-[16px] text-[#737373] px-4'>Creative Tim</li>
                                <li className='text-[14px] sm:text-[16px] text-[#737373] px-4'>About Us</li>
                                <li className='text-[14px] sm:text-[16px] text-[#737373] px-4'>Blog</li>
                                <li className='text-[14px] sm:text-[16px] text-[#737373] px-4'>License</li>
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