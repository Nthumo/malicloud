import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import {
     LayoutDashboard, 
     HousePlus, 
     DollarSign, 
     Wrench, 
     Files,
    } from 'lucide-react';

    
 function TenantSidebar() {
  return (
    <>
    <div className='fixed z-50 group  dark:bg-zinc-800 bg-zinc-300 h-screen dark:dark:text-white transition-all duration-300 md:w-16 w-12 md:hover:w-48'>
        <div className='pt-20'>
            <ul className='flex flex-col gap-8 md:p-2 p-1'>
                <Link
                    to='/tenant'
                    className='flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 rounded-xl'
                    >
                    <li className='flex items-center p-2 '>
                        <span className=''><LayoutDashboard className='md:w-8 w-6 md:h-8 h-6'/></span>
                        <span side='right' className='md:block hidden ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:dark:text-white font-semibold'>Dashboard</span>                        
                    </li>
                </Link>
                <Link
                    to='/tenant/applications'
                    className='flex gap-2 items-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 rounded-xl'
                    >
                    <li className='flex items-center gap-2 p-2 '>
                        <HousePlus className='md:w-8 w-6 md:h-8 h-6'/>
                        <span side='right' className='md:block hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:text-white font-semibold'>Applications</span>
                    </li>
                </Link>

                <Link
                    to='/tenant/transactions'
                    className='flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 rounded-lg'
                    >
                    <li className='flex items-center gap-2 p-2 '>
                        <DollarSign className='md:w-8 w-6 md:h-8 h-6'/>
                        <span side='right' className='md:block hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:text-white font-semibold'>Rent</span>                            
                    </li>
                </Link>

                <Link
                    to='/tenant/maintenance'
                    className='flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 rounded-lg'
                    >
                    <li className='flex items-center p-2 gap-2 '>
                        <Wrench className='md:w-8 w-6 md:h-8 h-6'/>
                        <span side='right' className='md:block hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:text-white font-semibold'>Maintenance</span>                           
                    </li>
                </Link>

                <Link
                    to='/tenant/file-manager'
                    className='flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 rounded-lg'
                    >
                <li className='flex items-center p-2 gap-2 '>
                    <Files className='md:w-8 w-6 md:h-8 h-6'/>
                    <span side='right' className='md:block hidden opacity-0 dark:text-white text-sm group-hover:opacity-100 transition-opacity duration-300 font-semibold'>Files</span>
                </li>
                </Link>
            </ul>

        </div>
    </div>
    <main className='flex-1 grid items-start gap-4 p-4'>
        <Outlet />
    </main>
    </>
  )
}
export default TenantSidebar;