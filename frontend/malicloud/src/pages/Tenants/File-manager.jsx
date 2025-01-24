import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { 
  Search, 
  Plus, 
  Download, 
  Trash2, 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
 } from '@/components/ui/select';
 import { 
  Table, 
  TableRow, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableCell
 } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

function TenantFileManager() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`File selected: ${file.name}`);
    }
  };
  return (
    <>
    <Helmet>
      <title>File manager - Tenant</title>
    </Helmet>
    <Header/>
    <div className='md:ml-24 ml-11'>
      <h1 className='md:text-xl font-bold'>Files Manager</h1>
      <div className='md:w-[1200px] w-[350px] grid grid-cols-4 md:gap-8 gap-2 md:mt-2 mt-12'>
        <Card className='md:p-0 p-1'>
          <CardHeader className='md:p-2 p-1'>
            <CardTitle className='flex justify-center md:justify-start md:text-lg text-sm md:ml-4 text-orange-500'>All Files</CardTitle>
          </CardHeader>
          <CardContent className='md:p-3 p-1'>
            <h1 className='flex justify-center md:justify-start md:text-2xl text-sm font-bold'>1359</h1>
          </CardContent>
          <CardFooter className='p-0'>
            <p className='flex justify-center md:justify-start text-center md:text-[14px] text-[8.5px]'>1000 MB/500 GB used</p>
          </CardFooter>
        </Card>
        <Card className=' '>
          <CardHeader className='md:p-2 p-1'>
            <CardTitle className='flex justify-center md:justify-start md:text-lg text-sm md:ml-4 text-orange-500'>Images</CardTitle>
          </CardHeader>
          <CardContent className='md:p-2 p-1'>
            <h1 className='flex justify-center md:justify-start md:text-2xl text-sm font-bold'>111</h1>
          </CardContent>
          <CardFooter className='md:p-2 p-1'>
            <p className='flex justify-center md:justify-start text-center md:text-[14px] text-[8.5px]'>10 MB/500 MB used</p>
          </CardFooter>
        </Card>
        <Card className=''>
          <CardHeader className='md:p-2 p-1'>
            <CardTitle className='flex justify-center md:justify-start md:text-lg text-sm md:ml-4 text-orange-500'>Documents</CardTitle>
          </CardHeader>
          <CardContent className='md:p-2 p-1'>
            <h1 className='flex justify-center md:justify-start md:text-2xl text-sm font-bold'>1234</h1>
          </CardContent>
          <CardFooter className='md:p-2 p-1'>
            <p className='flex justify-center md:justify-start text-center md:text-[14px] text-[8.5px]'>102 MB/500 MB used</p>
          </CardFooter>
        </Card>
        <Card className=''>
          <CardHeader className='md:p-2 p-1'>
            <CardTitle className='flex justify-center md:justify-start md:ml-4 md:text-lg text-sm text-orange-500'>Videos</CardTitle>
          </CardHeader>
          <CardContent className='md:p-2 p-1'>
            <h1 className='flex justify-center md:justify-start md:text-2xl text-sm font-bold'>14</h1>
          </CardContent>
          <CardFooter className='md:p-2 p-1'>
            <p className='flex justify-center md:justify-start text-center md:text-[14px] text-[8.5px]'>22 MB/500 MB used</p>
          </CardFooter>
        </Card>
      </div>

      <div className='relative mt-8 flex md:gap-[570px] gap-[144px]'>
        <div>
          <Search className='absolute top-2.5 md:top-2 left-2 h-4 md:h-5 w-4 md:w-5 foreground-muted'/>
          <Input
          type='search'
          placeholder='Search here...'
          className='pl-8 md:h-[30px] h-[30px] md:w-[220px] w-[120px] text-sm'
          />
        </div>
        <div>
          <Select>
            <SelectTrigger className='text-sm'>
              <SelectValue placeholder='File type' className=''/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='images'>Images</SelectItem>
              <SelectItem value='documents'>Documents</SelectItem>
              <SelectItem value='pdfs'>PDFs</SelectItem>
              <SelectItem value='spreadsheets'>Spreadsheets</SelectItem>
              <SelectItem value='videos'>Videos</SelectItem>
              <SelectItem value='Archives'>Archives</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='mt-8 md:w-[900px] w-[350px] h-[500px] pb-8 '>
        <Table className='md'>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead className='p-0 md:p-3'>Name</TableHead>
              <TableHead className='hidden md:block'>Type</TableHead>
              <TableHead className='p-0 md:p-3'>Size</TableHead>
              <TableHead className='p-0 md:p-3'>Date </TableHead>
              <TableHead className='p-0 md:p-3'>Save</TableHead>
              <TableHead className='pl-5 md:p-3'>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='hover:bg-transparent'>
              <TableCell className='p-0 md:p-3'>Repair.jpeg</TableCell>
              <TableCell className='hidden md:block'>Image</TableCell>
              <TableCell className='p-0 md:p-3'>40KB</TableCell>
              <TableCell className='p-0 md:p-3'>12/04/2022</TableCell>
              <TableCell className='p-0 md:p-3'>
                <a href=''>
                  <Download className='md:w-6 w-5 text-green-500'/>
                </a>
              </TableCell>
              <TableCell className='pl-5 md:p-3'>
                <Link>
                  <Trash2 className='md:w-6 w-5 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell className='p-0 md:p-3'>Repair.jpeg</TableCell>
              <TableCell className='hidden md:block'>Image</TableCell>
              <TableCell className='p-0 md:p-3'>40KB</TableCell>
              <TableCell className='p-0 md:p-3'>12/04/2022</TableCell>
              <TableCell className='p-0 md:p-3'>
                <Link>
                  <Download className='md:w-6 w-5 text-green-500'/>
                </Link>
              </TableCell>
              <TableCell className='pl-5 md:p-3'>
                <Link>
                  <Trash2 className='md:w-6 w-5 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell className='p-0 md:p-3'>tap.mp4</TableCell>
              <TableCell className='hidden md:block'>Video</TableCell>
              <TableCell className='p-0 md:p-3'>4MB</TableCell>
              <TableCell className='p-0 md:p-3'>12/04/2022</TableCell>
              <TableCell className='w-6 p-0 md:p-3'>
                <Link>
                  <Download className='md:w-6 w-5 text-green-500'/>
                </Link>
              </TableCell>
              <TableCell className='pl-5 md:p-3'>
                <Link>
                  <Trash2 className='md:w-6 w-5 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent p-0'>
              <TableCell className='p-0 md:p-3'>july.pdf</TableCell>
              <TableCell className='hidden md:block'>PDF</TableCell>
              <TableCell className='p-0 md:p-3'>70KB</TableCell>
              <TableCell className='p-0 md:p-3'>12/04/2024</TableCell>
              <TableCell className='w-6 p-0 md:p-3'>
                <Link>
                  <Download className='md:w-6 w-5 text-green-500'/>
                </Link>
              </TableCell>
              <TableCell className='pl-5 md:p-3'>
                <Link>
                  <Trash2 className='md:w-6 w-5 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className='absolute md:top-[290px] top-[60px] md:right-24 right-4 flex md:flex-col gap-4'>
        <Button className='relative bg-green-700 hover:bg-green-800 dark:text-white cursor-pointer md:w-[150px] w-[90px] h-[30px] md:h-[37px]'>
          <Plus className='absolute md:left-2 right-1.5 md:w-6 w-5 md:h-6 w-5'/>
          <label
          htmlFor='file-upload'
          className='md:pl-8 cursor-pointer md:text-[12.5px] text-[11px]'
          >
            Upload File
          </label>
          <Input
          id = 'file-upload'
          type='file'
          className ='opacity-0'
          onChange = {handleFileChange}
          />
        </Button>
        
        <Button className='relative bg-red-900 dark:text-white hover:bg-red-950 md:w-[150px] w-[90px] h-[30px] md:h-[37px]'>
          <Trash2 className='absolute left-2 md:w-6 w-5 md:h-6 h-5'/>
          <label
          htmlFor='view-trash'
           className='md:pl-0 pl-6 font-bold md:text-[12.5px] text-[10px] cursor-pointer'>View Trash</label>
        </Button>
      </div>
    </div>
        
    </>
  )
}
export default TenantFileManager;