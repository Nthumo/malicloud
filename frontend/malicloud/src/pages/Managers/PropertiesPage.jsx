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
      <div className='md:ml-24 ml-12 md:mr-0 mr-4'>
        <div className='flex justify-between items-center md:mt-8 mt-4'>
          <div className='flex gap-4 items-center'>
            <h1 className=' md:text-lg text-sm font-bold'>Properties</h1>
            <div className='flex gap-2 items-center p-2 rounded-lg dark:bg-zinc-900 bg-zinc-300'>
              <h1 className='font-bold md:text-xl text-sm'>Total</h1>
              <span className='font-bold text-orange-500'>4</span>
            </div>
          </div>
          <div className='md:mr-20'>
            <Link to='/manager/properties/add-property'>
              <Button className='dark:bg-green-500 dark:hover:bg-green-600 border-none flex md:gap-2'>
                <Plus className='md:h-6 h-5 md:w-6 w-5'/>
                <h1 className='md:text-[13px] text-[11px]'>Add Property</h1>
              </Button>
            </Link>
          </div>
        </div>
        
        <Card className='md:grid grid-cols-2 gap-y-12 mt-4 p-2 border-none'>
          <Card className='relative md:h-[200px] h-[190px] md:w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='md:p-2 p-1'>
              <div className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg md:w-[120px] w-[90px] truncate'>
                <p className='text-[9px]'>Balance <span className='md:text-[11px]'>ksh: 20,000.00</span></p>
              </div>
              <div className='flex md:gap-8 gap-6'>
                <img src="/images/house1.jpeg" alt="house1" className='md:w-[120px] w-[90px] md:h-[170px] h-[120px] rounded-lg' />
                <div className='flex md:gap-[240px] gap-12'>
                  <h1 className='md:text-[14px] text-[12px]'>23 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold md:text-lg text-[14px]'>40%</span></h1>
                </div>
              </div>
              <div className='absolute md:left-[160px] left-[120px] md:top-[50px] top-[40px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='md:text-xl font-semibold underline hover:text-blue-900'>Fine House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground '>377 Fine Estate 377 Fine Estate 377 Fine Estate</h1>
              </div>
              <Card className='absolute md:bottom-4 bottom-1 md:left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Users className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <CircleDollarSign className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link to='/manager/requests/submit-request'>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Wrench className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative md:mt-0 mt-5 md:h-[200px] h-[190px] md:w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='md:p-2 p-1'>
            <div className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg md:w-[120px] w-[90px] truncate'>
                <p className='text-[9px]'>Balance <span className='md:text-[11px]'>ksh: 322330.00</span></p>
            </div>
              <div className='flex md:gap-8 gap-6'>
                <img src="/images/house2.jpeg" alt="house2" className='md:w-[120px] w-[90px] md:h-[170px] h-[120px] rounded-lg'/>
                <div className='flex md:gap-[240px] gap-12'>
                  <h1 className='md:text-[14px] text-[12px]'>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </div>
              </div>
              <span className='absolute md:left-[160px] left-[120px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='md:text-xl font-semibold underline hover:text-blue-900'>UpperHill House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 UpperHill Estate 377 UpperHill Estate 377 UpperHill Estate</h1>
              </span>
              <Card className='absolute md:bottom-4 bottom-1 md:left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Users className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <CircleDollarSign className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Wrench className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative md:mt-0 mt-5 md:h-[200px] h-[190px] md:w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='md:p-2 p-1'>
            <div className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg md:w-[120px] w-[90px] truncate'>
                <p className='text-[9px]'>Balance <span className='md:text-[11px]'>ksh:3320.00</span></p>
            </div>
              <div className='flex md:gap-8 gap-6'>
                <img src="/images/house2.jpeg" alt="house2" className='md:w-[120px] w-[90px] md:h-[170px] h-[120px] rounded-lg'/>
                <div className='flex md:gap-[240px] gap-12'>
                  <h1 className='md:text-[14px] text-[12px]'>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </div>
              </div>
              <span className='absolute md:left-[160px] left-[120px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='md:text-xl font-semibold underline hover:text-blue-900'>Our House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 Our Estate 377 Our Estate 377 Our Estate</h1>
              </span>
              <Card className='absolute md:bottom-4 bottom-1 md:left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Users className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <CircleDollarSign className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Wrench className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative md:mt-0 mt-5 md:h-[200px] h-[190px] md:w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='md:p-2 p-1'>
            <div className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg md:w-[120px] w-[90px] truncate'>
                <p className='text-[9px]'>Balance <span className='md:text-[11px]'>ksh:393939330.00</span></p>
            </div>
              <div className='flex md:gap-8 gap-6'>
                <img src="/images/house2.jpeg" alt="house2" className='md:w-[120px] w-[90px] md:h-[170px] h-[120px] rounded-lg'/>
                <div className='flex md:gap-[240px] gap-12'>
                  <h1 className='md:text-[14px] text-[12px]'>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </div>
              </div>
              <span className='absolute md:left-[160px] left-[120px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='md:text-xl font-semibold underline hover:text-blue-900'>My House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 My Estate 377 My Estate 377 My Estate</h1>
              </span>
              <Card className='absolute md:bottom-4 bottom-1 md:left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Users className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <CircleDollarSign className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Wrench className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative md:mt-0 mt-5 md:h-[200px] h-[190px] md:w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='md:p-2 p-1'>
            <div className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg md:w-[120px] w-[90px] truncate'>
                <p className='text-[9px]'>Balance <span className='md:text-[11px]'>ksh:22222220.00</span></p>
            </div>
              <div className='flex md:gap-8 gap-6'>
                <img src="/images/house2.jpeg" alt="house2" className='md:w-[120px] w-[90px] md:h-[170px] h-[120px] rounded-lg'/>
                <div className='flex md:gap-[240px] gap-12'>
                  <h1 className='md:text-[14px] text-[12px]'>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </div>
              </div>
              <span className='absolute md:left-[160px] left-[120px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='md:text-xl font-semibold underline hover:text-blue-900'>Murang'a House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 Murang'a Estate 377 Murang'a Estate 377 Murang'a Estate</h1>
              </span>
              <Card className='absolute md:bottom-4 bottom-1 md:left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Users className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <CircleDollarSign className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Wrench className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
          <Card className='relative md:mt-0 mt-5 md:h-[200px] h-[190px] md:w-[570px] p-2 shadow-sm dark:shadow-white shadow-black'>
            <CardContent className='md:p-2 p-1'>
            <div className='absolute top-6 p-1 bg-zinc-700 text-white rounded-r-lg md:w-[120px] md:w-[120px] w-[90px] truncate'>
                <p className='text-[9px]'>Balance <span className='md:text-[11px]'>ksh:111111111110.00</span></p>
            </div>
              <div className='flex md:gap-8 gap-6'>
                <img src="/images/house2.jpeg" alt="house2" className='md:w-[120px] w-[90px] md:h-[170px] h-[120px] rounded-lg'/>
                <div className='flex md:gap-[240px] gap-12'>
                  <h1 className='md:text-[14px] text-[12px]'>8 Units</h1>
                  <h1 className='text-sm'>Occupancy: <span className='font-bold text-lg'>0%</span></h1>
                </div>
              </div>
              <span className='absolute md:left-[160px] left-[120px] top-[50px] flex flex-col gap-2'>
                <Link to='/manager/properties/property-details'>
                  <h1 className='md:text-xl font-semibold underline hover:text-blue-900'>Embu House</h1>
                </Link>
                <h1 className='text-sm text-muted-foreground'>377 Embu Estate 377 Embu Estate 377 Embu Estate</h1>
              </span>
              <Card className='absolute md:bottom-4 bottom-1 md:left-[190px] flex gap-8 border-none'>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Users className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Tenants</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <CircleDollarSign className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>Accounting</h1>
                    </CardContent>
                  </Card>
                </Link>
                <Link>
                  <Card className='dark:hover:bg-zinc-900 hover:bg-zinc-300'>
                    <CardContent className='flex flex-col items-center md:p-3 p-1'>
                      <Wrench className='md:w-7 w-5 md:h-7 h-5'/>
                      <h1>MR requests</h1>
                    </CardContent>
                  </Card>
                </Link>
              </Card>
            </CardContent>
          </Card>
        </Card>
      </div>    
  </>
    
  )
}
