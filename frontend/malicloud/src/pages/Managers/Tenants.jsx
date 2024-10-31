import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  SelectGroup, 
  SelectLabel,
 } from '@/components/ui/select';

export default function Tenants() {
  return (
    <>
    <Helmet>
      <title>Tenants - MaliCloud</title>
    </Helmet>
    <Header/>
      <div className='ml-[120px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-8 mt-8'>
            <h1 className='text-xl font-bold'>Tenants</h1>
            <Select>
              <SelectTrigger className='md:w-[100px] w-[70px] border-none focus-none'>
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
            <Button className='flex gap-3 bg-green-600 hover:bg-green-700'>
              <Plus className='w-6 h-6'/>
              Add Tenant
            </Button>
          </div>
        </div>
        <div className='relative mt-8'>
          <Search className='absolute md:left-2 md:top-1 md:h-5 md:w-5 text-muted-foreground'/>
          <Input 
          type='search'
          placeholder='Search...' 
          className='md:w-[150px] md:h-[25px] focus:border-none pl-9'/>
        </div>
      </div>
    </>
    
  )
}
