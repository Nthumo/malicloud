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
  return (
    <>
    <Helmet>
      <title>File manager - Tenant</title>
    </Helmet>
    <Header/>
    <h1 className='absolute top-[90px] left-[180px] text-xl font-bold'>Files Manager</h1>
    <div className='relative top-12 grid grid-cols-4 gap-2 h-[90px]'>
      <Card className='relative left-[163px] w-[250px]'>
        <CardHeader className='p-2'>
          <CardTitle className='text-lg text-center text-orange-500'>All Files</CardTitle>
        </CardHeader>
        <CardContent className='relative top-6'>
          <h1 className='text-2xl font-bold'>1359</h1>
        </CardContent>
        <CardFooter className='absolute top-16 left-24'>
          <p>0 MB/500 MB used</p>
        </CardFooter>
      </Card>
      <Card className='relative left-32 w-[250px]'>
        <CardHeader className='p-2'>
          <CardTitle className='text-lg text-center text-orange-500'>Images</CardTitle>
        </CardHeader>
        <CardContent className='relative top-6'>
          <h1 className='text-2xl font-bold'>111</h1>
        </CardContent>
        <CardFooter className='absolute top-16 left-24'>
          <p>0 MB/500 MB used</p>
        </CardFooter>
      </Card>
      <Card className='relative left-16 w-[250px]'>
        <CardHeader className='p-2'>
          <CardTitle className='text-lg text-center text-orange-500'>Documents</CardTitle>
        </CardHeader>
        <CardContent className='relative top-6'>
          <h1 className='text-2xl font-bold'>1234</h1>
        </CardContent>
        <CardFooter className='absolute top-16 left-24'>
          <p>0 MB/500 MB used</p>
        </CardFooter>
      </Card>
      <Card className='w-[250px]'>
        <CardHeader className='p-2'>
          <CardTitle className='text-lg text-orange-500 text-center'>Videos</CardTitle>
        </CardHeader>
        <CardContent className='relative top-6'>
          <h1 className='text-2xl font-bold'>14</h1>
        </CardContent>
        <CardFooter className='absolute right-24 top-16'>
          <p>0 MB/500 MB used</p>
        </CardFooter>
      </Card>
      <div className='relative left-48 top-12 flex justify-between gap-[560px]'>
        <div>
          <Search className='absolute top-2 left-2 h-5 w-5'/>
          <Input
          type='search'
          placeholder='Search here...'
          className='pl-8 h-[30px] w-[220px]'
          />
        </div>
        <div>
          <Plus className='absolute top-2 w-6 h-6'/>
          <Select>
            <SelectTrigger className='w-[120px] pl-8 border-dotted'>
              <SelectValue placeholder='File type' className='pl-8'/>
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
      <div className='absolute top-52 left-48  w-[900px] h-[500px] pb-8 '>
        <Table className=''>
          <TableHeader>
            <TableRow className=''>
              <TableHead className='w-100px'>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className=''>Date </TableHead>
              <TableHead>Download</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
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
            <TableRow>
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
            <TableRow>
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
            <TableRow>
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
      <div className='absolute top-[200px] right-24 flex flex-col gap-4'>
        <Button className='flex gap-2 bg-green-700 hover:bg-green-800 dark:text-white'>
          <Plus className='w-6 h-6'/>
          <span>Upload File</span>
        </Button>
        <Button className='flex gap-4 bg-red-900 dark:text-white hover:bg-red-950'>
          <span className='font-bold text-xs'>View Trash</span>
          <Trash2 className='w-6 h-6'/>
        </Button>
      </div>
    </div>
    </>
  )
}
export default TenantFileManager;