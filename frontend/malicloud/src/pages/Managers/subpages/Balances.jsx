import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableCell} from '@/components/ui/table';
import { MoveUp, Ellipsis} from 'lucide-react';


export default function Balances() {
  return (
    <>
    <div>
        <Tabs defaultValue='0-30' className='mt-4'>
        <TabsList className='w-[600px] h-[50px] gap-16'>
            <TabsTrigger value='0-30' className='data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-black data-[state=active]:bg-transparent'>0-30 days</TabsTrigger>
            <TabsTrigger value='30-60' className='data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-black data-[state=active]:bg-transparent'>30-60 days</TabsTrigger>
            <TabsTrigger value='60-90' className='data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-black  data-[state=active]:bg-transparent'>60-90 days</TabsTrigger>
            <TabsTrigger value='all time' className='data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-black  data-[state=active]:bg-transparent'>All time</TabsTrigger>
        </TabsList>
        <TabsContent value='0-30'>
            <Card className='mt-4 h-[400px] w-[1050px]'>
            <CardContent className='p-0'>
                <Table className=''>
                    <TableHeader>
                    <TableRow className='dark:bg-zinc-900 dark:hover:bg-zinc-900 bg-zinc-200 hover:bg-zinc-200'>
                        <TableHead className='flex items-center gap-2'>Outstanding balance <MoveUp className='h-4 w-4'/></TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableRow className='hover:bg-transparent'>
                    <TableCell>Ksh. 30000</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className='flex gap-2'>
                        Send notice <Ellipsis/>
                    </TableCell>
                    </TableRow>
                    <TableRow className='hover:bg-transparent'>
                    <TableCell>Ksh. 30000</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className='flex gap-2'>
                        Send notice <Ellipsis/>
                    </TableCell>
                    </TableRow>
                    <TableRow className='hover:bg-transparent'>
                    <TableCell>Ksh. 30000</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className='flex gap-2'>
                        Send notice <Ellipsis/>
                    </TableCell>
                    </TableRow>
                    <TableRow className='hover:bg-transparent'>
                    <TableCell>Ksh. 30000</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className='flex gap-2'>
                        Send notice <Ellipsis/>
                    </TableCell>
                    </TableRow>
                </Table>
            </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value='30-60'>
            <Card className='mt-4 h-[400px] w-[1050px]'>
            <h1 className='text-center'>30-60 days</h1>
            </Card>
        </TabsContent>
        <TabsContent value='60-90'>
            <Card className='mt-4 h-[400px] w-[1050px]'>
            <h1 className='text-center'>60-90 days</h1>
            </Card>
        </TabsContent>
        <TabsContent value='all time'>
            <Card className='mt-4 h-[400px] w-[1050px]'>
            <h1 className='text-center'>All time</h1>
            </Card>
        </TabsContent>
        </Tabs>
    </div>
    </>
  )
}
