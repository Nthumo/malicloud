import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { List, Search, SquareMenu, Pin, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

export default function Reports() {
  return (
    <>
    <Helmet>
      <title>Reports - MaliCloud</title>
    </Helmet>
    <Header/>
      <div className='ml-[200px] w-[1050px] mb-12'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Reports</h1>
          <List/>
        </div>
        <div className='relative mt-5'>
          <Search className='absolute left-2 top-1 w-5 h-5'/>
          <Input
          type='search'
          placeholder='Search...'
          className='w-[150px] h-[25px] pl-10 focus:border-none border-gray-600'
          />
        </div>
        <Separator className='mt-4'/>
        <div>
          <div>
            <div className='flex items-center gap-2 mt-6'>
              <SquareMenu/>
              <h1 className='text-lg font-bold'>Rental</h1>
              <span className='text-muted-foreground text-orange-500 text-sm pl-3'>(8 Reports)</span>
              <Separator className='ml-12 w-[840px] bg-gray-400'/>
            </div>
            <p className='mt-6'>These reports provide key insights and data about performance and of rental properties, occupancy rates, rental income, lease details, maintenance and repair costs and are essential to make informed decisions.</p>
          </div>
          <div className='grid grid-cols-3 mt-6 gap-7'>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
                <Pin className='h-5 w-5 dark:fill-gray-500 fill-black dark:text-gray-500'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Rentability</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
                <Star className='h-5 w-5 dark:fill-gray-500 fill-black dark:text-gray-500'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Contacts information</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
                <Star className='h-5 w-5 dark:fill-gray-500 fill-black dark:text-gray-500'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Lease Statements</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
              <Star className='h-5 w-5 dark:fill-gray-500 fill-black dark:text-gray-500'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Maintenance Requests</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
              <Star className='h-5 w-5'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Provider Statement</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
              <Star className='h-5 w-5'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Rent Roll</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
              <Star className='h-5 w-5'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Tenant Screening</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200 border-none'>
              <CardContent className='flex gap-3 p-2'>
              <Star className='h-5 w-5 '/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Tenant Statement</h1>
                  <p className='text-sm'>Rental</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-2 mt-14'>
            <SquareMenu/>
            <h1 className='text-lg font-bold'>Financial</h1>
            <span className='text-muted-foreground text-orange-500 text-sm pl-3'>(13 Reports)</span>
            <Separator className='ml-12 w-[810px] bg-gray-400 '/>
          </div>
          <p className='mt-6'>These reports provide a comprehensive overview of the financial health, operational efficiency, and market position of rental properties, helping property managers and owner make data-driven decisions.</p>
          <div className='grid grid-cols-3 mt-6 gap-7'>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star fill='black' className='h-5 w-5 dark:fill-gray-500 dark:text-gray-500'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>General expenses</h1>
                  <p className='text-sm'>Financial</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star fill='black' className='h-5 w-5 dark:fill-gray-500 dark:text-gray-500'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Online payments</h1>
                  <p className='text-sm'>Financial</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star fill='black' className='h-5 w-5 dark:fill-gray-500 dark:text-gray-500'/>
                <div className='flex flex-col'>
                  <h1 className='font-bold'>Tax preparation</h1>
                  <p className='text-sm'>Financial</p>
                </div>
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star className='h-5 w-5 fill-black dark:fill-gray-500 dark:text-gray-500'/>
                Hello
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star className='h-5 w-5 dark:text-gray-500'/>
                Hello
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star className='h-5 h-5 dark:text-gray-500'/>
                Hello
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star className='h-5 h-5 dark:text-gray-500'/>
                Hello
              </CardContent>
            </Card>
            <Card className='dark:bg-zinc-900 bg-zinc-200'>
              <CardContent className='flex gap-3 p-2'>
                <Star className='h-5 h-5 dark:text-gray-500'/>
                Hello
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
