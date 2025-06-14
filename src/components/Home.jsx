import React, { useEffect, useRef, useState } from 'react'
import { FaBiohazard } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import Switch from '@mui/material/Switch';
import { IoIosHeart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';

import { AccountCircle, Logout, Notifications ,Menu, MenuOpen} from '@mui/icons-material';
import { createBrowserRouter, RouterProvider, Link, Outlet, useLocation } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
const Home = () => {
    const [darkMode, setDarkMode] = useState(true);
    const location = useLocation();
    const [side, setSide] = useState(true);
    const [sidenav, setSidenav] = useState(false);
    const [nav, setNav] = useState();
    const [setting, setSetting] = useState(false);
    const [stick , setStick] = useState(false);
    const ref = useRef();
    const notify = () => toast.success('🦄 Login Succesfull', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
     }); 
     const welcome = () => {
             toast(WithAvatar, {
               closeButton: false,
               autoClose:5000,
               position: "top-center",
               theme :'dark',
               className:
                 'shadow-lg overflow-visible scale-100 ring-1 ring-black/5 rounded-xl flex items-center gap-6 bg-slate-800 highlight-white/5',
             });
         }
         function WithAvatar() {
             let dashData = JSON.parse(localStorage.getItem('dashData')) || [];
             // let dashData = fdata.filter(item=>item.email === data.email);
             // console.log([...dashData,{username}]);
             let userName = dashData[0].username;
             let userImg = dashData[0].img;
             return (
             <div className="welcome">
                 {/* <div className="welcome-logo">F</div> */}
                 <h1 className="welcome-head">Welcome</h1>
                 <div className="user-welcome">
                     <img src={userImg} alt="" className="wel-img" />
                     <p className="welcome-email">{userName}</p>
                 </div>
             </div>
             );
         }  
    //  useEffect(() => {
    //      notify();
    //      welcome();
    //  }, []);
    const handleDark = () => {
        darkMode ? setDarkMode(false) : setDarkMode(true);
        console.log(darkMode);
        darkMode ? localStorage.setItem('theme' ,true) : localStorage.setItem('theme' ,false);
    }
    function miniNav(){
        side ? setSide(false) : setSide(true);
        if(sidenav == false){
            setSidenav(true);
            setSide(false);
        }else setSidenav(false);
    }
    function showNav() {
        if (nav == true) {
            setNav(false);
        } else setNav(true);
    }
    const mouseIn = ()=> {
        sidenav ? setSide(false) : setSide(true);
        side ? setSide(false): setSide(true);
    }
    const mouseOut = ()=>{
        side ? setSide(false) : setSidenav(false);
    }
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let theme = localStorage.getItem('theme') || false;
        if (theme === 'true') {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const data = JSON.parse(localStorage.getItem('dashData')) || [];
    return (
        <>
            <div className="homepage bg-[#F5F5F5] dark:bg-[#171717] sm:flex min-h-[100dvh]">
                <div className="sidebar h-min bg-white dark:bg-[#1D1D1D] border-[1px] border-solid dark:border-[#262626] border-[#e5e5e5] rounded-[8px] flex flex-col m-[8px] " onMouseEnter={sidenav ? mouseIn : undefined} onMouseLeave={sidenav ? mouseOut : undefined}>
                    <div className={side ? 'sm:w-[220px]' : 'w-full'}>
                        <div className="sidebar-logo max-sm:pr-[15px] flex justify-between sm:justify-start items-center pl-[15px] cursor-pointer gap-[16px]  pt-[10px] sm:pt-[20px] py-[12px] sm:py-[16px] pb-[10px] sm:pb-0 sm:mb-[2rem] ">
                            <div className="user-profile sm:hidden w-fit flex items-center gap-[16px] my-[1.5px] py-[2px]">
                                <img src="rev-img.png" alt="" className="user-img min-w-[40px] h-[40px] rounded-[50%] object-cover" />
                                <h6 className={side ? "user-name text-[18px] dark:text-white text-[#171717]" : 'hidden'}>
                                    {(data.length == 0) ? "John" : data[0].username}</h6>
                            </div>
                            <img src="ham-burger.png"  alt="" className="sidebar-logo-img dark:invert hidden sm:block w-[28px]" />
                            <div className="flex items-center sm:hidden ">
                                <div className="w-[34px] py-1.5 px-2 cursor-pointer dark:text-white">
                                    <Notifications className='user-mini-logo w-[20px] h-[20px] dark:text-white' />
                                </div>
                                <img src="ham-burger.png" onClick={showNav} alt="" className="sidebar-logo-img  w-[40px]" />
                            </div>
                            <h2 className={side ? "sidebar-logo-text sm:block dark:text-white hidden" : 'hidden'}>Creative Tim</h2>
                        </div>
                        <div className="sidenav w-full items-center flex-col hidden  sm:block my-4">
                            <div className="user-profile w-fit sm:flex items-center gap-[16px] mx-[12px] my-[1.5px] py-[8px] px-[16px] hidden ">
                                <img src="rev-img.png" alt="" className="user-img min-w-[30px] h-[30px] rounded-[50%] object-cover" />
                                <h6 className={side ? "user-name text-[18px] text-[#171717] dark:text-white" : 'hidden'}>{(data.length == 0) ? "John" : data[0].username}</h6>
                            </div>
                            <Tooltip title={side ? "" : "My profile"} placement="right-start">
                            <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                    <div className="to-img w-[20px] dark:text-white">
                                    {/* <FaBiohazard /> */}
                                    M
                                    </div>
                                <Link to="/tailwind/" className={side ? "navs-text  px-[16px] text-[18px] text-[#171717] dark:text-white" : 'hidden'}>My Profile</Link>
                            </div>
                            </Tooltip>
                                <Tooltip title={side ? "" : "Settings"} placement="right-start">
                            <Link to='/tailwind/setting' className="navs flex dark:text-white pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">
                                    {/* <FaBiohazard /> */}
                                    S
                                    </div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]" : 'hidden'}>Settings</p>
                            </Link>
                                </Tooltip>                                   
                            <Tooltip title={side ? "" : "LogOut"} placement="right-start">
                            <Link to='/tailwind/signin' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">
                                    {/* <FaBiohazard /> */}
                                    L
                                    </div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>Logout</p>
                            </Link>
                                </Tooltip>
                            <div className="navs flex pl-[15px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <p className={side ? "navs-text  px-[16px] text-[18px] dark:text-white dark:text-white text-[#171717]]" : 'px-0 text-[18px] dark:text-white dark:text-white text-[#171717]]'}>Pages</p>
                                {/* <p className="navs-text  px-[16px] text-[18px] dark:text-white dark:text-white text-[#171717]]">Pages</p> */}
                            </div>
                            {/* <h2 className="username font-semibold text-[18px] pl-[20px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] text-[#171717]">Pages</h2> */}
                            <Tooltip title={side ? "" : "Pricings"} placement="right-start">
                            <Link to='/tailwind/pricing' className="navs flex  pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">
                                    {/* <FaBiohazard /> */}
                                    P
                                    </div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]" : 'hidden'}>Pricing Page</p>
                            </Link>
                            </Tooltip>
                            <Tooltip title={side ? "" : "Charts"} placement="right-start">
                            <Link to='/tailwind/charts' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">
                                    {/* <FaBiohazard /> */}
                                    C
                                    </div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>Charts</p>
                            </Link>
                                </Tooltip>
                            <Tooltip title="UserTable" placement="right-start">
                            <Link to='/tailwind/userTable' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">
                                    {/* <FaBiohazard /> */}
                                    UT
                                    </div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>UserTable</p>
                            </Link>
                            </Tooltip>
                            <Tooltip title="ProjectTable" placement="right-start">
                            <Link to='/tailwind/projectTable' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer dark:hover:bg-[#ffffff33] hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">
                                    {/* <FaBiohazard /> */}
                                    PT
                                    </div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>ProjectTable</p>
                            </Link>
                            </Tooltip>

                        </div>
                        <div className={nav ? "sidenav w-full items-center flex-col  max-sm:flex sm:hidden my-4" : 'hidden'}>
                            <div className="user-profile w-fit sm:flex items-center gap-[16px] mx-[12px] my-[1.5px] py-[8px] px-[16px] hidden ">
                                <img src="rev-img.png" alt="" className="user-img min-w-[30px] h-[30px] rounded-[50%] object-cover" />
                                <h6 className={side ? "user-name text-[18px] dark:text-white text-[#171717]" : 'hidden'}>
                                    {data.username}</h6>
                            </div>
                            <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">M</div>
                                <Link to="/tailwind/" className={side ? "navs-text dark:text-white  px-[16px] text-[18px] text-[#171717]" : 'hidden'}>My Profile</Link>
                            </div>
                            <Link to='/tailwind/setting' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">S</div>
                                <p className={side ? "navs-text px-[16px] dark:text-white text-[18px] text-[#171717]" : 'hidden'}>Settings</p>
                            </Link>
                            <Link to='/tailwind/logout' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">L</div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>Logout</p>
                            </Link>
                            <div className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white"><FaBiohazard /></div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>Pages</p>
                            </div>
                            {/* <h2 className="username font-semibold text-[18px] pl-[20px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] text-[#171717]">Pages</h2> */}
                            <Link to='/tailwind/pricing' className="navs flex  pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">P</div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]" : 'hidden'}>Pricing Page</p>
                            </Link>
                            <Link to='/tailwind/charts' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">C</div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>Charts</p>
                            </Link>
                            <Link to='/tailwind/charts' className="navs flex pl-[30px] pr-[12px] my-[2.4px] mx-[3px] mt-[4.5px] w-fill items-center cursor-pointer hover:bg-[#ededed] rounded-[8px] py-[8px] h-[40px] w-[200px] sm:w-full">
                                <div className="to-img w-[20px] dark:text-white">T</div>
                                <p className={side ? "navs-text  px-[16px] dark:text-white text-[18px] text-[#171717]]" : 'hidden'}>Tables</p>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="main w-full p-3 sm:p-6 relative" >
                    <nav className={`main-nav flex justify-between ${ stick && isScrolled ? 'bg-[#fffffff1] dark:bg-[#1D1D1D] shadow-md p-2 z-30 sticky top-2' : 'bg-transparent py-1'} rounded-[8px] items-center  mb-4 ml-0 `}>
                        <div className="left-opts flex justify-between items-center">
                            {/* <img src="ham-burger.png" alt=""  /> */}
                            { side ? <MenuOpen className="ham-burger dark:text-white w-[34px] mr-[12px] hidden sm:block" onClick={()=>setSide(false)}/> :<Menu className="ham-burger w-[34px] mr-[12px] dark:text-white hidden sm:block" onClick={()=>setSide(true)}/>
                            }
                            <p className="routes dark:text-white font-bold">Profile Overview</p>
                        </div>
                        <div className="right-opts flex justify-between items-center">
                            <input type="search" name="" placeholder='Search' id="" className='search dark:text-[#ffffffcc] p-3 border-[#D2D6DA] border-solid border-[1px] rounded-[8px] w-[180px] sm:w-full h-8 sm:h-11' />
                            <div className="w-[34px] py-1.5 px-2 cursor-pointer hidden sm:block dark:text-white">
                                <AccountCircle className='user-mini-logo w-[20px] h-[20px]' />
                            </div>
                            <div className="w-[34px] py-1.5 px-2 cursor-pointer dark:text-white">
                                <CiSettings className='settings w-[24px] h-[24px]' onClick={() => { setSetting(true) }} />
                            </div>
                            <div className={setting ? "setting p-8 absolute top-0 right-0 w-[360px] min-h-100vh z-30 bg-white custom-shaow dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] " : 'hidden'}>
                                <div className="dash-setting-head flex items-baseline justify-between">
                                    <div className="config">
                                        <h2 className="setting-head font-bold text-[20px] dark:text-white">Dashboard Config</h2>
                                        <p className="setting-p text-[#737373] dark:text-[#ffffffcc]">See our dashboard options</p>
                                    </div>
                                    <div className="cross font-bold cursor-pointer dark:text-white" onClick={() => setSetting(false)}>X</div>
                                </div>
                                <div className="colors my-6">
                                    <h2 className="sidenav-colors  font-bold text-4 mb-2 dark:text-white">Sidenav colors</h2>
                                    <div className="colorss flex gap-3">
                                        <div className="pink cursor-pointer h-[24px] w-[24px] rounded-full bg-gradient-to-br from-[#ec407a] to-[#d81b60] mr-2"></div>
                                        <div className="pink cursor-pointer h-[24px] w-[24px] rounded-full bg-gradient-to-br from-[#42424a] to-[#191919] mr-2"></div>
                                        <div className="pink cursor-pointer h-[24px] w-[24px] rounded-full bg-gradient-to-br from-[#42424a] to-[#191919] mr-2"></div>
                                        <div className="pink cursor-pointer h-[24px] w-[24px] rounded-full bg-gradient-to-br from-[#66bb6a] to-[#43a047] mr-2"></div>
                                        <div className="pink cursor-pointer h-[24px] w-[24px] rounded-full bg-gradient-to-br from-[#ffa726] to-[#fb8c00] mr-2"></div>
                                        <div className="pink cursor-pointer h-[24px] w-[24px] rounded-full bg-gradient-to-br from-[#ef5350] to-[#e53935] mr-2"></div>
                                    </div>
                                </div>
                                <ul className="options flex flex-col gap-6">
                                    <li className="opts flex items-center justify-between font-bold text-4 dark:text-white "><span>Navbar Sticky</span> 
                                    <Switch {...label} color="default" onChange={()=> setStick(prev => !prev)}/></li>
                                    <li className="opts hidden  sm:flex items-center justify-between font-bold text-4 dark:text-white"><span>Sidenav Mini</span> <Switch ref={ref} {...label} color="default" onChange={miniNav} /></li>
                                    <li className="opts flex items-center justify-between font-bold text-4 dark:text-white"><span>Light/Dark</span> 
                                    <Switch {...label} color="default" onChange={handleDark}/></li>
                                </ul>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-gradient-to-br from-[#42424a] to-[#191919]  px-3.5 py-2.5 text-sm font-medium text-white dark:text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                    Buy Now
                                </a>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-gradient-to-br from-[#42424a] to-[#191919]  px-3.5 py-2.5 text-sm font-medium text-white dark:text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                    Buy Just Now
                                </a>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-[white] border-[1px] border-[#343439] px-3.5 py-2.5 text-sm font-medium text-black shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                    Buy Just Now
                                </a>
                            </div>
                            <div className="w-[34px] py-1.5 px-2 dark:text-white cursor-pointer hidden sm:block relative">
                                <Notifications className='user-mini-logo w-[20px] h-[20px]' />
                                <span className='absolute top-0 right-0 p-[2px] px-[3px] text-white dark:text-black bg-[red] text-[10px] rounded-full'>69</span>
                            </div>
                        </div>
                    </nav>
                    {/* <Profile/> */}
                    <Outlet />
                    <footer>
                        <div className="footer flex flex-col sm:flex-row sm:justify-between sm:px-6 sm:gap-auto gap-2">
                            <p className="copyright text-[12px] justify-center sm:justify-start sm:text-[16px] dark:text-[#ffffffcc] text-[#737373] flex  sm:flex-row gap-1">© 2025, made with <IoIosHeart />
                                by <span className='font-semibold dark:text-white text-[#171717]'> Creative Tim </span> for a better web.</p>
                            <div className="footer-nav">
                                <ul className='flex justify-center sm:justify-start'>
                                    <li className='text-[14px] sm:text-[16px] dark:text-[#ffffffcc] text-[#737373] px-4'>Creative Tim</li>
                                    <li className='text-[14px] sm:text-[16px] dark:text-[#ffffffcc] text-[#737373] px-4'>About Us</li>
                                    <li className='text-[14px] sm:text-[16px] dark:text-[#ffffffcc] text-[#737373] px-4'>Blog</li>
                                    <li className='text-[14px] sm:text-[16px] dark:text-[#ffffffcc] text-[#737373] px-4'>License</li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        </>
    )
}

export default Home