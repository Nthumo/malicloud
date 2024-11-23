import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableRow, TableHeader, TableHead, TableCell } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Ellipsis } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

export default function ManagementTools() {
  return (
    <div>
        <Card className='mt-4 h-[400px] w-[1050px]'>
            <CardContent>
                <Tabs defaultValue='management fees' className='bg-transparent mt-4'>
                    <TabsList className='bg-transparent gap-16'>
                        <TabsTrigger value='management fees' className='data-[state=active]:bg-transparent data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-orange-500'>
                            <p className='mb-2'>Management fees</p>
                        </TabsTrigger>
                        <TabsTrigger value='owner distribution' className='data-[state=active]:bg-transparent data-[state=active]:border-b-[4px] dark:data-[state=active]:border-white data-[state=active]:border-orange-500'>
                            <p className='mb-2'>Owner distributions</p>
                        </TabsTrigger>
                    </TabsList>
                <TabsContent value='management fees'>
                    <Table  className='mt-4 border rounded-lg'>
                        <TableHeader>
                            <TableRow className='dark:bg-zinc-900 bg-zinc-200 dark:hover:bg-zinc-900 hover:bg-trransparent'>
                                <TableHead><Checkbox/></TableHead>
                                <TableHead>ID</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Due date</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Property</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Paid</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className='hover:bg-transparent'>
                                <TableCell><Checkbox/></TableCell>
                                <TableCell>432...</TableCell>
                                <TableCell>
                                    <Badge variant='outline'>
                                        Overdue
                                    </Badge>
                                </TableCell>
                                <TableCell>Jun 2, 2024</TableCell>
                                <TableCell>Management fees</TableCell>
                                <TableCell>Hope House</TableCell>
                                <TableCell>Ksh. 30000</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value='owner distribution'>
                    <Card className='h-[300px] w-[1000px]'>
                        <CardContent>
                            <div className='text-center'>
                                Owner distribution content
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </div>
  )
}
