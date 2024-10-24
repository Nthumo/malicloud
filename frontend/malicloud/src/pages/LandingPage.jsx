import React from "react";
import { Link } from "react-router-dom";
import {SunIcon, MoonIcon} from '@radix-ui/react-icons'
import { useDarkMode } from "../hooks/UseDarkMode";
import { Button } from "@/components/ui/button";
import { Star, SmilePlus, Frown, Facebook, X, Instagram, Youtube } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle} 
    from "@/components/ui/card";

const LandingPage = () => {
    const [theme, toggleTheme] = useDarkMode();

     return (
        <>
        <div className="relative text-white ">
            <div className="z-50 md:w-full p-4 pb-0 pt-0 dark:bg-zinc-900 bg-zinc-100 fixed flex md:justify-between md:gap-0 gap-[80px] top-0 shadow-sm shadow-zinc-500 ">
                <div className='md:left-20 left-4 flex items-center'>
                    <Link to='/' className="flex items-center">
                    <img src="/images/cloud-transparent.png" alt="logo" className="md:w-[80px] w-[50px]"/>
                    <h1 className='md:text-lg text-sm font-bold dark:text-white text-black'>MaliCloud</h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="flex gap-x-8 gap-2 text-xl font-bold dark:text-white text-black">
                        <Link>
                            <li className="hover:underline decoration-4 underline-offset-8 md:block hidden">Features</li>
                        </Link>
                        <Link>
                            <li className="hover:underline decoration-4 underline-offset-8 md:block hidden">Resources</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex gap-x-4 items-center">
                    <Link to='/login'>
                        <button className="w-[90px] p-2 md:block hidden rounded-lg bg-zinc-800 hover:bg-zinc-800 items-center font-bold dark:text-orange-400">
                            Log in
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className="md:w-[90px] w-[77px] bg-zinc-950 dark:bg-zinc-800 md:p-2 p-1 rounded-lg dark:hover:bg-zinc-700 hover:bg-zinc-900 hover:border-white items-center font-bold text-white">
                            Sign up
                        </button>
                    </Link>
                    <div className="">
                        <button 
                        onClick={toggleTheme}
                        >
                            {theme === 'dark' ?<SunIcon className="md:w-6 md:h-6"/>: <MoonIcon className="text-black dark:text-white rounded md:w-6 md:h-6"/>} 
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-[250px] p-5 md:mt-28 mt-16 md:w-full md:mb-24">
                <div className="grid">
                    <div className="">
                        <h1 className="md:text-xl dark:text-orange-500 text-orange-700">Property Management Software</h1>
                    </div>
                    <div className="md:left-20 p-1 flex flex-col md:space-y-4 space-y-2 md:mt-0 mt-12">
                        <h1 className="font-bold md:text-6xl text-lg dark:text-white text-black">The Only Required </h1>
                        <h1 className="font-bold md:text-5xl text-2xl dark:text-white text-black">Property Management Software</h1>
                        <div className="md:w-[500px] w-[340px] md:pt-12 pt-8">
                            <p className="md:text-xl dark:text-white text-black"><span className="font-bold md:text-2xl text-lg">MaliCloud</span> bridges the gap between Landlords, Property Managers and Tenants. 
                                Choose this Software today to simplify your property management with powerful, simple to use tools at your fingertips. 
                            </p>
                        </div>
                        <div className="flex md:pt-12 pt-14 md:gap-8 gap-4">
                            <Link to='/signup'>
                                <Button className='md:w-[200px] mt-8 w-[150px] md:h-[50px] h-[40px] text-xl dark:border dark:text-orange-400 text-white dark:bg-zinc-950 dark:border-white dark:hover:bg-zinc-900 bg-black hover:bg-zinc-900'>
                                    Get Started
                                </Button>
                            </Link>
                            <Link to='/demo'>
                                <Button className='md:w-[200px] mt-8 w-[150px] md:h-[50px] h-[40px] text-xl dark:border dark:text-orange-400 text-white dark:bg-zinc-950 dark:border-white dark:hover:bg-zinc-900 bg-black hover:bg-zinc-900'>
                                Request Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="dark:bg-zinc-900 bg-zinc-400 md:w-[400px] w-[280px] md:h-[500px] h-[330px] md:right-32 right-16 md:top-32 top-[340px] rounded-full">
                    <img src="/images/hero.png" alt="businessman" className=" md:w-[470px] w-[300px] py-20"/>
                </div>
            </div>
            
            <div className="md:flex gap-[100px] md:mt-[60px] mt-[40px] dark:text-white text-black p-5">
                <div className="p-2">
                    <h4 className="dark:text-orange-500 text-orange-700 md:text-xl md:p-4">Accounting</h4>
                    <h1 className="md:text-4xl text-[14px] font-bold md:p-2 p-1">Manage Accounting details with ease</h1>
                    <p className="md:text-2xl text-sm p-2">Set up invoices, send receipts, and create financial reports so you can track every last penny.</p>
                    <ul className="list-disc md:p-6 p-3 md:text-xl text-sm">
                        <li className="md:p-2 p-1">Automate invoices, late fees and more</li>
                        <li className="md:p-2 p-1">Customizable and pre-templated reports</li>
                        <li className="md:p-2 p-1">Connect back accounts and sync with QuickBooks</li>
                    </ul>
                </div>
                <div className="md:dark:md:bg-zinc-800 md:bg-zinc-400 rounded-full">
                    <img src="/images/accounting.png" alt="Accounting screenshot" className="md:w-[650px] w-[250px] md:h-[400px] h-[150px] md:p-8"/>
                </div>
            </div>

            <div className="relative md:flex gap-[170px] md:mt-[120px] mt-[70px] p-5">
                <div className="absolute md:top-0 top-[215px] p-2 md:dark:md:bg-zinc-800 md:bg-zinc-400 rounded-full">
                    <img src="/images/maintenance.png" alt="maintenance screenshot" className="md:w-[550px] w-[250px] md:h-[400px] h-[150px] md:p-8" />
                </div>
                <div className="absolute md:right-8 md:top-6 top-0 p-2 dark:text-white text-black md:w-[550px]">
                    <h4 className="dark:text-orange-500 text-orange-700 md:text-xl md:p-4">Maintenance</h4>
                    <h1 className="md:text-4xl text-[14px] font-bold md:p-2 p-1">Put rent collection on auto-pilot</h1>
                    <p className="md:text-2xl text-sm p-2">No need to waste time tracking down rent payments. Give tenants a flexible, easy way to pay online.</p>
                    <ul className="list-disc md:p-6 p-3 md:text-xl text-sm">
                        <li className="md:p-2 p-1">Includes credit, debit, and ACH payment options as well as cash and check.</li>
                        <li className="md:p-2 p-1">Accept full or partial payments</li>
                        <li className="md:p-2 p-1">Track paid and overdue invoices</li>
                    </ul>
                </div>
            </div>

            <div className="relative md:flex gap-[170px] md:mt-[400px] mt-[400px] p-5">
                <div className="dark:text-white text-black">
                    <h4 className="dark:text-orange-500 text-orange-700 md:text-xl md:p-4">Lease management</h4>
                    <h1 className="md:text-4xl text-[14px] md:p-2 p-1 font-bold ">Keep track of all Leases as they are released.</h1>
                    <p className="md:text-2xl text-sm p-2">Reduce the needed man power to stay on track with lease agreements by letting MaliCloud handle the heavy work.</p>
                    <ul className="list-disc md:p-6 p-3 md:text-xl text-sm">
                        <li>Create, update and manage lease agreements</li>
                        <li>Sign agreements on the website</li>
                        <li>Review and approve leases, monitor lease expirations and track renewals</li>
                        <li>Notify tenants on expiring leases</li>
                    </ul>
                </div>
                <div className="dark:md:bg-zinc-800 bg-zinc-400 md:w-[650px] md:h-[400px] h-[150px] rounded-full"></div>
            </div>

            <div className="flex flex-col justify-center p-5 mt-[120px] items-center dark:bg-zinc-950 bg-zinc-100 shadow-lg dark:shadow-gray-800 shadow-black">
                <div className="flex gap-2 dark:text-white text-black items-center justify-center pt-2">
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                </div>
                <div className="left-[180px] flex items-center md:gap-16 gap-8 dark:text-white text-black">
                    <img src="/images/ai.jpeg" alt="me" className=" left-[200px] md:w-[120px] w-[90px] md:h-[120px] h-[90px] rounded-3xl mt-4" />
                    <div className="md:w-[400px]">
                        <p className="md:text-[14px] text-[11px]">
                        "MaliCloud is the best tool I have worked with so far to manage my properties. MaliCloud is the best tool i have worked with so far to manage my properties.
                        MaliCloud is the best tool i have worked with so far to manage my properties."
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center mt-[80px]">
                <p className=" dark:text-white text-black md:text-[14px] text-[12px]">Click below to start your free trial</p>
                <Link to='/signup'>
                    <Button className='md:w-30 md:h-16 md:text-2xl items-center font-bold'>Get Started</Button>
                </Link>
            </div>

            <div className="flex justify-center items-center md:gap-8 gap-2 mt-[120px] md:p-0 p-2">
                <Card className='bg-red-400 md:w-[400px] md:h-[200px] border-none bg-opacity-50'>
                    <div className='text-center font-bold dark:text-white flex justify-center gap-2 p-4 items-center'>
                        <h1 className="md:text-[14px] text-[12px]">Without MaliCloud</h1> 
                        <Frown className="md:w-7 w-5 md:h-7 h-5"/>
                    </div>
                    <CardContent>
                    <ul className="list-disc md:p-4 md:text-[14px] text-[11px]">
                        <li>Maintenance and Repairs Delay</li>
                        <li>Poor tenant Communication</li>
                        <li>Financial mismanagement and budget overruns</li>
                    </ul>
                    </CardContent>
                </Card>
                <Card className='bg-green-400 md:w-[400px] md:h-[200px] border-none bg-opacity-50'>
                    <div className='font-bold dark:text-white flex gap-2 justify-center p-4 items-center'>
                        <h1 className="md:text-[14px] text-[12px]">With MaliCloud</h1>  
                        <SmilePlus className="md:w-7 w-5 md:h-7 h-5"/> 
                    </div>
                    <CardContent>
                    <ul className="list-disc md:p-4 md:text-[14px] text-[11px]">
                        <li>Track maintenance with automated status updates</li>
                        <li>Communicate with tenants in real time</li>
                        <li>Manage all finances in one place</li>
                    </ul>
                    </CardContent>
                </Card>
            </div>
            

            <div className="flex justify-center mt-[120px] mb-20 md:p-0 p-2">
                <Card className="dark:text-white text-black md:w-[850px]">
                    <CardHeader>
                        <CardTitle className="text-center md:text-2xl text-lg font-bold">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger className='md:text-xl'>What is rental property management software?</AccordionTrigger>
                                <AccordionContent className='md:text-lg'>
                                    Property management software allows landlords and property managers to monitor, screen, and provide online rent collection to their renters. 
                                    The rental industry is always looking for ways to optimize, simplify, and enhance back-office operations and finances; property management software is the way to do it. 
                                    Using property management software improves communication between managers, owners, and renters
                                    MaliCloud, a cloud-based SaaS, automates daily property management tasks while saving time and money by eliminating unnecessary add-ons.
                                    The best rental property software integrates all the main features of property administration into a single program, including accounting, maintenance, communication, online rent collection, tenant screening, and reporting.
                                    It is much easier to manage and store your documents with the help of all-in-one software. 
                                    You can finally archive the disorganized Google Sheets and Microsoft Excel.
                                    MaliCloud enables landlords to breathe easy by promoting lists on a marketing website, increasing rent roll, offering tenants better service, and scaling up the business.
                                    Our online property management software lets you instantly connect and synchronize with your QuickBooks Online account to save time and be more productive. 
                                    You can synchronize your calendar with Google Calendar to easily keep track of reminders, notes, and important events regarding your business — without switching between calendars.
                                    Rental management software enables businesses to provide the best services and expand on a larger scale. 
                                    If you are a property owner or a landlord who understands all the features and benefits of using online property management software and is looking for the best one, try MaliCloud!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger className='md:text-xl'>Why do you need property management software?</AccordionTrigger>
                                <AccordionContent className='md:text-lg'>
                                    TenantCloud simplifies administrative, marketing, and other business operations for property managers who oversee multiple rental properties. 
                                    TenantCloud allows users to post property listings, sign lease agreements online with the help of electronic signatures, advertise rentals, receive rent payments via credit card, debit card, or ACH, and receive and resolve maintenance requests from tenants, among many other features.
                                    Using our property management software, managers and owners can speed up the leasing process to keep more of their properties occupied with quality tenants. 
                                    TenantCloud is a dynamic platform that equips property managers with everything they need to launch, operate, communicate with tenants, and expand.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-3'>
                                <AccordionTrigger className='md:text-xl'>Who can use rental property management software?</AccordionTrigger>
                                <AccordionContent className='md:text-lg'>
                                    While property owners and managers efficiently manage their rental properties and keep tabs on accounting transactions, their tenants can apply for apartments and pay their rent online, thanks to real estate management software. 
                                    Service professionals can also benefit from our online maintenance request system and detailed work orders.
                                    <p></p>
                                    <br/>
                                    <strong>Landlords and Property managers:</strong> With property management software, landlords and property managers can collect rent online, store all their rental information on our cloud-based software, upload photos, manage maintenance requests, use automatic accounting features, accept online rental applications, sign lease agreements with e-signatures, check on financial reports, communicate with tenants, team and service professionals, advertise rental vacancies across multiple rental websites, and much more. 
                                    Residential property management software will improve the efficiency of landlords managing anything from single-family houses to multi-family rentals or even Homeowner Association to manage their properties and communities. 
                                    <p></p>
                                    <br/>
                                    <strong>Tenants:</strong>  Besides searching for a rental property, tenants may pay their rent online, request maintenance, apply for rentals, sign lease agreements online, report their rent payments to credit bureaus and improve their credit score, contact their landlord, and view their rental history.
                                    <p></p>
                                    <br/>
                                    <strong>Owners:</strong>  Obtain access to property data, accounting activity tracking, communication, and the ability to pay and receive funds from property managers.
                                    <p></p>
                                    <br/>
                                    <strong>Service Professionals:</strong>  With property management software, Service Pro's can create task lists and schedules, accept maintenance requests online, send and receive payments online, track transactions, and interact with clients. Service professionals may also develop a company profile.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-4'>
                                <AccordionTrigger className='md:text-xl'>What features should you look for in rental property management software? </AccordionTrigger>
                                <AccordionContent className='md:text-lg'>
                                    <ol className="list-decimal pl-6">
                                        <li>
                                        <strong>Income Tracking and Reporting:</strong> As of August 24, 2022, the average landlord income is $69,085. Your property management app should simplify rent payment management and provide comprehensive income-tracking features. TenantCloud rental property management software allows you to efficiently collect and monitor rent payments, track late fees, and generate income reports.
                                        </li>
                                        <p></p>
                                        <br/>
                                        <li>
                                        <strong>Time Efficiency:</strong> According to recent data, 76% of landlords spend 40 hours each month monitoring their properties. Therefore, time-saving features are essential. To reduce daily operating tasks, look for automation tools such as automatic lease renewal reminders, late fee notices, past-due balance notices, and effective communication channels.
                                        </li>
                                        <p></p>
                                        <br/>
                                        <li>
                                        <strong>Tenant Screening:</strong> Tenant screening is essential since 42.9 million or 34.5% of U.S. households rent their homes. Complete tenant screening features, such as credit checks, criminal background checks, rental history verification, and income insights, are necessary for every rental management software.
                                        </li>
                                        <p></p>
                                        <br/>
                                        <li>
                                        <strong>Leads Tracking Tool:</strong> TenantCloud's Leads Tracking Tool is a beneficial tool that streamlines the management of prospective tenants. It assists in handling leads, making it easier to fill unoccupied homes and maintain constant rental revenue.
                                        </li>
                                        <p></p>
                                        <br/>
                                        <li>
                                        <strong>Customizable Reports:</strong> Lease property management software should allow you to generate customized reports, such as the 1099 Tax Form, Rent Roll Report, Rentability Report, and Profit/Loss Statement. These reports are necessary for effective rental management, finance tracking, and tax compliance.
                                        </li>
                                        <p></p>
                                        <br/>
                                        <li>
                                        <strong>Landlord Forms:</strong> You'll need to employ a variety of forms and papers every day to make organizing duties easier. Lease agreements, notices of rent increases, and addendums, among other landlord paperwork, are all conveniently available and customizable through TenantCloud. These documents are necessary for landlords, property managers, and owners since they streamline chores and ensure compliance with local, state, and federal laws governing landlord-tenant relationships. 
                                        </li>
                                        <p></p>
                                        <br/>
                                    </ol>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-5'>
                                <AccordionTrigger className='md:text-xl'>What problems does property management software solve? </AccordionTrigger>
                                <AccordionContent className='md:text-lg'>
                                    <p>Property management software solves many problems, making a property manager's daily routines more manageable and streamlined. 
                                        Here are just a few issues that property management software solves: 
                                    </p>
                                    <p></p>
                                    <br/>
                                    <ul className="list-disc pl-6">
                                        <li>
                                            <strong>Automate Rental Invoicing and Collections</strong> 
                                        </li>
                                        <p></p>
                                        <br/>
                                        <p>
                                        Property management software allows landlords to get paid quickly and easily with the help of online rental payment tools. 
                                        Tenants can pay rent instantly from their phones using the TenantCloud app. 
                                        Keeping records online makes it easier to keep track of payments from each tenant and create financial reports automatically.                                     
                                        </p>
                                        <p></p>
                                        <br/>
                                        <li>
                                            <strong>Improve & Streamline Tenant Screening</strong>
                                        </li>
                                        <p></p>
                                        <br/>
                                        <p>
                                        With the help of a tenant screening report powered by TransUnion, landlords can determine whether a candidate is a good fit for their property. 
                                        The more information you have, the safer your rental home and business will be. 
                                        </p>
                                        <p></p>
                                        <br/>
                                        <li>
                                            <strong>Resolve Issues More Efficiently</strong>
                                        </li>
                                        <p></p>
                                        <br/>
                                        <p>
                                        With maintenance management functionality, you and your tenants can communicate and assign work directly to service pros through the software, making and resolving maintenance requests simple and quick. 
                                        </p>
                                        <p></p>
                                        <br/>
                                        <li>
                                            <strong>Access Detailed Insights</strong>
                                        </li>
                                        <p></p>
                                        <br/>
                                        <p>
                                        With on-demand rental reports, you'll have the needed data. 
                                        Running community analytics with property management software will allow you to check on every aspect of your business. 
                                        TenantCloud automatically calculates things such as your gross income, operating expenses, non-operating expenses, net income, and much more. 
                                        </p>
                                        <p></p>
                                        <br/>
                                        <li>
                                            <strong>Effectively Advertise Your Rentals</strong>
                                        </li>
                                        <p></p>
                                        <br/>
                                        <p>
                                        Every TenantCloud property owner can create a listing website to promote vacancies and showcase properties to potential tenants. 
                                        Create a portfolio, add property images to the gallery, and customize rental applications.
                                        </p>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
            
            <div className="md:p-0 p-2">
                <Card className='relative h-[600px] dark:bg-zinc-900 bg-zinc-300 rounded-none'>
                    <CardHeader>
                        <CardTitle className='flex items-center absolute top-2 left-4'>
                            <img src="/images/cloud-transparent.png" alt="logo" className="md:w-[70px] w-[50px]"/>
                            <h1 className="text-sm">MaliCloud</h1> 
                        </CardTitle>
                    </CardHeader>
                   
                    <div className="absolute right-12 md:top-2 top-9 grid grid-cols-4 grid-flow-col justify-center gap-4 md:p-0 p-2">
                        <div className="p-2">
                            <h1 className="md:text-xl font-bold md:p-4 p-2">Features</h1>
                            <ul className="flex flex-col md:gap-3 gap-1.5">
                                <Link>
                                    <li className="hover:text-green-500 md:text-[14px] text-[12px] flex gap-1.5"> <span className="md:block hidden">Online</span>  Payments</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500 md:text-[14px] text-[12px] flex gap-1.5"> <span className="md:block hidden">Tenant</span> Screening</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500 md:text-[14px] text-[12px] flex gap-1.5">Listings <span className="md:block hidden">Website</span></li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500 md:text-[14px] text-[12px] flex gap-1.5"> <span className="md:block hidden">Premium</span> Leads</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Lead Tracking</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Rental Applications</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Online Leases</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Accounting</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Reports</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Maintenance Requests</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Team Management</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Rent Reporting</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Maintenance Bidding</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Rentability Report</li>
                                </Link>
                                
                            </ul>
                        </div>
                        <div className="p-2">
                            <h1 className="md:text-xl font-bold md:p-4 p-2">Company</h1>
                            <ul className="flex flex-col gap-3">
                                <Link>
                                    <li className="hover:text-green-500">About Us</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Pricing</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Affiliate Program</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Contact Us</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Terms of Service</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Privacy Policy</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Why MaliCloud</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="p-2">
                            <h1 className="md:text-xl font-bold md:p-4 p-2">Use cases</h1>
                            <ul className="flex flex-col gap-3">
                                <Link>
                                    <li className="hover:text-green-500">Landlord</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Property Manager</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Tenant</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Service Experts</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="font-bold md:text-xl md:p-4 p-2">Resources</h1>
                            <ul className="flex flex-col gap-3">
                                <Link>
                                    <li className=" hover:text-green-500">Landlord Resources</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Support</li>
                                </Link>
                                <Link>
                                    <li className="hover:text-green-500">Landlord Forms</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute bottom-5 md:left-[120px] left-4 pt-10 flex justify-between items-center md:gap-[800px] gap-20">
                        <div>
                            <p className="md:text-sm text-[10px]">&copy; 2024 maliCloud. All rights reserved.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link className="hover:scale-110 hover:text-zinc-500">
                                <X className=""/>
                            </Link>
                            <Link className="hover:scale-110">
                                <Facebook className="text-blue-500 hover:text-zinc-500"/>
                            </Link>
                            <Link className="hover:scale-110 hover:text-zinc-500">
                                <Instagram/>
                            </Link>
                            <Link className="hover:scale-110">
                                <Youtube className="text-red-500 hover:text-zinc-500"/>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
            

            <div>
                <div className="absolute md:block hidden bottom-[1450px] left-[60px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400  transform rotate-45"></div>
                <div className="absolute md:block hidden bottom-[650px] left-[60px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400  transform rotate-45"></div>
            </div>
            <div>
                <div className="absolute md:block hidden bottom-[1200px] right-[100px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
                <div className="absolute md:block hidden bottom-[850px] right-[100px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
            </div>
        </div>
        </>
     )
}

export default LandingPage;