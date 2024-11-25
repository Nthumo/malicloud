import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FolderClosed, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import AllProperties from './subpages/Filemanager/AllProperties';

export default function Documents() {
  const[selectedCategory, setSelectedCategory] = useState('All properties');

  const handleCategoryChange = (value) => {
    setSelectedCategory(value)
  }

  return (
    <>
      <Helmet>
        <title>Documents - MaliCloud</title>
      </Helmet>
      <Header/>
      <div className='ml-[200px]'>
        <Card className='w-[1000px]'>
          <CardContent className='p-6'>
            <h1 className='text-2xl font-bold'>File manager</h1>
            <Separator className='mt-4'/>
            <div className='flex gap-20 mt-4'>
              <Card className='border-gray-500 w-[200px]'>
                <CardContent className='p-6'>
                  <div className='flex gap-4'>
                    <div className='dark:bg-zinc-900 bg-zinc-100 p-2 rounded-sm'>
                      <FolderClosed/>
                    </div>
                    <div>
                      <h1 className='font-semibold'>All Files</h1>
                      <p className='text-muted-foreground text-sm'>131 files</p>
                    </div>
                  </div>
                  <p className='mt-4 text-sm'>81.97 MB/25 GB Used</p>
                </CardContent>
              </Card>
              <Card className='border-gray-500 w-[200px]'>
                <CardContent className='p-6'>
                  <div className='flex gap-4'>
                    <div className='dark:bg-zinc-900 bg-zinc-100 p-2 rounded-sm'>
                      <FolderClosed/>
                    </div>
                    <div>
                      <h1 className='font-semibold'>Images</h1>
                      <p className='text-muted-foreground text-sm'>74 files</p>
                    </div>
                  </div>
                  <p className='mt-4 text-sm'>77 MB/25 GB Used</p>
                </CardContent>
              </Card>
              <Card className='border-gray-500 w-[200px]'>
                <CardContent className='p-6'>
                  <div className='flex gap-4'>
                    <div className='dark:bg-zinc-900 bg-zinc-100 p-2 rounded-sm'>
                      <FolderClosed/>
                    </div>
                    <div>
                      <h1 className='font-semibold'>Documents</h1>
                      <p className='text-muted-foreground text-sm'>57 files</p>
                    </div>
                  </div>
                  <p className='mt-4 text-sm'>4.97 MB/25 GB Used</p>
                </CardContent>
              </Card>
              <Card className='border-gray-500 w-[200px]'>
                <CardContent className='p-6'>
                  <div className='flex gap-4'>
                    <div className='dark:bg-zinc-900 bg-zinc-100 p-2 rounded-sm'>
                      <FolderClosed/>
                    </div>
                    <div>
                      <h1 className='font-semibold'>Videos</h1>
                      <p className='text-muted-foreground text-sm'>0 files</p>
                    </div>
                  </div>
                  <p className='mt-4 text-sm'>0 MB/25 GB Used</p>
                </CardContent>
              </Card>
            </div>
            <div className=' mt-8'>
              <div className='flex justify-between'>
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger className='w-[200px] focus:ring-3'>{selectedCategory}</SelectTrigger>
                  <SelectContent>
                    <SelectItem className='All properties'>All properties</SelectItem>
                    <SelectItem value='Fine house'>Fine House</SelectItem>
                    <SelectItem value='Muranga house'>Murang'a House</SelectItem>
                    <SelectItem value='Embu house'>Embu House</SelectItem>
                    <SelectItem value='UpperHill house'>UpperHill House</SelectItem>
                  </SelectContent>
                </Select>
                <div className='relative'>
                  <Search className='absolute top-1 left-2 h-5 w-5'/>
                  <Input
                  type='search'
                  placeholder='Search...'
                  className='h-[25px] pl-8 focus:border-none'
                  />
                </div>
              </div>
              <div className='mt-6'>
                {selectedCategory === 'All properties' && (
                  <div>
                    <AllProperties/>
                  </div>
                )}
                {selectedCategory === 'Fine house' && (
                  <div>
                    <h1>Fine House</h1>
                  </div>
                )}
                {selectedCategory === 'Muranga house' && (
                  <div>
                    <h1>Murang'a House</h1>
                  </div>
                )}
                {selectedCategory === 'Embu house' && (
                  <div>
                    <h1>Embu House</h1>
                  </div>
                )}
                {selectedCategory === 'UpperHill house' && (
                  <div>
                    <h1>UpperHill house</h1>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
    
  )
}
