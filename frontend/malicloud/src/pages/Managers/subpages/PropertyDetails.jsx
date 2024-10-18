import React from 'react';
import Header from '@/components/common/Header';
import { Link } from 'react-router-dom';
import { Helmet, } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/common/BackButton';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Ellipsis, MapPin } from 'lucide-react';

export default function PropertyDetails() {
  return (
    <>
    <Helmet>
      <title>Fine House - MaliCloud</title>
    </Helmet>
    <Header/>
      <div className=''>
        <div className='flex justify-between mr-24'>
          <div className='flex items-center gap-12'>
            <BackButton/>
            <h1 className='text-2xl font-bold'>Fine House</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='flex gap-2 bg-transparent hover:bg-transparent dark:text-white text-black border dark:bg-zinc-900 bg-zinc-300'>
                Actions
                <Ellipsis/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex flex-col gap-2 w-48'>
              <DropdownMenuItem>
                <Link to='/manager/properties/edit-property'>
                  Edit property
                </Link>
                </DropdownMenuItem>
              <DropdownMenuItem>Unarchive property</DropdownMenuItem>
              <DropdownMenuItem className='text-red-500 hover:text-red-500'>Delete property</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
                
        <Card className='relative w-[1130px] ml-[152px] h-screen'>
            <CardContent className='p-2 flex gap-20'>
              <Card className='w-[750px]'>
                <CardContent className='p-2'>
                  <Tabs defaultValue='profile' className=''>
                    <TabsList className='flex gap-20'>
                      <TabsTrigger value='profile' className='text-[13px]'>Profile</TabsTrigger>
                      <TabsTrigger value='specs' className='text-[13px]'>Specs</TabsTrigger>
                      <TabsTrigger value='owners' className='text-[13px]'>Owners</TabsTrigger>
                      <TabsTrigger value='financial' className='text-[13px]'>Financial</TabsTrigger>
                      <TabsTrigger value='utilities' className='text-[13px]'>Utilities</TabsTrigger>
                    </TabsList>
                    <TabsContent value='profile' className='text-center'>
                      This is the profile tab
                    </TabsContent>
                    <TabsContent value='specs' className='text-center'>
                      This is the specs tab
                    </TabsContent>
                    <TabsContent value='owners' className='text-center'>
                      This is the owners tab
                    </TabsContent>
                    <TabsContent value='financial' className='text-center'>
                      This is the financial tab
                    </TabsContent>
                    <TabsContent value='utilities' className='text-center'>
                      This is the utilities tab
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              <Card className='relative w-[320px] dark:bg-zinc-900 bg-zinc-300'>
                <CardContent className='flex flex-col justify-center items-center p-2'>
                  <img src="/images/house1.jpeg" alt="house1" className=' h-[200px] w-[250px] rounded-sm'/>
                  <div className='mt-10 flex flex-col items-center w-[170px] dark:text-white'>
                    <h1 className='text-lg font-bold'>Fine House</h1>
                    <MapPin/>
                    <p className='indent-8 line-clamp-2 text-[12px] text-muted-foreground text-center mt-4'>377 Fine Estate 377 Fine Estate 377 Fine Estate</p>
                  </div>
                  <div className='flex gap-2 mt-6'>
                    <Card className=' h-[70px] border-none'>
                      <CardContent className='text-center'>
                        <h1 className='text-xl mt-4'>0</h1>
                        <h3 className='text-muted-foreground text-[13px]'>Equipments</h3>
                      </CardContent>
                    </Card>
                    <Card className='h-[70px] border-none'>
                      <CardContent className='text-center'>
                        <h1 className='text-xl mt-4'>0</h1>
                        <h3 className='text-muted-foreground '>Recurring requests</h3>
                      </CardContent>
                    </Card>
                  </div>
                  <span className='mt-6 flex flex-col gap-4 items-center'>
                    <h1>Occupancy</h1>
                    <h1 className='font-bold text-xl'>100%</h1>
                  </span>
                </CardContent>
              </Card>
            </CardContent>
        </Card>
      </div>
    </>
  )
}
