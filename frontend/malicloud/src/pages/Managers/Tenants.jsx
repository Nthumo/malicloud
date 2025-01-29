import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/common/Header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowDown, Search, MessageCircle, Users, EllipsisVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar';
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  SelectGroup, 
  SelectLabel,
 } from '@/components/ui/select';


 // Sample data

 const tenants = [
  {
    id: 1,
    name: 'Adam Jones',
    phone: '+25412345678',
    propertiesCount: 2,
    avatarUrl: '/avatars/1.jpg',
  }, 
  {
    id: 2,
    name: 'Jane Doe',
    phone: '+25422323232',
    propertiesCount: 1,
    avatarUrl: '/avatars/2.jpg'
  },
  {
    id:3,
    name: 'John Doe',
    phone: '+25428282839',
    propertiesCount: 8,
    avatarUrl: '/avatars/3.jpg',
  },
  {
    id:4,
    name: 'Morage George',
    phone: '+25454729031',
    propertiesCount: 2,
    avatarUrl: '/avatars/4.jpg',
  },
  {
    id:4,
    name: 'Caleb Matt',
    phone: '+25400089032',
    propertiesCount: 3,
    avatarUrl: '/avatars/5.jpg',
  },
  {
    id:4,
    name: 'Caleb Matt',
    phone: '+25456789032',
    propertiesCount: 1,
    avatarUrl: '/avatars/6.jpg',
  },
  {
    id:4,
    name: 'Caleb Matt',
    phone: '+25456789011',
    propertiesCount: 9,
    avatarUrl: '/avatars/7.jpg',
  },
  {
    id:4,
    name: 'Caleb Matt',
    phone: '+25456782222',
    propertiesCount: 1,
    avatarUrl: '/avatars/8.jpg',
  },

 ]

export default function Tenants() {
  return (
    <>
    <Helmet>
      <title>Tenants - MaliCloud</title>
    </Helmet>
    <Header/>
      <div className='md:ml-[120px] ml-16 md:mr-10 mr-4 mb-4'>
        <div className='flex items-center md:gap-8 gap-4 md:mt-6 mt-4'>
          <h1 className='md:text-xl text-lg font-bold'>Tenants</h1>
          <h1 className='font-bold text-orange-500 md:text-[16px] text-[13px]'>Total 10</h1>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center md:gap-8 mt-8 '>
            <div className='relative focus:outline-1 focus:ring-3 mb-4'>
              <Search className='absolute md:left-2 left-1 md:top-1 top-1.5 md:h-5 h-4 md:w-5 w-4 text-muted-foreground'/>
              <Input 
              type='search'
              placeholder='Search...' 
              className='md:w-[150px] w-[100px] h-[25px] pl-9 focus:ring-3 focus:border-none dark:border-white border-black'/>
            </div>
            <Select>
              <SelectTrigger className='focus:ring-3 w-[100px] hidden'>
                <SelectValue placeholder='Sort by'/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='a-z'>A-Z</SelectItem>
                <SelectItem value='modified'>Modified</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex md:gap-4 gap-2'>
            <Button className='flex md:gap-2 gap-1 md:h-[34px] h-[30px] md:w-[90px] w-[80px]'>
              <ArrowDown className='w-5 h-5'/>
              <p className='md:text-[13px] text-[11px]'>Import</p>
            </Button>
            <Link to='/manager/add-tenant'>
              <Button className='flex md:gap-3 gap-1 bg-green-600 hover:bg-green-700 md:h-[34px] h-[30px] md:w-[123px] w-[100px]'>
                <Plus className='w-5 h-5'/>
                <p className='md:text-[13px] text-[11px]'>Add Tenant</p>
              </Button>
            </Link>
          </div>
        </div>
        
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 m md:mt-8 mt-10'>
        {tenants.map((tenant) => (
            <CardContent className='p-0'>
                <div key={tenant.id} className='shadow-sm dark:shadow-white shadow-black rounded-lg p-4'>
                  <div className='flex justify-between'>
                    <Users className='h-6 w-6'/>
                    <div className='flex items-center gap-2'>
                      <MessageCircle className='h-6 w-6 cursor-pointer'/>
                      <Menubar className='border-none p-0'>
                        <MenubarMenu className=''>
                          <MenubarTrigger className='cursor-pointer'>
                            <EllipsisVertical className='h-6 w-6'/>
                          </MenubarTrigger>
                          <MenubarContent>
                            <MenubarItem>Edit</MenubarItem>
                            <Separator/>
                            <MenubarItem>Remove Connection</MenubarItem>
                            <Separator/>
                            <MenubarItem>Move in</MenubarItem>
                            <Separator/>
                            <MenubarItem>Add invoice</MenubarItem>
                            <Separator/>
                            <MenubarItem>Add insurance</MenubarItem>
                            <Separator/>
                            <MenubarItem className='text-muted'>Archive</MenubarItem>
                            <Separator/>
                            <MenubarItem className='text-red-500'>Delete</MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                    </div>
                  </div>
                  <div className='flex flex-col items-center text-center'>
                    <img 
                    src={tenant.avatarUrl} 
                    alt={tenant.name} 
                    className='w-16 h-16 rounded-full object-cover'
                    />
                    <h3 className='font-bold mt-4'>{tenant.name}</h3>
                    <p className='underline'>{tenant.phone}</p>
                    <p className='font-bold mt-4'>{tenant.propertiesCount} properties</p>
                    <Separator className='mt-4 '/>
                    <Link to='/manager/tenant-profile'>
                      <Button className='bg-transparent hover:bg-transparent text-green-500 dark:hover:text-green-600 hover:text-gray-700'>
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
            </CardContent>
          ))}
        </div>
      </div>
    </>
  )
}
