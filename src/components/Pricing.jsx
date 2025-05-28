import React, { useState } from 'react';
import { Star } from './Images';
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
  import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
   
const Pricing = () => {
  const [open, setOpen] = React.useState(1);
  const [isAnnual, setIsAnnual] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const plans = [
    { name: "Essential", monthly: 35, annual: 29 },
    { name: "Perform", monthly: 55, annual: 49, popular: true },
    { name: "Enterprise", monthly: 85, annual: 79 }
  ];

  return (
    <>
    
      <div className="pricing">
        <div className="nav-body min-h-[50vh] h-[50vh]  m-4 pt-4 bg-[#323238cb] bg-center bg-blend-multiply rounded-[12px]" style={{ backgroundImage: `url(${Star})` }}>
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
          <div className="py-44 mt-[-24px] flex justify-center items-center text-center flex-col">
          <h1 className="banner-heading text-4xl font-semibold tracking-wide text-white dark:text-black">Pick the best plan for you</h1>
          <p className="pt-6 text-[18px]  font-normal text-white dark:text-black">
            You have Free Unlimited Updates and Premium Support on each package.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex border-[#D2D6DA] border-solid border-[1px] rounded-[8px] justify-center items-center flex-col mt-[-80px] bg-white dark:bg-[#1D1D1D] mx-12 mb-12">
        <div className="w-full px-4 py-12">

          {/* Toggle */}
          <div className="flex justify-center max-w-xs mx-auto mb-12">
            <div className="relative flex min-w-[400px] p-1 bg-[#f5f5f5]  rounded-[12px]">
              <span className="absolute inset-0 m-1 pointer-events-none">
                <span
                  className={`absolute inset-0 w-1/2 bg-white dark:bg-[#1D1D1D] rounded-[8px] shadow-sm transform transition-transform duration-150 ease-in-out ${
                    isAnnual ? "translate-x-0" : "translate-x-full"
                  }`}
                ></span>
              </span>
              <button
                className={`relative flex-1 text-[18px] rounded-[8px] text-[#171717] p-1 transition-colors duration-150 `}
                onClick={() => setIsAnnual(true)}
              >
                <div className="px-4 py-1">Monthly</div>
              </button>
              <button
                className={`relative flex-1 text-[18px] rounded-[8px] text-[#171717] p-1 transition-colors duration-150 `}
                onClick={() => setIsAnnual(false)}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          
          <div className=" mx-[144px] grid gap-6 lg:grid-cols-3 items-start">
                        {/* <!-- Pricing tab 1 --> */}
                        <div className="dark h-full">
                            <div className="relative flex flex-col h-full p-6 bg-white dark:bg-[#1D1D1D]  border-[#D2D6DA] border-solid border-[1px] rounded-[12px] shadow shadow-slate-950/5">
                                <div className="absolute top-0 right-[50%] mr-[-50px] -mt-4">
                                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-[#F0F2F5] text-[#171717] rounded-full shadow-sm shadow-slate-950/5">STARTER</div>
                                </div>
                                <div className="mb-5 text-center my-2 relative pt-6 pb-4 pr-3.5">
                                    <h1 className="inline-flex items-baseline mb-2 text-5xl font-bold ">
                                        <small className="text-slate-900  font-bold text-xl top-0">$</small>
                                        69
                                        <small className="text-black font-medium text-xl">/mo</small>
                                    </h1>
                                    
                                </div>
                                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Unlimited placeholder texts</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Consectetur adipiscing elit</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat cupidatat</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Officia deserunt mollit anim</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Predefined chunks as necessary</span>
                                        
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Predefined chunks as necessary</span>
                                        
                                    </li>
                                </ul>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-[#343439] px-3.5 py-2.5 text-sm font-medium text-white dark:text-black shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                        Purchase Plan
                                    </a>
                            </div>
                        </div>

                        {/* <!-- Pricing tab 2 --> */}
                        <div className="dark h-full">
                            <div className="relative flex flex-col h-full p-6 bg-[#1A1A1A]  border-[#D2D6DA] border-solid border-[1px] rounded-[12px] shadow shadow-slate-950/5">
                                <div className="absolute top-0 right-[50%] mr-[-50px] -mt-4">
                                    <div className="inline-flex items-center text-xs font-semibold px-8 py-1 bg-[#171717] text-[#F0F2F5] rounded-full shadow-sm shadow-slate-950/5">PREMUIM</div>
                                </div>
                                <div className="mb-5 text-center my-2 relative pt-6 pb-4 pr-3.5">
                                    <h1 className="inline-flex items-baseline mb-2 text-5xl font-bold text-white dark:text-black">
                                        <small className="text-white dark:text-black  font-bold text-xl top-0">$</small>
                                        69
                                        <small className="text-white dark:text-black font-medium text-xl">/mo</small>
                                    </h1>
                                    
                                </div>
                                <ul className="text-white dark:text-black text-sm space-y-3 grow">
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Unlimited placeholder texts</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Consectetur adipiscing elit</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat cupidatat</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Officia deserunt mollit anim</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Predefined chunks as necessary</span>
                                        
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Predefined chunks as necessary</span>
                                        
                                    </li>
                                </ul>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-[#343439] px-3.5 py-2.5 text-sm font-medium text-white dark:text-black shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                        Purchase Plan
                                    </a>
                            </div>
                        </div>

                        {/* <!-- Pricing tab 3 --> */}
                        <div className="dark h-full">
                            <div className="relative flex flex-col h-full p-6 bg-white dark:bg-[#1D1D1D]  border-[#D2D6DA] border-solid border-[1px] rounded-[12px] shadow shadow-slate-950/5">
                                <div className="absolute top-0 right-[50%] mr-[-50px] -mt-4">
                                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-[#F0F2F5] text-[#171717] rounded-full shadow-sm shadow-slate-950/5">STARTER</div>
                                </div>
                                <div className="mb-5 text-center my-2 relative pt-6 pb-4 pr-3.5">
                                    <h1 className="inline-flex items-baseline mb-2 text-5xl font-bold ">
                                        <small className="text-slate-900  font-bold text-xl top-0">$</small>
                                        69
                                        <small className="text-black font-medium text-xl">/mo</small>
                                    </h1>
                                    
                                </div>
                                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Unlimited placeholder texts</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Consectetur adipiscing elit</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Excepteur sint occaecat cupidatat</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Officia deserunt mollit anim</span>
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Predefined chunks as necessary</span>
                                        
                                    </li>
                                    <li className="flex items-center p-2 m-0 text-[18px] 
                                    text-[#7
                                    7373]">
                                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Predefined chunks as necessary</span>
                                        
                                    </li>
                                </ul>
                                <a className="w-full mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-[#343439] px-3.5 py-2.5 text-sm font-medium text-white dark:text-black shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                        Purchase Plan
                                    </a>
                            </div>
                        </div>
                    </div>
        </div>
        <section className="brands-section text-center mt-[16px]">
        <h4 className="brands-heading font-bold text-[18px] text-[#A7A7A7] mb-8">More than 50+ brands trust Material</h4>
        <div className="brands-line grid grid-cols-6">
          <div className="flex items-center justify-center w-[244px]">
            <img src="radisson.png" alt="" className="" />
          </div>
          <div className="flex items-center justify-center w-[244px]">
            <img src="radisson.png" alt="" className="" />
          </div>
          <div className="flex items-center justify-center w-[244px]">
            <img src="radisson.png" alt="" className="" />
          </div>
          <div className="flex items-center justify-center w-[244px]">
            <img src="radisson.png" alt="" className="" />
          </div>
          <div className="flex items-center justify-center w-[244px]">
            <img src="radisson.png" alt="" className="" />
          </div>
          <div className="flex items-center justify-center w-[244px]">
            <img src="radisson.png" alt="" className="" />
          </div>
        </div>
      </section>

      <div className=" mt-[64px] mb-[48px]  px-5 bg-white dark:bg-[#1D1D1D] min-h-sceen">
	<div className="flex flex-col items-center">
		<h2 className="font-bold text-5xl mt-5 tracking-tight">
    Frequently Asked Questions
		</h2>
		<p className="text-neutral-500 text-xl mt-3">
    A lot of people don't appreciate the moment until it’s passed. I'm not trying my hardest, and I'm not trying to do
		</p>
	</div>
    <div className="grid divide-y divide-neutral-200  mt-8 w-[60vw]">
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className='text-xl font-bold text-[#737373]'> What is a SAAS platform?</span>
            <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
  </svg>
                </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn ">
          We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className='text-xl font-bold text-[#737373]'> How does  billing work?</span>
            <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
  </svg>
                </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
          It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too. We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className='text-xl font-bold text-[#737373]'> Can I get a refund for my subscription?</span>
            <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
  </svg>
                </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
          The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className='text-xl font-bold text-[#737373]'> How do I cancel my subscription?</span>
            <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
  </svg>
                </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
          I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.

  If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className='text-xl font-bold text-[#737373]'> Can I try this platform for free?</span>
            <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
      </svg>
                </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
          There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
          </p>
        </details>
      </div>
    </div>

      </div>
      {/* <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion> */}
      </div>
      <footer className="footer py-12 flex items-center justify-center text-center flex-col">
        <ul className='flex mb-6'>
          <li className='text-[18px] text-[#A7A7A7] mr-12'>Company</li>
          <li className='text-[18px] text-[#A7A7A7] mr-12'>About Us</li>
          <li className='text-[18px] text-[#A7A7A7] mr-12'>Team</li>
          <li className='text-[18px] text-[#A7A7A7] mr-12'>Product</li>
          <li className='text-[18px] text-[#A7A7A7] mr-12'>Blog</li>
          <li className='text-[18px] text-[#A7A7A7] mr-12'>Pricing</li>
        </ul>
        <ul className='flex itemx-center justify-center mt-2 mb-6'>
          <li className='mr-6 w-[20px]'><SlSocialInstagram/></li>
          <li className='mr-6 w-[20px]'><SlSocialInstagram/></li>
          <li className='mr-6 w-[20px]'><SlSocialInstagram/></li>
          <li className='mr-6 w-[20px]'><SlSocialInstagram/></li>
          <li className='mr-6 w-[20px]'><SlSocialInstagram/></li>
        </ul>
        <p className="footerp text-[18px] text-[#A7A7A7]">Copyright © 2021 Material by Creative Tim.</p>
      </footer>
    </>
  );
};

export default Pricing;
