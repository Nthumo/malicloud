import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { Select, SelectContent, SelectItem, SelectTrigger, } from '@/components/ui/select';
import Transactions from './subpages/Transactions';
import Balances from './subpages/Balances';
import Recurring from './subpages/Recurring';
import ManagementTools from './subpages/ManagementTools';

export default function Accounting() {
  const[selectedCategory, setSelectedCategory] = useState('Transactions');

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  }

  return (
    <>
    <Helmet>
      <title>Accounting - MaliCloud</title>
    </Helmet>
      <Header/>
      <div className='ml-[200px] mt-8'>
        <div className=''>
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className='font-bold w-[145px] border-none focus:outline-1 focus:ring-3 text-[16px]'>
              {selectedCategory}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Transactions' className='text-lg'>Transactions</SelectItem>
              <SelectItem value='Balances' className='text-lg'>Balances</SelectItem>
              <SelectItem value='Recurring' className='text-lg'>Recurring</SelectItem>
              <SelectItem value='Tools' className='text-lg'>Management tools</SelectItem>
            </SelectContent>
          </Select>
          <div className='mt-6'>
            {selectedCategory === 'Transactions' && (
              <>
              <Transactions/>
              </>
            )}
            {selectedCategory === 'Balances' && (
              <>
              <Balances/>
              </>
            )}
            {selectedCategory === 'Recurring' && (
              <>
                <Recurring/>
              </>
            )}
            {selectedCategory === 'Tools' && (
              <>
                <ManagementTools/>
              </>
            )}
          </div>
        </div>
      </div>
    </>
    
  )
}
