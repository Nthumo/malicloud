import React from 'react';
import Header from '@/components/common/Header';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Users } from 'lucide-react';

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
        <div className='relative ml-28 mr-8'>
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
                <Card className='w-full border-none shadow-gray-700'>

                </Card>
            </div>
        </div>
    </>
    
  )
}
