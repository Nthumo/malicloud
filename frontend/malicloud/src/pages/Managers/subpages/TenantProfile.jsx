import React from 'react';
import Header from '@/components/common/Header';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Users, Plus, Ellipsis } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu,MenubarSeparator, MenubarTrigger } from '@radix-ui/react-menubar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


// sample data

const tenants =[
    {
        id: 1,
        name: 'Jane Doe',
        phoneNumber: '+25412345678',
        email: 'janedoe@gmail.com',
        avatarURL: '/avatars/1.jpg',
    }
]

export default function TenantProfile() {
  return (
    <>
    <Helmet>
        <title>MaliCloud - Tenant profile</title>
    </Helmet>
    <Header/>
        <div className='relative ml-[140px] mr-8'>
            <div className='flex gap-12 mb-8'>
                <Card className='w-[300px] shadow-gray-700 border-none'>
                    <div className='flex justify-between items-center'>
                        <h1 className='ml-4 text-lg font-bold mt-3'>Tenant</h1>
                        <Users className='mr-2 text-green-500'/>
                    </div>
                    <Separator className='mt-2 text-black'/>
                    <div>
                        {tenants.map((tenant) => (
                            <CardContent>
                                <div key={tenant.id}>
                                    <div className='mt-2 flex flex-col items-center'>
                                        <img 
                                        src={tenant.avatarURL} 
                                        alt={tenant.name} 
                                        className='w-20 h-20 rounded-full object-cover'
                                        />
                                        <h1 className='font-bold text-xl mt-2'>{tenant.name}</h1>
                                        <p className='underline mt-1'>{tenant.phoneNumber}</p>
                                        <p className='underline'>{tenant.email}</p>
                                    </div>
                                    <Card className='shadow-gray-400 border-none p-2 mt-3'>
                                        <div className='flex justify-between'>
                                            <p className='text-sm'>Outstanding</p>
                                            <p className='text-green-500 text-sm'>Receive</p>
                                        </div>
                                        <h1 className='font-bold mt-1'>Ksh. 30000</h1>
                                    </Card>
                                    <Card className='shadow-gray-400 border-none p-2 mt-3'>
                                        <div className='flex justify-between'>
                                            <p className='text-sm'>Deposits</p>
                                            <p className='text-green-500 text-sm'>Return</p>
                                        </div>
                                        <h1 className='font-bold mt-1'>Ksh. 30000</h1>
                                    </Card>
                                    <Card className='shadow-gray-400 border-none p-2 mt-3'>
                                        <div className='flex justify-between'>
                                            <p className='text-sm'>Credits</p>
                                            <p className='text-sm text-green-500'>Apply</p>
                                        </div>
                                        <h1 className='font-bold mt-1'>Ksh. 30000</h1>
                                    </Card>
                                    <h1 className='font-bold mt-3'>Reports</h1>
                                    <Card className='shadow-gray-400 border-none p-2 mt-3'>
                                        <div className='flex justify-between'>
                                            <p className='text-sm'>Financial</p>
                                            <p className='text-sm text-green-500'>View</p>
                                        </div>
                                        <h1 className='font-bold mt-1 text-[13px]'>Tenant Statement</h1>
                                    </Card>
                                    <Card className='shadow-gray-400 border-none p-2 mt-3'>
                                        <div className='flex justify-between'>
                                            <p className='text-sm'>Notice</p>
                                            <p className='text-sm text-green-500'>Send</p>
                                        </div>
                                        <h1 className='font-bold mt-1 text-[13px]'>Tenant Notice</h1>
                                    </Card>
                                    <h1 className='font-bold mt-3'>Payment Settings</h1>
                                </div>
                            </CardContent>
                        ))}
                    </div>
                </Card>
                <Card className='w-[800px] border-none shadow-gray-700'>
                    <div className='flex justify-between p-2'>
                        <div></div>
                        <div className='flex items-center gap-2'>
                            <Button className='flex gap-1.5 bg-green-600 hover:bg-green-700'>
                                <Plus className='h-5 w-5'/>
                                Add invoice
                            </Button>
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger className='flex gap-1.5 border dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-200 bg-zinc-100 p-2 rounded-lg'>
                                        Actions
                                        <Ellipsis className='h-5 w-5'/>
                                    </MenubarTrigger>
                                    <MenubarContent className='border dark:bg-zinc-900 bg-zinc-200 p-3 rounded-lg mr-[90px] mt-2'>
                                        <MenubarItem className='mb-2'>Edit</MenubarItem>
                                        <Separator/>
                                        <MenubarItem className='mt-2 mb-2'>Remove Connection</MenubarItem>
                                        <Separator/>
                                        <MenubarItem className='mt-2 mb-1'>Move in</MenubarItem>
                                        <Separator/>
                                        <MenubarItem className='mt-2 mb-1'>Manage bulk invoices</MenubarItem>
                                        <Separator/>
                                        <MenubarItem className='mt-2 mb-1'>Archive</MenubarItem>
                                        <Separator/>
                                        <MenubarItem className='text-red-700 mt-2'>Delete</MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </div>
                    </div>
                    <Separator className='mt-4'/>
                    <div className='p-2'>
                        <Tabs defaultValue='profile'>
                            <TabsList className='w-[700px] flex gap-6'>
                                <TabsTrigger value='profile' className='focus:border-b focus:bg-zinc-900'>Profile</TabsTrigger>
                                <TabsTrigger value='leases'>Leases</TabsTrigger>
                                <TabsTrigger value='transactions'>Transactions</TabsTrigger>
                                <TabsTrigger value='insurance'>Insurance</TabsTrigger>
                                <TabsTrigger value='applications'>Applications</TabsTrigger>
                                <TabsTrigger value='requests'>Requests</TabsTrigger>
                            </TabsList>
                            <TabsContent value='profile'>
                                <div className='mt-4 p-2'>
                                    <h1 className='font-bold text-lg'>Personal Information</h1>
                                    <div className='flex gap-[180px] p-2'>
                                        <ul className='mt-2'>
                                            <li className='flex gap-16 mt-2'>
                                                <h2 className='font-semibold'>First name</h2>
                                                <p className=''>Jane</p>
                                            </li>
                                            <li className='flex gap-16 mt-2'>
                                                <h2 className='font-semibold'>Middle name</h2>
                                                <p className=''>--</p>
                                            </li>
                                            <li className='flex gap-16 mt-2'>
                                                <h2 className='font-semibold'>Last name</h2>
                                                <p className=''>Doe</p>
                                            </li>
                                            <li className='flex gap-8 mt-2'>
                                                <h2 className='font-semibold'>Company name</h2>
                                                <p className=''>Phoenix Inc</p>
                                            </li>
                                            <li className='flex gap-10 mt-2'>
                                                <h2 className='font-semibold'>Date of birth</h2>
                                                <p className=''>Mar 16, 1994 | 30 y.o.</p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className='flex gap-28 mt-2'>
                                                <h2 className='font-semibold'>Email</h2>
                                                <p className=''>janedoe@gmail.com</p>
                                            </li>
                                            <li className='flex gap-24 mt-2'>
                                                <h2 className='font-semibold'>Additional email1</h2>
                                                <p className=''>--</p>
                                            </li>
                                            <li className='flex gap-24 mt-2'>
                                                <h2 className='font-semibold'>Phone</h2>
                                                <p className='underline'>+25412345678</p>
                                            </li>
                                            <li className='flex gap-8 mt-2'>
                                                <h2 className='font-semibold'>Additional Phone1</h2>
                                                <p className=''>--</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <Separator className='mt-4'/>
                                    <div className='p-2 mt-4'>
                                        <h1 className='font-bold text-lg'>Forwarding address</h1>
                                        <ul className='flex gap-16 mt-3 p-2'>
                                            <li className='font-semibold'>Property address</li>
                                            <li>123 Home Sweet Home, Yes Home 123456</li>
                                        </ul>
                                    </div>
                                    <Separator className='mt-4'/>
                                    <div className='p-2'>
                                        <h1 className='font-bold text-lg'>Emergency contacts</h1>
                                        <div className='p-2'>
                                            <h1 className='font-semibold'>John Doe</h1>
                                            <div className='flex gap-[180px]'>
                                                <ul className='p-2'>
                                                    <li className='flex gap-16 mt-2'>
                                                        <p className='font-semibold'>Relationship</p>
                                                        <p>brother</p>
                                                    </li>
                                                    <li className='flex gap-16 mt-2'>
                                                        <p className='font-semibold'>Email</p>
                                                        <p>johndoe@gmail.com</p>
                                                    </li>
                                                    <li className='mt-2'>
                                                        <p className='font-semibold'>Details</p>
                                                        <p>--</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className='flex gap-16'>
                                                        <p className='font-semibold'>Phone</p>
                                                        <p>+25487654321</p>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='leases'>
                                <div className='text-center'>
                                    Leases Content
                                </div>
                            </TabsContent>
                            <TabsContent value='transactions'>
                                <div className='text-center'>
                                    Transactions Content
                                </div>
                            </TabsContent>
                            <TabsContent value='insurance'>
                                <div className='text-center'>
                                    Insurance Content
                                </div>
                            </TabsContent>
                            <TabsContent value='applications'>
                                <div className='text-center'>
                                    Appliactions Content
                                </div>
                            </TabsContent>
                            <TabsContent value='requests'>
                                <div className='text-center'>
                                    Requests Content
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </Card>
            </div>
        </div>
    </>
    
  )
}
