import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Log, Sign } from './Images';
import { Star } from './Images';
import Switch from '@mui/material/Switch';
import { SlSocialInstagram } from "react-icons/sl";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/react';
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline';
  import { IoIosHeart } from "react-icons/io";
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Logout } from '@mui/icons-material';
import { Input } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ] 

const SignIn = () => {
    const notify = () => toast.success('🦄 User registered Successfully...Please Login', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
 });
 const info = () => toast.info('🦄 User already registered..... Please Login', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
 });
 const errored = () => toast.error('🦄 Please fill up the Sign form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
 });
  const [isAnnual, setIsAnnual] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const plans = [
    { name: "Essential", monthly: 35, annual: 29 },
    { name: "Perform", monthly: 55, annual: 49, popular: true },
    { name: "Enterprise", monthly: 85, annual: 79 }
  ];
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [fdata,setFdata] = useState([]);
    const [data, setData] = useState({
        id : fdata.length,
        username : "",
        email : "",
        pass : "",
    });
    const [error, seterror] = useState({
        username: '',
        email: '',
        pass: '',
    });

    const [showPassword, setShowPassword] = useState(false);   
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username' && ! /^[a-zA-Z]/.test(value)) {
            seterror((prev) => ({
                ...prev,
                username: "Username must contain only text",
            }));
        }
        else if (name === 'email' && !/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value)) {
            seterror((prev) => ({
                ...prev,
                email: 'Please enter a valid email.',
            }));
        } else if (name === 'phone' && !/^(0|91|\+91 )?-?[789]\d{9}$/.test(value)) {
            seterror((prev) => ({
                ...prev,
                phone: 'Phone number must be numeric.',
            }));
        } else if (name === 'pass' && !/^.{8,}$/.test(value)) {
            seterror((prev) => ({
                ...prev,
                pass: `requires 8 digit long 
                strong password`,
            }));
        } else if (name === 'pass' && !/^(?=.*?[#?!@$%^&*-])/.test(value)) {
            seterror((prev) => ({
                ...prev,
                pass: `Please add special characters to your password`,
            }));
        } else if (name === 'pass' && !/^(?=.*?[a-z])/.test(value)) {
            seterror((prev) => ({
                ...prev,
                pass: `Please add characters to your password`,
            }));
        }else if (name === 'pass' && !/^(?=.*?[0-9])/.test(value)) {
            seterror((prev) => ({
                ...prev,
                pass: `Please add numbers to your password`,
            }));
        }else {
            seterror((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const addData = () => {
        const fdata = JSON.parse(localStorage.getItem('fdata')) || [];
        setFdata([...fdata,{...data, id: fdata.length}]);
        const hasErrors = Object.values(error).some((err) => err !== '');
        const hasEmptyFields = Object.values(data).some((val) => val.trim?.() === '');
        if (hasErrors || hasEmptyFields ) {
          errored();
          return;
        }
        const emailId = data.email;
        if (fdata.some((item) => item.email === emailId)) {
          info();
          return;
        }
        localStorage.setItem('fdata', JSON.stringify([...fdata,{...data,id:fdata.length}]));
        setData({id:fdata.length,username: "",email: "",pass: "",phone: "",img: "",});
        notify();
    };
  return (
    <>
      {/* <div className="logout bg-[#323238cb] bg-blend-multiply bg-cover bg-center h-[100lvh] relative"
      style={{ backgroundImage: `url(${Log})` }}> */}
            <div className="pricing">
              <div className="nav-body min-h-[35vh] h-[35vh]  m-4 pt-4 bg-[#323238cb] bg-center bg-blend-multiply rounded-[12px]" style={{ backgroundImage: `url(${Sign})` }}>
              <header className="">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8 text-white dark:text-black">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-white dark:text-black">
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white dark:text-black">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white dark:text-black" />
                  </PopoverButton>
      
                  <PopoverPanel
                    transition
                    className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-[#1D1D1D] shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                  >
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                        >
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-[#1D1D1D]">
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
      
                <a href="#" className="text-sm/6 font-semibold text-white dark:text-black">
                  Authentication
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white dark:text-black">
                  Application
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white dark:text-black">
                  E-commerce
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white dark:text-black">
                  Docs
                </a>
              </PopoverGroup>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm/6 text-[#191919] font-bold bg-[#ebeff4]  px-4 rounded-[8px] py-[6px]">
                  Buy Now 
                  {/* {<span aria-hidden="true">&rarr;</span>} */}
                </a>
              </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-10" />
              <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-[#1D1D1D] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Disclosure as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Marketplace
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Company
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>
              </div>
            </div>
        <div className="form flex justify-center items-center mt-[-144px] ">
            <div className="form-inside p-4 w-[420px] bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5]">
            <div className="form-head p-4 bg-[#343439] text-white dark:text-black text-center rounded-[8px]">
                <h2 className="sign-in mt-2 text-2xl font-semibold">Sign Up</h2>
                <ul className='flex itemx-center justify-center mt-2 mb-6 gap-6 pt-4'>
                <li className=' w-[20px]'><SlSocialInstagram/></li>
                <li className=' w-[20px]'><SlSocialInstagram/></li>
                <li className=' w-[20px]'><SlSocialInstagram/></li>
                </ul>
            </div>
            <div className="inputs pt-10">
            <input type="text" name='id' value={fdata.length} id='id' hidden/>
            <Input type="text" name='username' id='neme' value={data.username} onChange={handleChange} placeholder='Name' className='py-[5px] w-full border-[#D2D6DA] border-b  mb-4'
             sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/>
            <div className="text-[red] ">{error.username}</div>
            <Input type="email" name='email' id='emel' value={data.email} onChange={handleChange} placeholder='Email' className='py-[5px] w-full border-[#D2D6DA] border-b  mb-4'
             sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/>
            <div className="text-[red]">{error.email}</div>
            <Input type="password" name='pass' id='pass' max-length='8' value={data.pass} onChange={handleChange} placeholder='Password' className='py-[5px] w-full border-[#D2D6DA] border-b  mb-4'
             sx={{
                    '&.MuiInput-underline:before': {
                        borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                    },
                    '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                    },
                    '&.MuiInput-underline:after': {
                        borderBottom: '2px solid black',
                    },
                }}/>
            <div className="text-[red] ">{error.pass}</div>
            </div>
            <div className="switch flex items-center ">
                <Switch {...label} color="default" />
                <p className="swtich-p text-[18px] text-[#A7A7A7]">Remember me</p>
            </div>
            <button className="w-full mt-8 mb-2 inline-flex justify-center whitespace-nowrap rounded-lg bg-[#343439] px-3.5 py-2.5 text-sm font-medium text-white dark:text-black shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 cursor-pointer" onClick={addData} href="#0">
            Sign Up
            </button>
            <p className="sign-up mt-6 mb-2 text-[18px] text-[#A7A7A7] text-center">Already have an accout? <Link to='/tailwind/signin' className='text-[#191919] font-bold'>Sign In</Link></p>
            </div>
        </div>
        
      <footer>
            <div className="footer flex flex-col sm:flex-row sm:justify-between sm:px-6 sm:gap-auto gap-2 mx-[100px]">
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
      {/* </div> */}
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
  );
};

export default SignIn;
