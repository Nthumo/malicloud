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


 // Smaple data

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
      <div className='ml-[120px]'>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-8 mt-8 ml-4'>
            <h1 className='text-xl font-bold'>Tenants</h1>
            <Select className='focus:ring-0 focus:outline-none'>
              <SelectTrigger className='md:w-[100px] w-[70px] border-none focus:ring-0 focus:outline-none'>
                <SelectValue placeholder='Sort by'/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='a-z'>A-Z</SelectItem>
                <SelectItem value='modified'>Modified</SelectItem>
              </SelectContent>
            </Select>
            <h1 className='font-bold text-orange-500'>Total 10</h1>
          </div>
          <div className='flex gap-4 mr-10'>
            <Button className='flex gap-2'>
              <ArrowDown className='w-5 h-5'/>
              Import
            </Button>
            <Link to='/manager/add-tenant'>
              <Button className='flex gap-3 bg-green-600 hover:bg-green-700'>
                <Plus className='w-6 h-6'/>
                Add Tenant
              </Button>
            </Link>
            
          </div>
        </div>
        <div className='relative mt-8 ml-4 focus:outline-none'>
          <Search className='absolute md:left-2 md:top-1 md:h-5 md:w-5 text-muted-foreground'/>
          <Input 
          type='search'
          placeholder='Search...' 
          className='md:w-[150px] md:h-[25px] pl-9 focus-visible:outline-none focus:ring-0 focus:border-none'/>
        </div>
        <div className='grid grid-cols-4 gap-2 mt-6'>
        {tenants.map((tenant) => (
            <CardContent>
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
                    <Button className='bg-transparent hover:bg-transparent text-green-500 dark:hover:text-green-600 hover:text-gray-700'>
                      View Profile
                    </Button>
                  </div>
                </div>
            </CardContent>
          ))}
        </div>
        
      </div>
    </>
    
  )
}
