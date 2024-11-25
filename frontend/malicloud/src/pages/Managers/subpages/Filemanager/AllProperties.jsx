import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from '@/components/ui/table';
import { ArrowUp, Ellipsis } from 'lucide-react';

export default function AllProperties() {
  return (
    <div>
        <Card>
            <CardContent className='p-0'>
                <Table>
                    <TableHeader>
                        <TableRow className='dark:bg-zinc-900 bg-zinc-200 hover:bg-object'>
                            <TableHead>Type</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className='flex items-center'>
                                Size 
                                <ArrowUp className='h-4'/>
                            </TableHead>
                            <TableHead>
                                <h1 className='flex items-center'>Date <ArrowUp className='h-4'/></h1>
                            </TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className='hover:bg-object'>
                            <TableCell>jpg</TableCell>
                            <TableCell>tt.jpeg</TableCell>
                            <TableCell>123.45 KB</TableCell>
                            <TableCell>Mar 20, 2024</TableCell>
                            <TableCell><Ellipsis className='w-5'/></TableCell>
                        </TableRow>
                        <TableRow className='hover:bg-object'>
                            <TableCell>pdf</TableCell>
                            <TableCell>Basic Residential Lease Agreement_White_2024.</TableCell>
                            <TableCell>123.45 KB</TableCell>
                            <TableCell>Mar 20, 2024</TableCell>
                            <TableCell><Ellipsis className='w-5'/></TableCell>
                        </TableRow>
                        <TableRow className='hover:bg-object'>
                            <TableCell>npg</TableCell>
                            <TableCell>Agreement</TableCell>
                            <TableCell>654.00 KB</TableCell>
                            <TableCell>Mar 20, 2024</TableCell>
                            <TableCell><Ellipsis className='w-5'/></TableCell>
                        </TableRow>
                        <TableRow className='hover:bg-object'>
                            <TableCell>jpg</TableCell>
                            <TableCell>Hello.jpeg</TableCell>
                            <TableCell>12.45 KB</TableCell>
                            <TableCell>Mar 20, 2024</TableCell>
                            <TableCell><Ellipsis className='w-5'/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  )
}
