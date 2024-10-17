import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from '@/components/ui/select';
import { ArrowUp } from 'lucide-react';
import { data } from 'autoprefixer';
import RequestStatus from '@/components/managers/piecharts/RequestStatus';
import IssueTypes from '@/components/managers/barcharts/IssueTypes';
import RequestsTrendAnalysis from '@/components/managers/linecharts/RequestsTrendAnalysis';



const requestData = [
  {ID:48828, property: `Murang'a House`, issue_type: 'Electrical', request_date:'10/10/2024', priority_level:'urgent', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/01/2024', priority_level:'normal', status:'pending'},
  {ID:11118, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/01/2024', priority_level:'normal', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/06/2024', priority_level:'normal', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/08/2024', priority_level:'emergency', status:'cancelled'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'10/09/2024', priority_level:'normal', status:'new'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'11/10/2024', priority_level:'normal', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'14/11/2024', priority_level:'emergency', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'16/12/2024', priority_level:'normal', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'20/05/2024', priority_level:'normal', status:'completed'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'21/10/2024', priority_level:'normal', status:'new'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'11/06/2024', priority_level:'emergency', status:'new'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'16/08/2024', priority_level:'normal', status:'pending'},
  {ID:11128, property: `Fine House`, issue_type: 'Plumbing', request_date:'18/03/2024', priority_level:'normal', status:'cancelled'},
]


export default function Maintenance() {

  //process the data to count occurences of each status
  const statusCount = requestData.reduce((acc, item) => {
    const status = item.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  // convert the Counts into an array suitable for the piechart
  const chartData = Object.keys(statusCount).map(key => ({
    status: key,
    value: statusCount[key],
  }));

  console.log(requestData);
  console.log(chartData);
  return (
    <>
    <Helmet>
      <title>Maintenance - MaliCloud</title>
    </Helmet>
    <Header/>
    <div className='ml-32 mt-4 text-xl font-bold'>Maintenance</div>
    <div className='ml-32 flex mt-4 gap-24'>
        <Card className='w-[160px] dark:text-gray-400 text-gray-800 bg-gray-400 bg-opacity-30 border-none'>
          <CardHeader className='p-2 text-center'>
            <CardTitle className='text-lg dark:text-white'>Total Requests</CardTitle>
          </CardHeader>
          <CardContent className='p-2'>
            <p className='text-2xl font-bold'>24</p>
          </CardContent>
        </Card>
        <Card className='w-[160px] dark:text-green-300 text-green-800 dark:bg-green-900 bg-green-600 bg-opacity-70 border-none'>
          <CardHeader className='p-2 text-center'>
            <CardTitle className='text-xl dark:text-white'>Complete <span className='text-[10.5px] italic'>- (requests)</span></CardTitle>
          </CardHeader>
          <CardContent className='p-2'>
             <p className='text-2xl font-bold'>11</p>
          </CardContent>
        </Card>
        <Card className='w-[160px] dark:text-yellow-300 text-yellow-800 dark:bg-yellow-400 bg-yellow-500 dark:bg-opacity-30 bg-opacity-50 border-none'>
          <CardHeader className='p-2 text-center'>
            <CardTitle className='text-lg dark:text-white'>Pending <span className='text-[10.5px] italic'>- (requests)</span></CardTitle>
          </CardHeader>
          <CardContent className='p-2'>
            <p className='text-2xl font-bold'>22</p>
          </CardContent>
        </Card>
        <Card className='w-[160px] dark:text-red-300 text-red-800 bg-red-500 dark:bg-opacity-30 bg-opacity-50 border-none'>
          <CardHeader className='p-2 text-center '>
            <CardTitle className='text-lg dark:text-white'>Urgent <span className='text-[10.5px] italic'>- (requests)</span></CardTitle>
          </CardHeader>
          <CardContent className='p-2'>
            <p className='text-2xl font-bold'>211</p>
          </CardContent>
        </Card>
        <Card className='w-[160px] dark:bg-amber-800 bg-amber-600 dark:text-amber-400 text-amber-300 dark:bg-opa border-none'>
          <CardHeader className='p-2 text-center'>
            <CardTitle className='text-lg dark:text-white'>Cancelled <span className='italic text-[10.5px]'>- (requests)</span></CardTitle>
          </CardHeader>
          <CardContent className='p-2'>
            <p className='text-2xl font-bold'>10</p>
          </CardContent>
        </Card>
    </div>
    <div className='relative ml-32 mt-8 mb-8 w-[1200px]'>
      <div className='flex justify-between'>
        <div className='border-black'>
          <Search 
          className='absolute h-5 w-5 top-2 left-2'
          />
          <Input
          type='search'
          placeholder='Search here..'
          className='w-[220px] h-[30px] pl-10 dark:border-gray-400 border-black'
          />
        </div>
        <div>
          <Select>
            <SelectTrigger className='border-black dark:border-gray-400'>
              <SelectValue placeholder='Sort by'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='issue'>Issue type</SelectItem>
              <SelectItem value='urgency'>Urgency</SelectItem>
              <div className=''>
                <SelectItem value='date' className='flex items-center'><ArrowUp className='h-4 w-4 absolute right-4'/> Date</SelectItem>
              </div>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      
      <Card className='mt-4'>
        <CardHeader className='text-sm p-4'>
          <CardTitle>Recent requests</CardTitle>
        </CardHeader>
        <Table >
          <TableHeader className='dark:bg-zinc-900 bg-zinc-300 dark:hover:bg-zinc-900'>
            <TableRow className='text-white'>
              <TableHead>ID</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Issue type</TableHead>
              <TableHead>Request Date</TableHead>
              <TableHead>Priotity Level</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Urgent</TableCell>
              <TableCell>
                <Badge className='text-white tp-0 dark:bg-green-700 dark:hover:bg-green-600 bg-green-800 hover:bg-green-700 w-[75px]'>Completed</Badge>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>
                <Badge className='text-white dark:bg-yellow-700 bg-yellow-600 hover:bg-yellow-500 dark:hover:bg-yellow-600 w-[75px] flex justify-center'>Pending</Badge>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>
                <Badge className=' dark:bg-gray-700 text-white bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-600 w-[75px] flex justify-center'>New</Badge>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>
                <Badge className=' dark:bg-blue-700 dark:hover:bg-blue-600 bg-blue-600 hover:bg-blue-500 w-[75px] flex justify-center text-white'>In progress</Badge>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>
                <Badge className=' dark:bg-red-700 dark:hover:bg-red-600 bg-red-600 hover:bg-red-500  w-[75px] flex justify-center text-white '>Cancelled</Badge>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>
                <Badge className=' dark:bg-gray-700 text-white bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-600 w-[75px] flex justify-center'>New</Badge>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Plumbing</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>
                <Badge className=' dark:bg-red-700 text-white bg-red-600 hover:bg-red-500 dark:hover:bg-red-600 w-[75px] flex justify-center'>Cancelled</Badge>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>48828</TableCell>
              <TableCell>Murang'a House</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>10/10/2024</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>
                <Badge className=' dark:bg-blue-700 text-white bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-600 w-[75px] flex justify-center'>In progress</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <div className='flex mt-28 gap-8'>
        <RequestStatus/>
       <IssueTypes/>
      </div>
      <div className='mt-4 flex justify-center'>
        <RequestsTrendAnalysis/>
      </div>
    </div>
    </>
  )
}
