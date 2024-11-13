import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard,
  Building2,
  Users,
  ChartNoAxesCombined,
  Wrench,
  FileStack,
  Library,
  FolderClosed,
 } from 'lucide-react';

export default function ManagerSidebar() {
  return (
    <>
      <div className='fixed z-20 group dark:bg-zinc-800 bg-zinc-300 h-screen md:w-16 w-12 md:p-0 p-2 hover:w-48 transition-all duration-300'>
        <div className='pt-20'>
            <ul className='flex flex-col gap-6 md:gap-8 md:p-2'>
              <Link 
              to='/manager'
              className='dark:bg-zinc-950 p-1 bg-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-lg md:w-12 w-8 group-hover:w-40'
              >
                <li className='flex items-center gap-4'>
                  <span><LayoutDashboard className='md:w-8 w-6 md:h-8 h-6'/></span>
                  <span className='font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Dashboard</span>
                </li>
              </Link>
              <Link
              to='/manager/properties'
              className='bg-zinc-400 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 p-1 rounded-lg md:w-12 w-8 group-hover:w-40'
              >
                <li className='flex items-center gap-4'>
                  <span><Building2 className='md:w-9 w-6 md:h-8 h-6'/></span> 
                  <span className='font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Properties</span>
                </li>
              </Link>
              <Link 
              to='/manager/tenants'
              className='bg-zinc-400 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 p-1 rounded-lg md:w-12 w-8 group-hover:w-40'
              >
                <li className='flex items-center gap-4'>
                  <span><Users className='md:w-9 w-6 md:h-8 h-6'/></span> 
                  <span className='font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Tenants</span>
                </li>
              </Link>
              <Link 
              to='/manager/accounting'
              className='bg-zinc-400 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 p-1 rounded-lg md:w-12 w-8 group-hover:w-40'
              >
                <li className='flex items-center gap-4'>
                  <span><ChartNoAxesCombined className='md:w-9 w-6 md:h-8 h-6'/></span> 
                  <span className='font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Accounting</span>
                </li>
              </Link>
              <Link 
              to='/manager/requests'
              className='bg-zinc-400 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 p-1 rounded-lg md:w-12 w-8 group-hover:w-40'
              >
                <li className='flex items-center gap-4'>
                  <span><Wrench className='md:w-9 w-6 md:h-8 h-6'/></span> 
                  <span className='font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Maintenance</span>
                </li>
              </Link>
              <Link 
              to='/manager/leases'
              className='bg-zinc-400 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 rounded-lg p-1 md:w-12 w-8 group-hover:w-40'
              >
                <li className='flex items-center gap-4'>
                   <span><FileStack className='md:w-9 w-6 md:h-8 h-6'/></span> 
                   <span className='font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Leases</span>
                </li>
              </Link>
              <Link 
              to='/manager/reports'
              className='bg-zinc-400 hover:bg-zinc-200 dark:bg-zinc-950 dark:hover:bg-zinc-900 p-1 rounded-lg md:w-12 w-8 group-hover:w-40'
              >
                <li className='flex items-center gap-4'>
                  <span><Library className='md:w-9 w-6 md:h-8 h-6'/></span> 
                  <span className='font-sembold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Reports</span>
                </li>
              </Link>
              <Link 
              to='/manager/documents'
              className='bg-zinc-400 hover:bg-zinc-200 dark:bg-zinc-950 md:w-12 w-8 group-hover:w-40 dark:hover:bg-zinc-900 p-1 rounded-lg'
              >
              <li className='flex items-center gap-4'>
                <span className='md:text-lg'><FolderClosed className='md:w-9 w-6 md:h-8 h-6'/></span>
                <span className='font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Documents</span>
              </li>
              </Link>
            </ul>
        </div>
      </div>
    </>
    
  )
}
