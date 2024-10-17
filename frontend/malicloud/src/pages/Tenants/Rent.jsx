import React from 'react';
import Header from '@/components/common/Header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableCaption, 
  TableHeader, 
  TableHead, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardDescription, 
  CardTitle } 
  from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} 
  from '@/components/ui/dropdown-menu';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CircleX, Download, CircleCheck } from 'lucide-react';

function TenantRent() {
  return (
  <>
  <Helmet>
    <title>Accounting - Tenant</title>
  </Helmet>
    <Header/>
    <h1 className='absolute top-32 left-36 text-2xl font-bold'>Accounting</h1>
    <div className='relative top-12 grid gap-4'>
        <DropdownMenu className=''>
          <DropdownMenuTrigger className='border-none absolute right-12'>
            <button className='bg-green-600 dark:bg-green-900 hover:bg-green-500 dark:hover:bg-green-800 relative h-12 p-2 rounded-xl border-'>
              <h1 className='text-center dark:text-white text-black font-bold'>Make Payments</h1>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='dark:bg-zinc-900 p-4 flex flex-col gap-2'>
            <Link to='/recurring'>
              <Button className='dark:bg-zinc-800 dark:hover:bg-zinc-950 bg-zinc-300 hover:bg-zinc-400'>
                <div className='font-bold dark:text-white text-black'>
                  Recurring Payment
                </div>
              </Button>
            </Link>
            <Link to='/pay_once' className=''>
              <Button className='dark:bg-zinc-800 dark:hover:bg-zinc-950 bg-zinc-300 hover:bg-zinc-400'>
                <div className='font-bold dark:text-white text-black'>
                  One Time Payment
                </div>
              </Button>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>


      

      <div className='flex flex-col gap-4 absolute left-20 top-16'>
        <Card className='w-[900px] p-0 bg-zinc-300 dark:bg-zinc-900 border-none'>
          <CardHeader className=' relative top-0'>
            <div className='flex jusitfy-between'>
              <div className='dark:bg-zinc-800 bg-zinc-200 p-4 relative left-24 rounded-lg'>
              <CardTitle className='text-lg p-0 dark:text-white text-center '>Outstanding</CardTitle>
              <CardContent className='h-[30px]'>
                <div className='text-2xl font-bold p-0 text-orange-500 text-center'>
                Ksh. 10000
                </div>
              </CardContent>
              </div>
              <div className='dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4 relative left-[400px]'>
                <CardTitle className='text-lg p-0 dark:text-white text-center '>Total spend</CardTitle>
                <CardContent className='h-[30px]'>
                  <div className='text-2xl font-bold p-0 text-orange-500 text-center'>
                  Ksh. 100,3000
                  </div>
                </CardContent>
              </div>
              
              
            </div>
            
          </CardHeader>
        </Card>

      </div>
        
      <div className='absolute top-[200px] left-[70px] w-[900px] dark:bg-zinc-800 bg-zinc-300 rounded-lg mb-4'>
        <CardHeader>
          <CardTitle className='text-lg p-0'>Recent Transactions</CardTitle>
        </CardHeader>
        <Table className=' '>
          <TableHeader className=''>
            <TableRow className='text-center hover:bg-transparent'>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Total&Paid</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <Badge variant='outline' className='bg-green-500 border-none'>
                <div>Paid</div>
                </Badge>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.10000</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <Badge variant='outline' className='bg-zinc-900 border-none'>
                  <div className='text-white'>Open</div>
                </Badge>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.10000</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <Badge variant='outline' className='bg-white border-none'>
                <div className='text-black'>Partial</div>
                </Badge>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.10000</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <Badge variant='outline' className='bg-lime-600 border-none'>
                  <div className='text-white'>Refund</div>
                </Badge>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.10000</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <Badge variant='outline' className='bg-blue-700 border-none'>
                  <div className='text-white'>Pending</div>
                </Badge>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.10000</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <Badge variant='outline' className='bg-red-500 border-none'>
                  <div>Void</div>
                </Badge>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.0</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.0</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.0</div>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>31/12/2024</div>
              </TableCell>
              <TableCell>
                <div>Open</div>
              </TableCell>
              <TableCell>
                <div>Fine House</div>
              </TableCell>
              <TableCell>
                <div>finehouse.com</div>
              </TableCell>
              <TableCell>
                <div className='text-orange-500'>ksh.0</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Card className='absolute right-4 top-16 bg-zinc-300 dark:bg-zinc-900 w-[340px] h-[600px]'>
          <CardHeader className='p-2'>
            <CardTitle className='text-lg'>Receipts</CardTitle>
            <Separator/>
            <div className='flex items-center pt-4'>
              <Search className='absolute left-4 h-4 w-4'/>
              <Input
              type='search'
              placeholder='Search receipts...'
              className='w-[150px] h-[30px] pl-8'
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className='gap-4 flex flex-col pt-4'>
              <Table className=''>
                <TableRow className='bg-transparent hover:bg-zinc-300 bg-zinc-300 dark:bg-zinc-900'>
                  <TableHead className='dark:text-white text-black '>ID</TableHead>
                  <TableHead className='dark:text-white text-black text-sm'>Payment Date</TableHead>
                  <TableHead className='dark:text-white text-black'>Status</TableHead>
                  <TableHead className='dark:text-white text-black text-sm'>Download</TableHead>
                </TableRow>
                <TableBody className=' '>
                  <TableRow className='text-center hover:bg-zinc-300 dark:hover:bg-zinc-900'>
                    <TableCell className=''>2222</TableCell>
                    <TableCell className=''>01/02/2024</TableCell>
                    <TableCell className=''><CircleX className='h-4 w-4 text-center text-red-800  rounded-full'/></TableCell>
                    <Link>
                      <TableCell className=''><Download className='h-5 w-6 text-center'/></TableCell>
                    </Link>
                  </TableRow>
                  <TableRow className='text-center hover:bg-zinc-300 dark:hover:bg-zinc-900'>
                    <TableCell className=''>1245</TableCell>
                    <TableCell className=''>01/02/2024</TableCell>
                    <TableCell className=''><CircleCheck className='h-4 w-4 text-center text-green-800  rounded-full'/></TableCell>
                    <Link>
                      <TableCell className=''><Download className='h-5 w-6 text-center'/></TableCell>
                    </Link>
                    
                  </TableRow>
                  <TableRow className='text-center hover:bg-zinc-300 dark:hover:bg-zinc-900'>
                    <TableCell className=''>1111</TableCell>
                    <TableCell className=''>01/02/2024</TableCell>
                    <TableCell className=''><CircleX className='h-4 w-4 text-center text-red-800  rounded-full'/></TableCell>
                    <Link>
                    <TableCell className=''><Download className='h-5 w-6 text-center'/></TableCell>
                    </Link>
                    
                  </TableRow>
                  <TableRow className='text-center hover:bg-zinc-300 dark:hover:bg-zinc-900'>
                    <TableCell className=''>1245</TableCell>
                    <TableCell className=''>12/12/2024</TableCell>
                    <TableCell className=''><CircleCheck className='h-4 w-4 text-center text-green-900'/></TableCell>
                    <Link>
                    <TableCell className=''><Download className='h-5 w-6 text-center'/></TableCell>
                    </Link>
                    
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
    </div>
  </>
  )
}
export default TenantRent;