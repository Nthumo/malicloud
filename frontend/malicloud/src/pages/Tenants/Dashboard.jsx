import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import LiveDate from '@/components/common/LiveDate';
import Header from '@/components/common/Header';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Download, FileKey } from 'lucide-react';

const leases = [
  {
    property: 'Fine House',
    leaseStart: '01/03/2024',
    leaseEnd: '24/11/2024',
    status: 'Active',
  },
  {
    property: 'UpperHill House',
    leaseStart: '01/01/2022',
    leaseEnd: '31/08/2024',
    status: 'Expired',
  },
  {
    property: 'Embu House',
    leaseStart: '01/01/2022',
    leaseEnd: '31/12/2024',
    status: 'Active',
  },
  {
    property: `Murang'a House`,
    leaseStart: '01/11/2020',
    leaseEnd: '31/01/2022',
    status: 'Expired',
  }
]

export default function Dashboard() {
  return (
    <>
    <div className=' h-svh'>
      <Helmet>
        <title>Dashboard - Tenant</title>
      </Helmet>
      <Header/>
      <div className='md:ml-16 ml-12'>
        <div className=''>
          <div className='flex justify-center md:mt-0 mt-2'>
            <Card className='h-24 md:w-[300px] border-none shadow-sm dark:shadow-white shadow-black'>
                <CardHeader>
                    <CardTitle className='text-orange-500 md:text-lg text-sm text-center md:mb-2'>Welcome back <span className='dark:text-white text-black'>[John Doe]</span></CardTitle>
                    <CardDescription className='text-white text-center'>
                      <LiveDate/>
                    </CardDescription>
                </CardHeader>
            </Card> 
          </div>
  
          <div className='relative md:mt-5 mt-4 md:grid grid-cols-2 gap-36 md:space-y-0 space-y-6'>
            <Card className='md:h-[500px] h-[350px] md:w-[650px] w-[330px] border-none dark:bg-zinc-900 bg-zinc-300 md:rounded-none overflow-auto'>
                <CardHeader className='md:p-3 p-2'>
                    <CardTitle className='text-orange-500 md:text-xl text-[13px] font-bold'>Leases</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                  {leases.map((lease, index) => (
                    <div key={index} className='dark:text-white flex justify-between gap-3 items-center py-2 border-b'>
                        <div className='flex flex-col'>
                          <span className='md:font-semibold md:text-[15px] text-[12px]'>{lease.property}</span>
                          <span className='md:text-sm text-[11px] dark:text-gray-400 text-gray-600'>{lease.leaseStart} - {lease.leaseEnd}</span>
                        </div>
                        <span className=''>
                          <HoverCard>
                            <HoverCardTrigger >
                              <a href=""><Download className='md:w-[30px] w-[18px]'/></a>
                              <HoverCardContent className='dark:bg-zinc-900 dark:text-white w-[70px] h-[30px] flex items-center justify-center text-sm'>Download</HoverCardContent>
                            </HoverCardTrigger>
                          </HoverCard>
                        </span>
                        <span className=''>
                          <HoverCard>
                            <HoverCardTrigger>
                              <a href=""><FileKey className='md:w-[30px] w-[18px]'/></a>
                              <HoverCardContent className='dark:bg-zinc-900 dark:text-white w-[50px] h-[30px] text-center flex items-center justify-center text-sm'>Open</HoverCardContent>
                            </HoverCardTrigger>
                          </HoverCard>
                        </span>
                        <span className={`md:text-sm text-[11px] ${lease.status=== 'Active' ? 'text-green-700' : 'text-red-700'}`}>
                          {lease.status}
                        </span>
                    </div>
                  ))
                  }
                </CardContent>
            </Card> 

            <Card className='md:h-[500px] h-[] md:w-[580px] w-[330px] border-none dark:bg-zinc-900 bg-zinc-300 md:rounded-none overflow-auto'>
              <CardHeader className='md:p-3 p-2'>
                <CardTitle className='text-orange-500 md:text-xl text-[13px] font-bold'>Recently Viewed</CardTitle>
              </CardHeader>
                <CardContent className='flex flex-col gap-3'>
                  <Link to='#'>
                    <Card className='group dark:bg-zinc-950 border-none md:h-[96px] dark:text-white md:hover:scale-105'>
                      <CardContent className='flex justify-between items-center md:p-2 p-1'>
                        <img src="/images/house1.jpeg" alt="house1"  
                        className='md:w-[60px] w-[58px] md:h-[80px] h-[78px] rounded-lg ml-2'
                        />
                        <CardHeader className='flex items-center'>
                          <CardTitle className='md:text-sm text-[11px] dark:text-white text-black'>Fine House</CardTitle>
                          <CardDescription className='md:text-sm text-[9px]'>377 Fine Estate 377 Fine Estate 377 Fine Estate</CardDescription>
                        </CardHeader>
                        <Badge className={`bg-green-700 hover:bg-green-800 md:text-[10px] text-[9px]`}>Vacant</Badge>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link to='#'>
                    <Card className='group dark:bg-zinc-950 border-none md:h-[96px] text-white md:hover:scale-105'>
                        <CardContent className='flex justify-between items-center md:p-2 p-1'>
                          <img src="/images/house2.jpeg" alt="house1"
                          className=' md:w-[60px w-[58px] md:h-[80px] h-[78px] rounded-lg ml-2'
                          />
                          <CardHeader className='flex items-center'>
                            <CardTitle className='md:text-sm text-[11px] dark:text-white text-black'>UpperHill House</CardTitle>
                            <CardDescription className='md:text-sm text-[9px]'>
                              377 UpperHill Estate 377 UpperHill Estate 377 UpperHill Estate
                            </CardDescription>
                          </CardHeader>
                          <Badge className={`bg-red-700 hover:bg-red-800 md:text-[10px] text-[9px]`}>Occupied</Badge>
                        </CardContent>
                    </Card>
                  </Link>

                  <Link to='#'>
                    <Card className='group dark:bg-zinc-950 border-none md:h-[96px] text-white md:hover:scale-105'>
                        <CardContent className='flex justify-between items-center md:p-2 p-1'>
                          <img src="/images/house3.jpeg" alt="house1" 
                          className=' md:w-[60px w-[58px] md:h-[80px] h-[78px] rounded-lg ml-2'
                          />
                          <CardHeader className='flex items-center'>
                            <CardTitle className='md:text-sm text-[11px] dark:text-white text-black'>Embu House</CardTitle>
                            <CardDescription className='md:text-sm text-[9px]'>
                              111 Embu Estate 111 Embu Estate 111 Embu Estate
                            </CardDescription>
                          </CardHeader>
                          <Badge className={`bg-green-700 hover:bg-green-800 md:text-[10px] text-[9px]`}>Vacant</Badge>
                        </CardContent>
                    </Card>
                  </Link>

                  <Link to='#'>
                    <Card className='group dark:bg-zinc-950 border-none md:h-[96px] text-white md:hover:scale-105'>
                        <CardContent className='flex justify-between items-center md:p-2 p-1'>
                          <img src="/images/house4.jpeg" alt="house1" 
                          className='md:w-[60px w-[58px] md:h-[80px] h-[78px] rounded-lg ml-2'
                          />
                          <CardHeader className='flex items-center'>
                            <CardTitle className='md:text-sm text-[11px] dark:text-white text-black'>Murang'a House</CardTitle>
                            <CardDescription className='md:text-sm text-[9px]'>
                              32 Murang'a Estate 32 Murang'a Estate 32 Murang'a Estate
                            </CardDescription>
                          </CardHeader>
                          <Badge className={`bg-red-700 hover:bg-red-800 md:text-[10px] text-[9px]`}>Occupied</Badge>
                        </CardContent>
                    </Card>
                  </Link>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
