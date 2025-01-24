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
    <div className='md:ml-24 ml-10'>
      <h1 className='md:text-xl font-bold'>Files Manager</h1>
      <div className='md:w-[1200px] w-[350px] grid grid-cols-4 md:gap-8 gap-2 md:mt-2 mt-12'>
        <Card className='md:p-0 p-1'>
          <CardHeader className='md:p-2 p-1'>
            <CardTitle className='md:text-lg text-sm md:ml-4 text-orange-500'>All Files</CardTitle>
          </CardHeader>
          <CardContent className=''>
            <h1 className='md:text-2xl text-sm font-bold'>1359</h1>
          </CardContent>
          <CardFooter className=''>
            <p className='md:text-[14px] text-sm'>1000 MB/500 GB used</p>
          </CardFooter>
        </Card>
        <Card className=' '>
          <CardHeader className='md:p-2 p-1'>
            <CardTitle className='md:text-lg text-sm md:ml-4 text-orange-500'>Images</CardTitle>
          </CardHeader>
          <CardContent className='top-6'>
            <h1 className='md:text-2xl text-sm font-bold'>111</h1>
          </CardContent>
          <CardFooter className=''>
            <p className=''>0 MB/500 MB used</p>
          </CardFooter>
        </Card>
        <Card className=''>
          <CardHeader className='md:p-2 p-1'>
            <CardTitle className='md:text-lg text-sm md:ml-4 text-orange-500'>Documents</CardTitle>
          </CardHeader>
          <CardContent className='top-6'>
            <h1 className='text-2xl font-bold'>1234</h1>
          </CardContent>
          <CardFooter className=''>
            <p>0 MB/500 MB used</p>
          </CardFooter>
        </Card>
        <Card className=''>
          <CardHeader className='md:p-2'>
            <CardTitle className='ml-4 text-lg text-orange-500'>Videos</CardTitle>
          </CardHeader>
          <CardContent className=''>
            <h1 className='text-2xl font-bold'>14</h1>
          </CardContent>
          <CardFooter className=''>
            <p>0 MB/500 MB used</p>
          </CardFooter>
        </Card>
      </div>

      <div className='relative mt-8 flex md:gap-[570px]'>
        <div>
          <Search className='absolute top-2 left-2 h-5 w-5'/>
          <Input
          type='search'
          placeholder='Search here...'
          className='pl-8 h-[30px] w-[220px]'
          />
        </div>
        <div>
          <Plus className='absolute ml-2 top-2 w-6 h-6'/>
          <Select>
            <SelectTrigger className='w-[120px] pl-8 border-dotted ml-2'>
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
        <Table className=''>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead className='w-100px'>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className=''>Date </TableHead>
              <TableHead>Download</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='hover:bg-transparent'>
              <TableCell>Repair.jpeg</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>40KB</TableCell>
              <TableCell className=''>12/04/2022</TableCell>
              <TableCell className='w-6'>
                <a href=''>
                  <Download className='w-6 text-green-500'/>
                </a>
              </TableCell>
              <TableCell className='w-6'>
                <Link>
                  <Trash2 className='w-6 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>Repair.jpeg</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>40KB</TableCell>
              <TableCell className=''>12/04/2022</TableCell>
              <TableCell className='w-6'>
                <Link>
                  <Download className='w-6 text-green-500'/>
                </Link>
              </TableCell>
              <TableCell className='w-6'>
                <Link>
                  <Trash2 className='w-6 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>tap.mp4</TableCell>
              <TableCell>Video</TableCell>
              <TableCell>4MB</TableCell>
              <TableCell className=''>12/04/2022</TableCell>
              <TableCell className='w-6'>
                <Link>
                  <Download className='w-6 text-green-500'/>
                </Link>
              </TableCell>
              <TableCell className='w-6'>
                <Link>
                  <Trash2 className='w-6 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className='hover:bg-transparent'>
              <TableCell>july.pdf</TableCell>
              <TableCell>PDF</TableCell>
              <TableCell>70KB</TableCell>
              <TableCell className=''>12/04/2024</TableCell>
              <TableCell className='w-6'>
                <Link>
                  <Download className='w-6 text-green-500'/>
                </Link>
              </TableCell>
              <TableCell className='w-6'>
                <Link>
                  <Trash2 className='w-6 text-red-700'/>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className='absolute md:top-[290px] top-[60px] md:right-24 right-4 flex md:flex-col gap-4'>
        <Button className='relative bg-green-700 hover:bg-green-800 dark:text-white cursor-pointer md:w-[150px] w-[100px]'>
          <Plus className='absolute md:left-2 right-3 md:w-6 w-5 md:h-6 w-5'/>
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
        
        <Button className='relative bg-red-900 dark:text-white hover:bg-red-950 md:w-[150px] w-[100px]'>
          <Trash2 className='absolute md:left-2 right-3 md:w-6 w-5 md:h-6 w-5'/>
          <label
          htmlFor='view-trash'
           className='font-bold md:text-[12.5px] text-[11px]'>View Trash</label>
        </Button>
      </div>
    </div>
        
    </>
  )
}
export default TenantFileManager;