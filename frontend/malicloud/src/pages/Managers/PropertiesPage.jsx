import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CircleDollarSign, Users, Wrench, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PropertiesPage() {
  return (
    <>
    <Helmet>
      <title>Properties - MaliCloud</title>
    </Helmet>
    <Header/>
      <div className='ml-[120px]'>
        <div className='flex gap-16 mt-4'>
        <h1 className=' text-lg font-bold'>Properties</h1>
        <Card className='flex justify-between gap-[820px] border-none '>
          <CardContent className='flex p-2 rounded-lg dark:bg-zinc-900 bg-zinc-300 h-10'>
            <h1 className='font-bold text-xl flex gap-8 items-center p-2'>Total <span className='text-orange-500'>4</span></h1>
          </CardContent>
          <Link to='/manager/properties/add-property'>
            <Button className='dark:bg-green-500 dark:hover:bg-green-600 border-none flex gap-2'>
              <Plus className='h-6 w-6'/>
              <h1>Add Property</h1>
            </Button>
          </Link>
          
        </Card>
        </div>
        
        <Card className='grid grid-cols-2 gap-y-12 mt-4 p-2 border-none'>
          <Card className='relative h-[200px] w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='p-2'>
              <span className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg'>
                <p className='text-[9px]'>Balance <span className='text-[11px]'>ksh: 20,000.00</span></p>
              </span>
              <div className='flex'>
                <img src="/images/house1.jpeg" alt="house1" className=' w-[120px] h-[170px] rounded-lg' />
                <span className='flex gap-[240px] ml-8'>
                  <h1>23 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>40%</span></h1>
                </span>
              </div>
              <span className='absolute left-[160px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className=' text-xl font-semibold underline hover:text-blue-900'>Fine House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 Fine Estate 377 Fine Estate 377 Fine Estate</h1>
              </span>
              <Card className='absolute bottom-4 left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Users/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <CircleDollarSign/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Wrench/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative h-[200px] w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='p-2'>
            <span className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg'>
                <p className='text-[9px]'>Balance <span className='text-[11px]'>ksh: 0.00</span></p>
              </span>
              <div className='flex'>
                <img src="/images/house2.jpeg" alt="house2" className='w-[120px] h-[170px] rounded-lg'/>
                <span className='flex gap-[240px] ml-8'>
                  <h1>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </span>
              </div>
              <span className='absolute left-[160px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='text-xl font-semibold underline hover:text-blue-900'>UpperHill House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 UpperHill Estate 377 UpperHill Estate 377 UpperHill Estate</h1>
              </span>
              <Card className='absolute bottom-4 left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Users/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <CircleDollarSign/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Wrench/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative h-[200px] w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='p-2'>
            <span className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg'>
                <p className='text-[9px]'>Balance <span className='text-[11px]'>ksh: 0.00</span></p>
              </span>
              <div className='flex'>
                <img src="/images/house6.jpeg" alt="house6" className='w-[120px] h-[170px] rounded-lg'/>
                <span className='flex gap-[240px] ml-8'>
                  <h1>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </span>
              </div>
              <span className='absolute left-[160px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='text-xl font-semibold underline hover:text-blue-900'>Our House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 UpperHill Estate 377 UpperHill Estate 377 UpperHill Estate</h1>
              </span>
              <Card className='absolute bottom-4 left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Users/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <CircleDollarSign/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Wrench/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative h-[200px] w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='p-2'>
            <span className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg'>
                <p className='text-[9px]'>Balance <span className='text-[11px]'>ksh: 0.00</span></p>
              </span>
              <div className='flex'>
                <img src="/images/house5.jpeg" alt="house5" className='w-[120px] h-[170px] rounded-lg'/>
                <span className='flex gap-[240px] ml-8'>
                  <h1>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </span>
              </div>
              <span className='absolute left-[160px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='text-xl font-semibold underline hover:text-blue-900'>My House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 UpperHill Estate 377 UpperHill Estate 377 UpperHill Estate</h1>
              </span>
              <Card className='absolute bottom-4 left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Users/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <CircleDollarSign/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Wrench/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative h-[200px] w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='p-2'>
            <span className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg'>
                <p className='text-[9px]'>Balance <span className='text-[11px]'>ksh: 0.00</span></p>
              </span>
              <div className='flex'>
                <img src="/images/house4.jpeg" alt="house4" className='w-[120px] h-[170px] rounded-lg'/>
                <span className='flex gap-[240px] ml-8'>
                  <h1>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </span>
              </div>
              <span className='absolute left-[160px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='text-xl font-semibold underline hover:text-blue-900'>Murang'a House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 UpperHill Estate 377 UpperHill Estate 377 UpperHill Estate</h1>
              </span>
              <Card className='absolute bottom-4 left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Users/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <CircleDollarSign/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Wrench/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative h-[200px] w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='p-2'>
            <span className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg'>
                <p className='text-[9px]'>Balance <span className='text-[11px]'>ksh: 0.00</span></p>
              </span>
              <div className='flex'>
                <img src="/images/house3.jpeg" alt="house3" className='w-[120px] h-[170px] rounded-lg'/>
                <span className='flex gap-[240px] ml-8'>
                  <h1>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </span>
              </div>
              <span className='absolute left-[160px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='text-xl font-semibold underline hover:text-blue-900'>Embu House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 UpperHill Estate 377 UpperHill Estate 377 UpperHill Estate</h1>
              </span>
              <Card className='absolute bottom-4 left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Users/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <CircleDollarSign/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center p-3'>
                      <Wrench/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
        </Card>
      </div>    </>
    
  )
}
