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
        <div className="relative w-full min-h-screen text-white ">
            <div className="z-50 w-full p-4 pb-0 pt-0 dark:bg-zinc-900 bg-zinc-100 fixed flex justify-between top-0 shadow-sm shadow-zinc-500 ">
                <div className='md:left-20 left-4 flex items-center'>
                    <Link to='/' className="flex items-center">
                    <img src="/images/cloud-transparent.png" alt="logo" className="md:w-[80px] w-[60px]"/>
                    <h1 className='md:text-lg font-bold dark:text-white text-black'>MaliCloud</h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="flex gap-x-8 text-xl font-bold dark:text-white text-black">
                        <Link>
                            <li className="hover:underline decoration-4 underline-offset-8">Features</li>
                        </Link>
                        <Link>
                            <li className="hover:underline decoration-4 underline-offset-8">Resources</li>
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
                    <button className="md:w-[90px] w-[77px] border bg-white dark:bg-zinc-800 p-2 rounded-lg dark:hover:bg-zinc-700 hover:bg-gray-200 hover:border-white items-center font-bold text-black dark:text-white">
                        Sign up
                    </button>
                    </Link>
                    <div className="">
                    <button 
                    onClick={toggleTheme}
                    >
                        {theme === 'dark' ?<SunIcon className="w-6 h-6"/>: <MoonIcon className="text-black dark:text-white rounded w-6 h-6"/>} 
                    </button>
                </div>
                </div>
            </div>
            <div className="flex gap-x-[250px] p-5 md:mt-32 w-full mb-24">
                <div className="grid">
                    <div className="">
                        <h1 className="md:text-xl text-orange-400">Property Management Software</h1>
                    </div>
                    <div className=" top-24 md:left-20 left-4  p-1 flex flex-col md:space-y-4 space-y-2">
                        <h1 className="font-bold md:text-6xl text-xl dark:text-white text-black">The Only Required </h1>
                        <h1 className="font-bold md:text-5xl text-xl dark:text-white text-black">Property Management Software</h1>
                        <div className="md:w-[500px] w-[340px] md:pt-12 pt-3">
                            <p className="md:text-xl dark:text-white text-black"><span className="font-bold md:text-2xl text-lg">MaliCloud</span> bridges the gap between Landlords, Property Managers and Tenants. 
                                Choose this Software today to simplify your property management with powerful, simple to use tools at your fingertips. 
                            </p>
                        </div>
                        <div className="flex md:pt-12 md:gap-8 gap-4">
                            <Link to='/signup'>
                                <Button className='md:w-[200px] w-[150px] md:h-[50px] h-[40px] text-xl border dark:text-orange-400 text-white dark:bg-zinc-950 dark:border-white dark:hover:bg-zinc-900 bg-black hover:bg-zinc-900'>
                                Get Started
                                </Button>
                            </Link>
                            <Link to='/demo'>
                                <Button className='md:w-[200px] w-[150px] md:h-[50px] h-[40px] text-xl border dark:text-orange-400 text-white dark:bg-zinc-950 dark:border-white dark:hover:bg-zinc-900 bg-black hover:bg-zinc-900'>
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
            
            <div className="md:flex gap-[100px] mt-[60px] dark:text-white text-black p-5">
                <div className="p-2">
                    <h4 className="text-orange-500 text-xl p-4">Accounting</h4>
                    <h1 className="md:text-4xl text-xl font-bold p-2">Manage Accounting details with ease</h1>
                    <p className="md:text-2xl text-lg p-2">Set up invoices, send receipts, and create financial reports so you can track every last penny.</p>
                    <ul className="list-disc p-6 md:text-xl">
                        <li className="p-2">Automate invoices, late fees and more</li>
                        <li className="p-2">Customizable and pre-templated reports</li>
                        <li className="p-2">Connect back accounts and sync with QuickBooks</li>
                    </ul>
                </div>
                <div className="dark:md:bg-zinc-800 bg-zinc-400 rounded-full">
                    <img src="/images/accounting.png" alt="Accounting screenshot" className="md:w-[650px] w-[300px] md:h-[400px] h-[200px] md:p-8"/>
                </div>
            </div>

            <div className="md:flex gap-[170px] mt-[120px] p-5">
                <div className="p-2 dark:md:bg-zinc-800 bg-zinc-400 rounded-full">
                    <img src="/images/maintenance.png" alt="maintenance screenshot" className="md:w-[750px] w-[300px] md:h-[400px] h-[200px] md:p-8" />
                </div>
                <div className="p-2 dark:text-white text-black">
                    <h4 className="text-orange-500 text-xl p-4">Maintenance</h4>
                    <h1 className="md:text-4xl text-xl font-bold p-2">Put rent collection on auto-pilot</h1>
                    <p className="md:text-2xl text-lg">No need to waste time tracking down rent payments. Give tenants a flexible, easy way to pay online.</p>
                    <ul className="list-disc p-6 md:text-xl">
                        <li className="p-2">Includes credit, debit, and ACH payment options as well as cash and check.</li>
                        <li className="p-2">Accept full or partial payments</li>
                        <li className="p-2">Track paid and overdue invoices</li>
                    </ul>
                </div>
            </div>

            <div className="md:flex gap-[170px] mt-[120px] p-5">
                <div className="dark:text-white text-black">
                    <h4 className="text-orange-500 text-xl p-4">Lease management</h4>
                    <h1 className="md:text-4xl text-xl p-2 font-bold ">Keep track of all Leases as they are released.</h1>
                    <p className="md:text-2xl">Reduce the needed man power to stay on track with lease agreements by letting MaliCloud handle the heavy work.</p>
                    <ul className="list-disc p-6 md:text-xl">
                        <li>Create, update and manage lease agreements</li>
                        <li>Sign agreements on the website</li>
                        <li>Review and approve leases, monitor lease expirations and track renewals</li>
                        <li>Notify tenants on expiring leases</li>
                    </ul>
                </div>
                <div className="dark:md:bg-zinc-800 bg-zinc-400 md:w-[650px] h-[400px] rounded-full"></div>
            </div>

            <div className="flex flex-col justify-center p-5 mt-[120px] items-center dark:bg-zinc-950 bg-zinc-100 shadow-lg dark:shadow-gray-800 shadow-black">
                <div className="flex gap-2 dark:text-white text-black items-center justify-center pt-2">
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                    <Star className="bg-orange-500 rounded-full"/>
                </div>
                <div className="left-[180px] flex items-center gap-16 dark:text-white text-black">
                    <img src="/images/ai.jpeg" alt="me" className=" left-[200px] w-[120px] h-[120px] rounded-3xl mt-4" />
                    <div className="w-[400px]">
                        <p>"MaliCloud is the best tool I have worked with so far to manage my properties. MaliCloud is the best tool i have worked with so far to manage my properties.
                        MaliCloud is the best tool i have worked with so far to manage my properties."
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center mt-[80px]">
                <p className=" dark:text-white text-black text-">Click below to start your free trial</p>
                <Link to='/signup'>
                    <Button className='w-30 h-16 text-2xl items-center font-bold'>Get Started</Button>
                </Link>
            </div>

            <div className="flex justify-center items-center gap-8 mt-[120px]">
                <Card className='bg-red-400 w-[400px] h-[200px] border-none bg-opacity-50'>
                    <div className='text-center font-bold dark:text-white flex justify-center gap-2 p-4 items-center'>
                        <h1>Without MaliCloud</h1> 
                        <Frown/>
                    </div>
                    <CardContent>
                    <ul className="list-disc p-4">
                        <li>Maintenance and Repairs Delay</li>
                        <li>Poor tenant Communication</li>
                        <li>Financial mismanagement and budget overruns</li>
                    </ul>
                    </CardContent>
                </Card>
                <Card className='bg-green-400 w-[400px] h-[200px] border-none bg-opacity-50'>
                    <div className='font-bold dark:text-white flex gap-2 justify-center p-4 items-center'>
                        <h1>With MaliCloud</h1>  
                        <SmilePlus/> 
                    </div>
                    <CardContent>
                    <ul className="list-disc p-4">
                        <li>Track maintenance with automated status updates</li>
                        <li>Communicate with tenants in real time</li>
                        <li>Manage all finances in one place</li>
                    </ul>
                    </CardContent>
                </Card>
            </div>
            

            <div className="flex justify-center mt-[120px] mb-20">
                <Card className="dark:text-white text-black w-[850px]">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl font-bold">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger className='text-xl'>What is rental property management software?</AccordionTrigger>
                                <AccordionContent className='text-lg'>
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
                                <AccordionTrigger className='text-xl'>Why do you need property management software?</AccordionTrigger>
                                <AccordionContent className='text-lg'>
                                    TenantCloud simplifies administrative, marketing, and other business operations for property managers who oversee multiple rental properties. 
                                    TenantCloud allows users to post property listings, sign lease agreements online with the help of electronic signatures, advertise rentals, receive rent payments via credit card, debit card, or ACH, and receive and resolve maintenance requests from tenants, among many other features.
                                    Using our property management software, managers and owners can speed up the leasing process to keep more of their properties occupied with quality tenants. 
                                    TenantCloud is a dynamic platform that equips property managers with everything they need to launch, operate, communicate with tenants, and expand.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-3'>
                                <AccordionTrigger className='text-xl'>Who can use rental property management software?</AccordionTrigger>
                                <AccordionContent className='text-lg'>
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
                                <AccordionTrigger className='text-xl'>What features should you look for in rental property management software? </AccordionTrigger>
                                <AccordionContent className='text-lg'>
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
                                <AccordionTrigger className='text-xl'>What problems does property management software solve? </AccordionTrigger>
                                <AccordionContent className='text-lg'>
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
            
            <Card className='relative h-[600px] dark:bg-zinc-900 bg-zinc-300 rounded-none'>
                <CardHeader>
                    <CardTitle className='flex items-center'>
                        <img src="/images/cloud-transparent.png" alt="logo" className="md:w-[70px]"/>
                        <h1>MaliCloud</h1> 
                    </CardTitle>
                </CardHeader>
                <div className="absolute bottom-5 left-[120px] pt-10 flex justify-between items-center gap-[800px]">
                    <div>
                        <p className="text-sm">&copy; 2024 maliCloud. All rights reserved.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link className="hover:scale-110 hover:text-zinc-500">
                            <X/>
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
                <div className="absolute right-12 top-2 grid grid-cols-4 grid-flow-col justify-center gap-4 p-">
                    <div className="p-2">
                        <h1 className="text-xl font-bold p-4">Features</h1>
                        <ul className="flex flex-col gap-3">
                            <Link>
                                <li className="hover:text-green-500">Online Payments</li>
                            </Link>
                            <Link>
                                <li className="hover:text-green-500">Tenant Screening</li>
                            </Link>
                            <Link>
                                <li className="hover:text-green-500">Listing Website</li>
                            </Link>
                            <Link>
                                <li className="hover:text-green-500">Premium Leads</li>
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
                        <h1 className="text-xl font-bold p-4">Company</h1>
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
                        <h1 className="text-xl font-bold p-4">Use cases</h1>
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
                        <h1 className="font-bold text-xl p-4">Resources</h1>
                        <ul className="flex flex-col gap-3">
                            <Link>
                                <li className="hover:text-green-500">Landlord Resources</li>
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
            </Card>

            <div>
                <div className="absolute bottom-[1450px] left-[60px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400  transform rotate-45"></div>
                <div className="absolute bottom-[650px] left-[60px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400  transform rotate-45"></div>
            </div>
            <div>
                <div className="absolute bottom-[1200px] right-[100px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
                <div className="absolute bottom-[850px] right-[100px] w-24 h-24 dark:bg-zinc-900 bg-zinc-400 transform rotate-45"></div>
            </div>
        </div>
        </>
     )
}

export default LandingPage;