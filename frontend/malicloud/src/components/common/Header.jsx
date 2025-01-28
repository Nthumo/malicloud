import React from 'react';
import { Link } from 'react-router-dom';
import { User, CircleUser, MessageCircle, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { 
    DropdownMenu,   
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger, } 
    from '../ui/dropdown-menu';
import { useDarkMode } from '@/hooks/UseDarkMode';
import {SunIcon, MoonIcon} from '@radix-ui/react-icons'

export default function Header() {
    const [theme, toggleTheme] = useDarkMode();

  return (
    <>
    <div className='relative flex items-center md:h-[60px] border-b md:mb-4'>
        <div className='flex items-center md:ml-14 ml-10'>
            <Link to='/' className="flex items-center">
                <img src="/images/cloud-transparent.png" alt="logo" className='md:w-[100px] w-[40px]'/>
                <h1 className='md:text-xl font-bold dark:text-white text-black'>MaliCloud</h1>
            </Link>
            <div className='flex md:gap-8 gap-4 relative md:left-12 left-4 items-center'>
                <Bell className='dark:text-white text-black md:w-7 w-5 md:h-7 h-5'/>
                <MessageCircle className='dark:text-white text-black md:w-7 w-5 md:h-7 h-5'/>
            </div>
        </div>

        <div className='absolute md:right-8 right-2'>
            <button 
            onClick={toggleTheme}
            >
            {theme === 'dark' ?<MoonIcon className="md:w-5 w-4 md:h-5 h-4"/>: <SunIcon className="text-black dark:text-white rounded "/>} 
            </button>
        </div>

        <div className='absolute md:right-16 right-9 flex items-center gap-2  p-2 rounded-xl'>
            <h4 className='md:font-bold md:text-[14px] text-[12px] dark:text-white text-black'>Profile</h4>
            <DropdownMenu className=''>
                <DropdownMenuTrigger asChild>
                    <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full md:w-10 md:h-10 h-8 w-8"
                    >
                        <img 
                        src="/images/cloud2.png" 
                        alt="malicloud " 
                        className='overflow-hidden rounded-full'
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='dark:bg-zinc-800 dark:text-white'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='flex gap-2'><span className='font-bold text-xl'>+</span> Add Account</DropdownMenuItem>
                    <DropdownMenuItem className='flex gap-2'>
                        <CircleUser className='w-6'/>
                        Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
    </>
  )
}
