import React from 'react'
import { FaBiohazard } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";
import Switch from '@mui/material/Switch';
import { IoIosHeart } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {Banner} from './Images/index.js';
import Carousel from './Carousel';
import { Edit, Email, Home, Settings } from '@mui/icons-material';
const Profile = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const fdata = JSON.parse(localStorage.getItem('fdata')) || [];
    const dashData = JSON.parse(localStorage.getItem('dashData'));
    let userId = dashData[0].id;
    const data = fdata.find((item)=> item.id === userId);

  return (
    <>
        <div className="banner-img bg-[#42424a99] bg-blend-multiply min-h-[150px] sm:min-h-[300px] rounded-[16px]  bg-center " style={{ backgroundImage: `url(${Banner})` }}>
                </div>
                <div className="profile-card mx-4 sm:mx-6 mt-[-64px] z-10 p-4 bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] mb-10 ">
                    <div className="profile-bar flex flex-col gap-5 sm:gap-auto sm:flex-row justify-between sm:items-center mb-[20px] sm:mb-[40px]">
                        <div className="profile-user flex gap-6 items-center">
                            <img src="rev-img.png" alt="" className="profile-image w-[74px] h-[74px] rounded-[50%] object-cover" />
                            <div className="user-info">
                            <h2 className="username font-semibold text-[20px] dark:text-white text-[#171717]">{(data.username) ? data.username : "John"}</h2>
                            <p className="user-desg text-[16px] sm:text-[18px] dark:text-[#ffffffcc] text-[#737373]">CEO /Co-Founder of Dev</p>
                            </div>
                        </div>
                        <div className="nav-btns flex h-10 dark:bg-[#171717] bg-[#F5F5F5] rounded-[8px] p-1">
                            <a href="" className="profile-navs p-1 flex items-center justify-center w-[120px] rounded-[8px] hover:bg-white dark:hover:bg-[#1D1D1D] dark:text-white focus:bg-white ">
                                <Home className='p-navs-img h-[20px] w-[20px] mr-2'/>
                                <p className="p-navs-dest ">App</p>
                            </a>
                            <a href="" className="profile-navs p-1 flex items-center justify-center w-[120px] rounded-[8px] hover:bg-white dark:hover:bg-[#1D1D1D] dark:text-white ">
                                <Email className='p-navs-img h-[20px] w-[20px] mr-2'/> 
                                <p className="p-navs-dest">Message</p>
                            </a>
                            <a href="" className="profile-navs p-1 flex items-center justify-center w-[120px] rounded-[8px] hover:bg-white dark:hover:bg-[#1D1D1D] dark:text-white ">
                                <Settings className='p-navs-img h-[20px] w-[20px] mr-2'/>
                                <p className="p-navs-dest">Settings</p>
                            </a>
                        </div>
                    </div>
                    <div className="profile-sections grid grid-cols-1 sm:grid-cols-3 sm:mb-6">
                        <div className="platform-settings">
                            <h2 className="platform-heading p-2 sm:p-4 text-[18px] dark:text-white text-[#171717] font-semibold">Platform Settings</h2>
                            <div className="  pt-[8px] px-4 text-[18px] max-xl:p-2">
                            <h4 className="account-head text-[14px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373]">ACCOUNT</h4>
                            <ul className='px-0 sm:px-4 py-2 '>
                                <li className='flex items-center text-[16px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373] mb-1'>
                                <Switch {...label} defaultChecked color="default" />
                                    <p>Email me when someone follows me</p>
                                </li>
                                <li className='flex items-center text-[16px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373] mb-1'>
                                <Switch {...label} color="default" />
                                    <p>Email me when someone answers on my post</p>
                                </li>
                                <li className='flex items-center text-[16px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373] mb-1'>
                                <Switch {...label} defaultChecked color="default" />
                                    <p>Email me when someone mentions me</p>
                                </li>
                            </ul>
                            </div>
                            <div className="mt-0 sm:mt-6  pt-[8px] px-4 text-[18px]">
                            <h4 className="account-head text-[14px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373]">APPLICATION</h4>
                            <ul className='px-0 sm:px-4 py-2 '>
                                <li className='flex items-center text-[16px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373] mb-1'>
                                <Switch {...label} defaultChecked color="default" />
                                    <p>
                                    New launches and projects</p>
                                </li>
                                <li className='flex items-center text-[16px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373] mb-1'>
                                <Switch {...label} color="default" />
                                    <p>Monthly product updates</p>
                                </li>
                                <li className='flex items-center text-[16px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373] mb-1'>
                                <Switch {...label} defaultChecked color="default" />
                                    <p>
                                    Subscribe to newsletter</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="Profile-information">
                            <div className="flex items-center justify-between p-4 max-xl:p-2">
                            <h2 className="info-heading text-[18px] dark:text-white text-[#171717] font-semibold ">Profile Information</h2>
                            <div className="dark:text-white"><Edit /></div>
                            </div>
                            <div className="info-content p-4 ">
                                <p className="info-p mb-8 dark:text-[#ffffffcc]  text-[#737373] text-[18px] text-center sm:text-start">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                                <ul>
                                    <li className=' dark:text-[#ffffffcc] text-[#737373] text-[16px] flex py-2 pr-4 gap-3'><span className='font-semibold dark:text-white  text-[#171717]'>Full Name: </span>{data.username ? data.username : 'John'}</li>
                                    <li className=' dark:text-[#ffffffcc] text-[#737373] text-[16px] flex py-2 pr-4 gap-3'><span className='font-semibold dark:text-white  text-[#171717]'>Mobile: </span>{data.ph ? data.ph : ''}</li>
                                    <li className=' dark:text-[#ffffffcc] text-[#737373] text-[16px] flex py-2 pr-4 gap-3'><span className='font-semibold dark:text-white  text-[#171717]'>Email: </span>{data.email ? data.email : ''}</li>
                                    <li className=' dark:text-[#ffffffcc] text-[#737373] text-[16px] flex py-2 pr-4 gap-3'><span className='font-semibold dark:text-white  text-[#171717]'>Location: </span>{data.add ? data.add : ''}</li>
                                    <li className=' dark:text-[#ffffffcc] text-[#737373] text-[16px] flex py-2 pr-4 gap-3'><span className='font-semibold dark:text-white  text-[#171717]'>Social: </span> <SlSocialInstagram /><SlSocialInstagram /><SlSocialInstagram /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Users">
                        <h2 className="info-heading p-2 sm:p-4 text-[18px] dark:text-white text-[#171717] font-semibold ">Users</h2>
                        <div className="chats p-2 sm:p-4">
                            {(fdata.length === 0) ? <div className="empty">No users</div> 
                            : fdata.map((item,index)=>{
                                return (
                                    <div className="chat flex items-center justify-between py-2 mb-2" key={index}>
                                <div className="chat-name  flex justify-between items-center gap-4">
                                <img src="rev-img.png" alt="" className="chat-img w-[48px] h-[48px] rounded-[50%] object-cover"/>
                                <div className="">
                                <h2 className="chat-username font-semibold text-[18px] dark:text-white text-[#171717]">{item.username}</h2>
                                <p className="chat-user-desg text-[14px] sm:text-[18px] dark:text-[#ffffffcc]  text-[#737373]">{item.email}</p>
                                </div>
                                </div>
                                <p className="reply text-[12px] sm:text-[18px] dark:text-white">msg</p>
                            </div>
                                )
                            })}
                        </div>
                        </div>
                    </div>
                    <div className="projects ">
                        <div className="project-head mb-2 pl-4">
                        <h4 className="projects-heading text-[1rem] dark:text-white text-[#171717] font-semibold">Projects</h4>
                        <p className="project-about text-[18px] dark:text-[#ffffffcc]  text-[#737373]">Architects desgin houses</p>
                        </div>
                        <div className="projects-cards flex sm:grid sm:grid-cols-4 p-2 sm:p-4 gap-12">
                        <Carousel
                            baseWidth={300}
                            autoplay={false}
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={false}
                            round={false}
                            
                        />
                            <div className="project-card hidden  sm:flex flex-col col-span-1 gap-8">
                                <div className="project-img rounded-[8px] shadow-cs2">
                                    <img src="props-card.png" alt="" className="project-image rounded-[8px] shadow-cs" />
                                </div>
                                <div className="project-card-text flex flex-col col-span-1 gap-2">
                                <p className="project-no text-[14px] dark:text-[#ffffffcc] text-[#737373]">Project#1</p>
                                <h2 className="project-name font-bold text-[20px] dark:text-white text-[#171717]">Modern</h2>
                                <p className="project-p text-[14px] dark:text-[#ffffffcc] text-[#737373]">As Uber works through a huge amount of internal management turmoil.</p>
                                </div>
                                <div className="project-btn-nom flex sm:flex-row flex-col-reverse items-center justify-center sm:justify-between">
                                    <a href="" className="project-card-btn min-w-8 sm:min-w-16 border-solid border-[1px] dark:border-white border-black rounded-[8px] font-semibold py-1.5 sm:px-4 text-[14px] sm:text-[18px] dark:text-white">View Project</a>
                                    <AvatarGroup spacing={36} className='flex items-center mr-[50px]'>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    </AvatarGroup>
                                </div>

                            </div>
                            <div className="project-card hidden  sm:flex flex-col col-span-1 gap-8">
                                <div className="project-img rounded-[8px] shadow-cs2">
                                    <img src="props-card.png" alt="" className="project-image rounded-[8px] shadow-cs" />
                                </div>
                                <div className="project-card-text flex flex-col col-span-1 gap-2">
                                <p className="project-no text-[14px] dark:text-[#ffffffcc] text-[#737373]">Project#1</p>
                                <h2 className="project-name font-bold text-[20px] dark:text-white text-[#171717]">Modern</h2>
                                <p className="project-p text-[14px] dark:text-[#ffffffcc] text-[#737373]">As Uber works through a huge amount of internal management turmoil.</p>
                                </div>
                                <div className="project-btn-nom flex sm:flex-row flex-col-reverse items-center justify-center sm:justify-between">
                                    <a href="" className="project-card-btn min-w-8 sm:min-w-16 border-solid border-[1px] dark:border-white border-black rounded-[8px] font-semibold py-1.5 sm:px-4 text-[14px] sm:text-[18px] dark:text-white">View Project</a>
                                    <AvatarGroup spacing={36} className='flex items-center mr-[50px]'>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    </AvatarGroup>
                                </div>

                            </div>
                            <div className="project-card hidden  sm:flex flex-col col-span-1 gap-8">
                                <div className="project-img rounded-[8px] shadow-cs2">
                                    <img src="props-card.png" alt="" className="project-image rounded-[8px] shadow-cs" />
                                </div>
                                <div className="project-card-text flex flex-col col-span-1 gap-2">
                                <p className="project-no text-[14px] dark:text-[#ffffffcc] text-[#737373]">Project#1</p>
                                <h2 className="project-name font-bold text-[20px] dark:text-white text-[#171717]">Modern</h2>
                                <p className="project-p text-[14px] dark:text-[#ffffffcc] text-[#737373]">As Uber works through a huge amount of internal management turmoil.</p>
                                </div>
                                <div className="project-btn-nom flex sm:flex-row flex-col-reverse items-center justify-center sm:justify-between">
                                    <a href="" className="project-card-btn min-w-8 sm:min-w-16 border-solid border-[1px] dark:border-white border-black rounded-[8px] font-semibold py-1.5 sm:px-4 text-[14px] sm:text-[18px] dark:text-white">View Project</a>
                                    <AvatarGroup spacing={36} className='flex items-center mr-[50px]'>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    </AvatarGroup>
                                </div>

                            </div>
                            <div className="project-card hidden  sm:flex flex-col col-span-1 gap-8">
                                <div className="project-img rounded-[8px] shadow-cs2">
                                    <img src="props-card.png" alt="" className="project-image rounded-[8px] shadow-cs" />
                                </div>
                                <div className="project-card-text flex flex-col col-span-1 gap-2">
                                <p className="project-no text-[14px] dark:text-[#ffffffcc] text-[#737373]">Project#1</p>
                                <h2 className="project-name font-bold text-[20px] dark:text-white text-[#171717]">Modern</h2>
                                <p className="project-p text-[14px] dark:text-[#ffffffcc] text-[#737373]">As Uber works through a huge amount of internal management turmoil.</p>
                                </div>
                                <div className="project-btn-nom flex sm:flex-row flex-col-reverse items-center justify-center sm:justify-between">
                                    <a href="" className="project-card-btn min-w-8 sm:min-w-16 border-solid border-[1px] dark:border-white border-black rounded-[8px] font-semibold py-1.5 sm:px-4 text-[14px] sm:text-[18px] dark:text-white">View Project</a>
                                    <AvatarGroup spacing={36} className='flex items-center mr-[50px]'>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"  className='!h-[22px] !w-[22px]'/>
                                    </AvatarGroup>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Profile