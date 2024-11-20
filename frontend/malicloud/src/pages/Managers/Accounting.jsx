import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Circle, CircleCheck, CircleChevronLeft, MoveUp, Ellipsis } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableCell,TableBody } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

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
            <SelectContent >
              <SelectItem value='Transactions' className='text-lg'>Transactions</SelectItem>
              <SelectItem value='Balances' className='text-lg'>Balances</SelectItem>
              <SelectItem value='Recurring' className='text-lg'>Recurring</SelectItem>
              <SelectItem value='Tools' className='text-lg'>Tools</SelectItem>
            </SelectContent>
          </Select>
          <div className='mt-6'>
            {selectedCategory === 'Transactions' && (
              <>
               <div className='flex gap-6'>
                <Card className='w-[300px] h-[60px] border-none dark:bg-zinc-900 bg-zinc-200 p-2'>
                  <h1 className='text-[14px] '>Outstanding</h1>
                  <CardContent className='p-0'>
                    <p className='font-bold text-xl'>Ksh. 20000</p>
                  </CardContent>
                </Card>
                <Card className='w-[300px] h-[60px] border-none dark:bg-zinc-900 bg-zinc-200 p-2'>
                  <h1 className='text-[14px] '>Paid</h1>
                  <CardContent className='p-0'>
                    <p className='font-bold text-xl'>Ksh. 30000</p>
                  </CardContent>
                </Card>
                <Card className='w-[300px] h-[60px] border-none dark:bg-zinc-900 bg-zinc-200 p-2'>
                  <h1 className='text-[14px] '>Overdue</h1>
                  <CardContent className='p-0'>
                    <p className='font-bold text-xl'>Ksh. 30000</p>
                  </CardContent>
                </Card>
              </div>
              <div className='relative mt-4 ml-0'>
                <Search className='absolute left-2 top-1 h-5 w-5 text-muted-foreground'/>
                <Input
                type='search'
                placeholder='Search...'
                className='w-[150px] h-[25px] focus:border-none dark:border-gray-500 border-black pl-9'
                />
              </div>
              <div>
                <Tabs defaultValue='all' className='mt-4'>
                  <TabsList className='gap-14'>
                    <TabsTrigger value='all'>All</TabsTrigger>
                    <TabsTrigger value='income'>Income</TabsTrigger>
                    <TabsTrigger value='expenses'>Expenses</TabsTrigger>
                  </TabsList>
                  <TabsContent value='all'>
                    <div>
                      <Card className='w-[950px] mb-8'>
                        <CardContent className='p-0'>
                        <Table>
                          <TableHeader>
                            <TableRow className='dark:hover:bg-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 bg-zinc-100 w-full'>
                              <TableHead>Status</TableHead>
                              <TableHead className='flex gap-1 items-center'>Due date <MoveUp className='h-4 w-4'/></TableHead>
                              <TableHead>Category & property</TableHead>
                              <TableHead>Contact</TableHead>
                              <TableHead>Total</TableHead>
                              <TableHead>Paid</TableHead>
                              <TableHead></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className='hover:bg-transparent'>
                            <TableRow className='hover:bg-transparent'>
                              <TableCell>August 2024</TableCell>
                            </TableRow>
                            <TableRow className=' hover:bg-transparent'>
                              <TableCell>
                                <Badge variant='outline' className='bg-green-300 hover:bg-green-300 text-green-800 border-none'>
                                  <CircleCheck className='h-4 w-4 text-green-500' stroke='currentColor' fill='green'/> 
                                  <p className='pl-1'>Paid</p>
                                </Badge>
                              </TableCell>
                              <TableCell>Aug 1</TableCell>
                              <TableCell className='flex flex-col'>
                                Acquisition
                                <span className='text-[12px] text-muted-foreground'>Fine House</span>
                              </TableCell>
                              <TableCell>Jane Doe</TableCell>
                              <TableCell>- ksh.20000</TableCell>
                              <TableCell>ksh. 300</TableCell>
                              <div className='mt-10'>
                                <Ellipsis className='h-5 w-5 '/>
                              </div>
                            </TableRow>
                            <TableRow className='hover:bg-transparent'>
                              <TableCell>
                                <Badge variant='destructive' className='bg-red-300 hover:bg-red-300 text-red-500 border-none'>
                                  <CircleChevronLeft className='h-4 w-4 text-red-400' fill='red'/>
                                  <p className='pl-1'>Overdue</p>
                                </Badge>
                              </TableCell>
                              <TableCell>Aug 1</TableCell>
                              <TableCell className='flex flex-col'>
                                Acquisition
                                <span className='text-[12px] text-muted-foreground'>Murang'a House</span>
                              </TableCell>
                              <TableCell>Jane Doe</TableCell>
                              <TableCell>- ksh.20000</TableCell>
                              <TableCell>ksh. 300</TableCell>
                              <div className='mt-10'>
                                <Ellipsis className='h-5 w-5 '/>
                              </div>
                            </TableRow>
                            <TableRow className='hover:bg-transparent'>
                              <TableCell>
                                <Badge  className='bg-gray-200 hover:bg-gray-200 text-gray-600 border-none'>
                                  <Circle className='h-4 w-4 text-gray-500' fill='gray'/>
                                  <p className='pl-1'>Open</p>
                                </Badge>
                              </TableCell>
                              <TableCell>Aug 1</TableCell>
                              <TableCell className='flex flex-col'>
                                Closing costs
                                <span className='text-[12px] text-muted-foreground'>Murang'a House</span>
                              </TableCell>
                              <TableCell>Jane Doe</TableCell>
                              <TableCell>- ksh.20000</TableCell>
                              <TableCell>ksh. 300</TableCell>
                              <div className='mt-10'>
                                <Ellipsis className='h-5 w-5 '/>
                              </div>
                            </TableRow>
                            <TableRow className='hover:bg-transparent'>
                              <TableCell>July 2024</TableCell>
                            </TableRow>
                            <TableRow className='hover:bg-transparent'>
                              <TableCell >
                                <Badge variant='outline' className='bg-green-300 hover:bg-green-300 text-green-800 border-none'>
                                  <CircleCheck className='h-4 w-4 text-green-500' stroke='currentColor' fill='green'/> 
                                  <p className='pl-1'>Paid</p>
                                </Badge>
                              </TableCell>
                              <TableCell>Aug 1</TableCell>
                              <TableCell className='flex flex-col'>
                                Management fess
                                <span className='text-[12px] text-muted-foreground'>Fine House</span>
                              </TableCell>
                              <TableCell>Jane Doe</TableCell>
                              <TableCell>- ksh.20000</TableCell>
                              <TableCell>ksh. 300</TableCell>
                              <div className='mt-10'>
                                <Ellipsis className='h-5 w-5 '/>
                              </div>
                            </TableRow>
                            <TableRow className='hover:bg-transparent'>
                              <TableCell >
                                <Badge variant='destructive' className='bg-red-300 hover:bg-red-300 text-red-500 border-none'>
                                  <CircleChevronLeft className='h-4 w-4 text-red-400' fill='red'/>
                                  <p className='pl-1'>Overdue</p>
                                </Badge>
                              </TableCell>
                              <TableCell>Aug 1</TableCell>
                              <TableCell className='flex flex-col'>
                                Tenant charges & fees
                                <span className='text-[12px] text-muted-foreground'>UpperHill House</span>
                              </TableCell>
                              <TableCell>Jane Doe</TableCell>
                              <TableCell>- ksh.20000</TableCell>
                              <TableCell>ksh. 300</TableCell>
                              <div className='mt-10'>
                                <Ellipsis className='h-5 w-5 '/>
                              </div>
                            </TableRow>
                            <TableRow className='hover:bg-transparent'>
                              <TableCell >
                                <Badge  className='bg-gray-200 hover:bg-gray-200 text-gray-600 border-none'>
                                  <Circle className='h-4 w-4 text-gray-500' fill='gray'/>
                                  <p className='pl-1'>Open</p>
                                </Badge>
                              </TableCell>
                              <TableCell>Aug 1</TableCell>
                              <TableCell className='flex flex-col'>
                                Closing costs
                                <span className='text-[12px] text-muted-foreground'>Embu House</span>
                              </TableCell>
                              <TableCell>Jane Doe</TableCell>
                              <TableCell>- ksh.20000</TableCell>
                              <TableCell>ksh. 300</TableCell>
                              <div className='mt-10'>
                                <Ellipsis className='h-5 w-5 '/>
                              </div>
                            </TableRow>
                          </TableBody>
                        </Table>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value='income'>
                    <div>
                      Income
                    </div>
                  </TabsContent>
                  <TabsContent value='expenses'>
                    <div>
                      Expenses
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              </>
             
            )}
            {selectedCategory === 'Balances' && (
              <div>
                Balances
              </div>
            )}
            {selectedCategory === 'Recurring' && (
              <div>
                Recurring
              </div>
            )}
            {selectedCategory === 'Tools' && (
              <div>
                Management tools
              </div>
            )}
          </div>
        </div>
      </div>
    </>
    
  )
}
