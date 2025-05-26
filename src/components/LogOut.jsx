import React, { useState } from 'react';

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
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Logout } from '@mui/icons-material';
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
const LogOut = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const plans = [
    { name: "Essential", monthly: 35, annual: 29 },
    { name: "Perform", monthly: 55, annual: 49, popular: true },
    { name: "Enterprise", monthly: 85, annual: 79 }
  ];
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <div className="logout bg-[#323238cb] bg-[url('log-bg.jpeg')] bg-blend-multiply bg-cover bg-center ">
      <div className="pricing">
        <header className="p-6 pt-8">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8 text-white">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-white">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
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

          <a href="#" className="text-sm/6 font-semibold text-white">
            Authentication
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Application
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            E-commerce
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Docs
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-[#191919] font-bold bg-[#ebeff4] text-xs px-4 rounded-[8px] py-[6px]">
            Buy Now 
            {/* {<span aria-hidden="true">&rarr;</span>} */}
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
        <div className="form flex justify-center items-center">
            <div className="form-inside bg-white rounded-[8px] p-4 ">
            <div className="form-head p-4 bg-[#343439] text-white text-center rounded-[8px]">
                <h2 className="sign-in mt-2 text-2xl font-semibold">Sign in</h2>
                <ul className='flex itemx-center justify-center mt-2 mb-6 gap-6 pt-4'>
                <li className=' w-[20px]'><SlSocialInstagram/></li>
                <li className=' w-[20px]'><SlSocialInstagram/></li>
                <li className=' w-[20px]'><SlSocialInstagram/></li>
                </ul>
            </div>
            <div className="inputs pt-10">
            <input type="email" name="" id="" placeholder='Email' className='p-3 w-full border-[#D2D6DA] border-solid border-[1px] rounded-[8px] mb-4'/>
            <input type="password" name="" id="" placeholder='Password' className='p-3 w-full border-[#D2D6DA] border-solid border-[1px] rounded-[8px] mb-4'/>
            </div>
            <div className="switch flex items-center ">
                <Switch {...label} color="default" />
                <p className="swtich-p text-[16px] text-[#A7A7A7]">Remember me</p>
            </div>
            <a className="w-full mt-8 mb-2 inline-flex justify-center whitespace-nowrap rounded-lg bg-[#343439] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
            Sign In
            </a>
            <p className="sign-up mt-6 mb-2 text-[16px] text-[#A7A7A7] text-center">Don't have an accout? <span className='text-[#191919] font-bold'>Sign Up</span></p>
            </div>
        </div>
      <footer className="footer py-12 flex items-center justify-between text-center mx-auto flex max-w-7xl items-center justify-between  lg:px-8 text-white">
        <p className="footerp text-[16px] text-white">Copyright © 2021 Material by Creative Tim.</p>
        <ul className='flex mb-6'>
          <li className='text-[16px] text-white mr-12'>Company</li>
          <li className='text-[16px] text-white mr-12'>About Us</li>
          <li className='text-[16px] text-white mr-12'>Team</li>
          <li className='text-[16px] text-white mr-12'>Product</li>
        </ul>
      </footer>
      </div>
    </>
  );
};

export default LogOut;
