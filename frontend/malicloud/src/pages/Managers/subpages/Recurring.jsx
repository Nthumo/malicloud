import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MoveUp, CircleMinus } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function Recurring() {
  return (
    <>
    <div className='relative'>
        <Search className='absolute left-2 top-1.5 h-4 w-4'/>
        <Input
        className='w-[150px] h-[25px] pl-8 focus:border-none dark:border-gray-500 border-black '
        />
    </div>
    <div>
        <Tabs defaultValue='All' className='mt-4'>
            <TabsList className='w-[400px] h-[50px] gap-16'>
                <TabsTrigger value='All' className='data-[state=active]:bg-transparent data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-black'>All</TabsTrigger>
                <TabsTrigger value='Income' className='data-[state=active]:bg-transparent data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-black'>Income</TabsTrigger>
                <TabsTrigger value='Expenses' className='data-[state=active]:bg-transparent data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-black'>Expenses</TabsTrigger>
            </TabsList>
            <TabsContent value='All'>
                <Card className='mt-4 w-[1050px] h-[400px]'>
                    <Table>
                        <TableHeader>
                            <TableRow className='dark:bg-zinc-900 bg-zinc-200 hover:bg-zinc-200'>
                                <TableHead>Status</TableHead>
                                <TableHead className='flex items-center'>Next Date <MoveUp className='h-4 w-4'/></TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Category & Property</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead className='flex items-center'><MoveUp className='h-4 w-4'/> Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className='hover:bg-transparent'>
                                <TableCell>
                                    <Badge variant='destructive' className=''>
                                        <CircleMinus className='w-4 h-4'/> 
                                        <p className='pl-2'>Ended</p>
                                    </Badge>
                                </TableCell>
                                <TableCell>Jul 11</TableCell>
                                <TableCell>Income/Monthly</TableCell>
                                <TableCell className='flex flex-col'>
                                    Rent
                                    <span className='test-[12px] text-muted-foreground'>Hope House</span>
                                </TableCell>
                                <TableCell>Jane Doe</TableCell>
                                <TableCell>Ksh. 30000</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </TabsContent>
            <TabsContent value='Income'>
                <Card className='mt-4 w-[1050px] h-[400px]'>
                    <div className='text-center'>
                        Income Content
                    </div>
                </Card>
            </TabsContent>
            <TabsContent value='Expenses'>
                <Card className='mt-4 w-[1050px] h-[400px]'>
                    <div className='text-center'>
                        Expenses Content
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
    </>
  )
}
