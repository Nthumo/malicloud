import React from 'react';
import Header from '@/components/common/Header';
import { Helmet } from 'react-helmet-async';
import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Leases() {
  return (
    <>
      <div>
        <Helmet>
          <title>Leases - MaliCloud</title>
        </Helmet>
        <Header/>
      </div>
    
      <div className='ml-[200px]'>
        <div className='flex justify-between w-[1050px]'>
          <h1 className='text-lg font-semibold'>Leases</h1>
          <Button className='flex gap-1 bg-green-500 hover:bg-object'>
            <Plus className='h-5 w-5'/>
            New Lease
          </Button>
        </div>
        <div className='flex gap-12 mt-8'>
          <Card className='bg-green-500 bg-opacity-40 w-[150px] border-none'>
            <CardContent className='p-2'>
              <h1 className='text-lg'>Active</h1>
              <p className='text-3xl font-semibold'>14</p>
            </CardContent>
          </Card>
          <Card className='w-[150px] bg-gray-500 bg-opacity-40 border-none'>
            <CardContent className='p-2'>
              <h1 className='text-lg'>Upcoming</h1>
            <p className='text-3xl font-semibold'>30</p>
            </CardContent>
          </Card>
          <Card className='w-[150px] bg-yellow-500 bg-opacity-50 border-none'>
            <CardContent className='p-2'>
              <h1 className='text-lg'>Pending</h1>
            <p className='text-3xl font-semibold'>55</p>
            </CardContent>
          </Card>
          <Card className='w-[150px] bg-red-500 bg-opacity-40 border-none'>
            <CardContent className='p-2'>
              <h1 className='text-lg'>Expired</h1>
            <p className='text-3xl font-semibold'>140</p>
            </CardContent>
          </Card>
        </div>
        <div className='relative mt-5'>
          <Search className='absolute left-2 top-1.5 h-4 w-4'/>
          <Input
          type='search'
          placeholder='Search...'
          className='w-[150px] h-[25px] pl-8 focus:border-none border-gray-600'
          />
        </div>
          <Card className='w-[1050px] h-[400px] mt-4'>
            <CardContent className='p-0'>
              <Table className=''>
              <TableHeader>
                <TableRow className='dark:bg-zinc-900 bg-zinc-200 hover:bg-zinc-200'>
                  <TableHead>Status</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead>End</TableHead>
                  <TableHead>Frequency & Property</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Rent</TableHead>
                  <TableHead>Deposit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className='hover:bg-transparent'>
                  <TableCell>
                    <Badge variant='outline' className='bg-green-500 text-green-200 border-none'>Paid</Badge>
                  </TableCell>
                  <TableCell>Jan 2024</TableCell>
                  <TableCell>Aug 2024</TableCell>
                  <TableCell className='flex flex-col'>
                    Monthly
                    <span className='text-muted-foreground text-[12px]'>Fine House</span>
                  </TableCell>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>Ksh. 30000</TableCell>
                  <TableCell>Ksh. 15000</TableCell>
                </TableRow>
                <TableRow className='hover:bg-transparent'>
                  <TableCell>
                    <Badge variant='destructive' className='border-none'>Overdue</Badge>
                  </TableCell>
                  <TableCell>Jan 2024</TableCell>
                  <TableCell>Aug 2024</TableCell>
                  <TableCell className='flex flex-col'>
                    Monthly
                    <span className='text-muted-foreground text-[12px]'>Fine House</span>
                  </TableCell>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>Ksh. 30000</TableCell>
                  <TableCell>Ksh. 15000</TableCell>
                </TableRow>
                <TableRow className='hover:bg-transparent'>
                  <TableCell>
                    <Badge variant='outline' className='bg-gray-600 border-none'>Upcoming</Badge>
                  </TableCell>
                  <TableCell>Jan 2024</TableCell>
                  <TableCell>Aug 2024</TableCell>
                  <TableCell className='flex flex-col'>
                    Monthly
                    <span className='text-muted-foreground text-[12px]'>Fine House</span>
                  </TableCell>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>Ksh. 30000</TableCell>
                  <TableCell>Ksh. 15000</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </CardContent>
          </Card>
      </div>
    </>
  )
}

