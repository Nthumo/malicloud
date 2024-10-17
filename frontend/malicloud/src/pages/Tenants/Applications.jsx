import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';
import HouseDetails from '@/components/tenants/HouseDetails';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardFooter, 
  CardTitle } from '@/components/ui/card';

import { Tabs } from '@/components/ui/tabs';

import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  SelectGroup, 
  SelectLabel, } from '@/components/ui/select';
  
import { Toggle } from '@/components/ui/toggle';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
  PaginationLink
} from "@/components/ui/pagination"


import { 
  TooltipTrigger, 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
 } from '@/components/ui/tooltip';
import { 
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
 } from '@/components/ui/sheet';

 import { Star } from 'lucide-react';

function TenantApplications() {

  const[isHouseDetailsOpen, setHouseDetailsOpen] = useState(false);

  const [selecteTypes, setSelectedTypes] = useState([]);

  const handleCheckboxChange = (event) => {
    const{value, checked } = event.target;
    if (checked) {
      setSelectedTypes((prev) => [...prev, value]);
    } else {
      setSelectedTypes((prev) => prev.filter((type) => type !== value));
    }
  };

  return (
    <>
    <Helmet>
      <title>Applications - Tenant</title>
    </Helmet>
      <Header/>
      <div className='group md:pt-20 md:flex '>
        <Card className='md:absolute md:ml-0 ml-12 md:top-28 left-20 md:w-[730px] w-[340px] md:mr-0 mr-4 dark:bg-zinc-900 bg-zinc-300 dark:text-white border-none overflow-auto'>
          <CardHeader className='md:p-5 p-2'>
            <CardTitle className='md:text-lg text-sm'>Applications</CardTitle>
          </CardHeader>
          <CardContent className='relative top-4 mb-12'>
            <div className='flex md:gap-[340px] gap-[70px] sm:gap-[150px] jusitfy-between md:mb-16 mb-8'>
              <Search className='absolute md:left-8 left-7 md:top-1 top-1.5 md:h-6 md:w-6 w-4 h-4 dark:text-white'/>
              <Input
              type='search'
              placeholder='Search...'
              className='dark:bg-zinc-800 dark:text-white border-black md:h-[30px] h-[23px] md:w-[250px] w-[130px] pl-10 focus:border-none'
              />

              <Select>
                <SelectTrigger className='dark:bg-zinc-800 md:w-[100px] w-[80px] md:h-[30px] h-[23px] border-black'>
                  <SelectValue placeholder='Sort by'/>
                </SelectTrigger>
                <SelectContent className='overflow-hidden bg-zinc-300 dark:bg-zinc-950 dark:text-white border-none'>
                  <SelectGroup>
                    <SelectItem value='a-z'>A - Z</SelectItem>
                    <SelectItem value='date'>Date</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className='flex flex-col md:gap-4 gap-2'>
              <Card className='md:h-[150px] h-[120px] bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:shadow-white shadow-black border-none p-2'>
                <CardTitle className='text-orange-500 md:text-lg text-[13px] md:p-0 p-1'>Murang'a House</CardTitle>
                <div className='flex md:justify-between'>
                  <CardContent className='p-0'>
                    <img src="/images/house3.jpeg" alt="house1" className='md:h-[120px] h-[80px] md:w-[90px] w-[130px] rounded-lg md:p-2' />
                  </CardContent>
                  <CardContent>
                    <div className='flex flex-col justify-center items-center'>
                      <h1 className='md:text-lg text-sm font-bold'>Ksh.10000</h1>
                      <p className='italic text-muted-foreground md:text-lg md:p-0 text-xs'>Monthly</p>
                    </div>
                    <div className='md:mt-12 mt-4'>
                      <p className='md:text-sm text-[9px] line-clamp-[2]'>32 Murang'a Estate 32 Murang'a Estate 32 Murang'a Estate</p>
                    </div>
                  </CardContent>
                  <CardContent className='relative'>
                    <CardDescription className='dark:text-white md:text-sm text-[10px] '>
                      <span className='font-bold md:ml-0 ml-2'>Applied: </span>12/01/2010
                    </CardDescription>
                    <span className='flex justify-center'>
                      <Button className='bg-transparent hover:bg-transparent'>
                        <TooltipProvider>
                          <Tooltip className='p-0'>
                            <TooltipTrigger>
                              <Star className='absolute md:top-9 top-10 dark:text-white text-black md:h-7 h-4 md:w-7 w-5'/>
                            </TooltipTrigger>
                            <TooltipContent className='dark:bg-zinc-900'>
                              <p className='dark:text-white'>Add to Favorite</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Button>                      
                    </span>
                    <span className='flex justify-center md:mt-8 md:mb-0 pb-8'>
                      <Badge variant='outline' className='absolute md:right-10 right-3 md:bottom-8 bottom-12 border-none bg-zinc-950 text-white md:text-[11px] text-[9px]'>Pending</Badge>
                    </span>
                  </CardContent>
                </div>
              </Card>

              <Card className=' top-4 w-auto md:h-[150px] h-[120px] dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:shadow-white shadow-black border-none p-2'>
                <CardTitle className='text-orange-500 md:text-lg text-[13px] md:p-0 p-1'>Fine House</CardTitle>
                <div className='flex justify-between'>
                <CardContent className='p-0'>
                  <img src="/images/house4.jpeg" alt="house4" className='md:h-[120px] h-[80px] md:w-[90px] w-[130px] rounded-lg md:p-2'/>
                </CardContent>
                <CardContent>
                    <div className='flex flex-col justify-center items-center'>
                      <h1 className='md:text-lg text-sm font-bold'>Ksh.10000</h1>
                      <p className='italic text-muted-foreground md:text-lg text-xs'>Monthly</p>
                    </div>
                    <div className='md:mt-12 mt-4'>
                      <p className='md:text-sm text-[9px] line-clamp-[2]'>32 Murang'a Estate 32 Fine Estate 32 Fine Estate</p>
                    </div>
                </CardContent>
                <CardContent className='relative'>
                    <CardDescription className='dark:text-white md:text-sm text-[10px]'>
                      <span className='font-bold md:ml-0 ml-2'>Applied: </span>12/01/2010
                    </CardDescription>
                    <span className='flex justify-center'>
                      <Button className='bg-transparent hover:bg-transparent'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Star className='absolute md:top-9 top-10 dark:text-white text-black md:h-7 h-4 md:w-7 w-5'/>
                            </TooltipTrigger>
                            <TooltipContent className='dark:bg-zinc-900'>
                              <p className='dark:text-white'>Add to Favorite</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Button>                      
                    </span>
                    <span className='flex justify-center mt-8'>
                      <Badge variant='destructive' className='absolute md:right-10 right-3 md:bottom-8 bottom-12 border-none md:text-[11px] text-[9px]'>Occupied</Badge>
                    </span>
                </CardContent>
                </div>
              </Card>

              <Card className=' top-4 md:h-[150px] h-[120px] bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:shadow-white shadow-black border-none p-2'>
                <CardTitle className='text-orange-500 md:text-lg text-[13px] md:p-0 p-1'>Embu House</CardTitle>
                <div className='flex justify-between'>
                  <CardContent className='p-0'>
                    <img src="/images/house5.jpeg" alt="house5" className='md:h-[120px] h-[80px] md:w-[90px] w-[130px] rounded-lg md:p-2' />
                  </CardContent>
                  <CardContent>
                    <div className='flex flex-col justify-center items-center'>
                      <h1 className='md:text-lg text-sm font-bold'>Ksh.10000</h1>
                      <p className='italic text-muted-foreground md:text-lg text-xs'>Monthly</p>
                    </div>
                    <div className='md:mt-12 mt-4'>
                      <p className='md:text-sm text-[9px] line-clamp-[2]'>32 Murang'a Estate 32 Murang'a Estate 32 Murang'a Estate</p>
                    </div>
                  </CardContent>
                  <CardContent className='relative'>
                    <CardDescription className='dark:text-white md:text-sm text-[10px] md:p-0 p-0'>
                      <span className='font-bold md:ml-0 ml-2'>Applied: </span>12/01/2023
                    </CardDescription>
                    <span className='flex justify-center'>
                      <Button className='bg-transparent hover:bg-transparent'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Star className='absolute md:top-9 top-10 dark:text-white text-black md:h-7 h-4 md:w-7 w-5'/>
                            </TooltipTrigger>
                            <TooltipContent className='dark:bg-zinc-900'>
                              <p className='dark:text-white'>Add to Favorite</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Button>                      
                    </span>
                    <span className='flex justify-center mt-8'>
                      <Badge variant='outline' className='absolute md:right-10 right-3 md:bottom-8 bottom-12 border-none bg-green-700 md:text-[11px] text-[9px] '>Available</Badge>
                    </span>
                  </CardContent>
                </div>
              </Card>
            </div>
          </CardContent>

          <CardFooter className='flex flex-row items-center border-t md:py-5'>
            <Pagination className=''>
              <PaginationContent>
                <PaginationItem>
                  <Button className='hover:bg-zinc-500 bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-white md:w-[100px] w-[70px] md:h-[35px] h-[30px]'>
                    <PaginationPrevious className='hover:bg-transparent dark:text-white text-black md:text-sm text-[10px]'/>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='dark:hover:bg-zinc-800 hover:bg-zinc-200 md:text-sm text-xs'>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='dark:hover:bg-zinc-800 hover:bg-zinc-200 md:text-sm text-xs'>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='dark:hover:bg-zinc-800 hover:bg-zinc-200 md:text-sm text-xs'>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className='md:text-sm text-xs'/>
                </PaginationItem>
                <PaginationItem>
                  <Button className='dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 bg-zinc-400 hover:bg-zinc-500 md:w-[100px] w-[70px] md:h-[35px] h-[30px]'>
                    <PaginationNext className='hover:bg-transparent dark:text-white text-black md:text-sm text-[10px]'/>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>

      <div className=''>
        <Card className='absolute md:top-28 md:right-[20px] md:ml-0 ml-12 md:mt-0 mt-6 md:w-[520px] w-[340px] dark:text-white dark:bg-zinc-900 bg-zinc-300 border-none overflow-auto'>
          <CardHeader className='md:p-4 p-3'>
            <CardTitle className='md:text-lg text-sm'>Find a Place</CardTitle>
          </CardHeader>
            <CardContent className='relative p-0'>
              <div className=' flex gap-2 ml-4 '>
                <Search className='absolute left-5 md:top-2 top-1 dark:text-white h-4 w-4  '/>
                <Input
                type='search'
                placeholder='Search here...'
                className='md:text-sm text-[10px] dark:bg-zinc-800 border-black text-white md:pl-8 pl-6 focus:outline-none md:h-[25px] h-[22px] md:w-[170px] w-[90px]'
                />

                <Select>
                  <SelectTrigger className='dark:bg-zinc-800 md:w-[100px] w-[70px] md:h-[25px] h-[22px] rounded border-black'>
                    <SelectValue className='text-sm ' placeholder='Type'/>
                  </SelectTrigger>
                  <SelectContent className='dark:bg-zinc-950 border-none dark:text-white md:w-[200px] w-[160px]'>
                    <SelectGroup className='mb-4'>
                      <SelectLabel className='md:mb-4 md:text-18px] text-[11px]'>Rental Type</SelectLabel>
                      <Separator className='text-white'/>
                      {['Apartment', 'Condo', 'House', 'Multiplex', 'Townhome', 'Single Room', 'University Apartment', 'Residence Hall'].map(type =>(
                        <label key={type} className='flex items-center gap-2 mt-2'>
                          <input 
                          type="checkbox" 
                          value={type}
                          className='md:ml-2 border-none hover:cursor '
                          checked={selecteTypes.includes(type)}
                          onChange={handleCheckboxChange}
                          />
                          <span className='ml-2 md:text-sm text-xs'>{type}</span>
                        </label>
                        ))
                      }
                    </SelectGroup>
                    <Separator/>
                    <div className='flex justify-center gap-4 mb-2 mt-2'>
                      <Button className='text-xs dark:text-white dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-zinc-600 hover:bg-zinc-500 md:h-8 h-[27px]' onClick={() => setSelectedTypes([])}>Reset</Button>
                      <Button className='text-xs dark:text-white dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-zinc-600 hover:bg-zinc-500 md:h-8 h-[27px]' onClick={() => console.log(selecteTypes)} >Apply</Button>
                    </div>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className='dark:bg-zinc-800 md:w-[100px] w-[70px] md:h-[25px] h-[22px] border-black'>
                    <SelectValue className='text-sm' placeholder='Price'/>
                  </SelectTrigger>
                  <SelectContent className='dark:bg-zinc-950 bg-zinc-400 dark:text-white md:w-[200px] w-[160px] border-none'>
                    <SelectGroup>
                      <SelectLabel className='md:mb-4 md:text-[14px] text-[12px]'>Select Price</SelectLabel>
                      <Separator className='dark:text-white'/>
                      <div className='md:mb-4 md:mt-4'>
                        <SelectItem value='10000' className='md:text-sm text-[11px]'>Ksh.10000 - Ksh20000</SelectItem>
                        <SelectItem value='10000' className='md:text-sm text-[11px]'>Ksh.10000 - Ksh20000</SelectItem>
                        <SelectItem value='10000' className='md:text-sm text-[11px]'>Ksh.10000 - Ksh20000</SelectItem>
                        <SelectItem value='10000' className='md:text-sm text-[11px]'>Ksh.10000 - Ksh20000</SelectItem>
                        <SelectItem value='10000' className='md:text-sm text-[11px]'>Ksh.10000 - Ksh20000</SelectItem>
                    </div>
                      <Separator/>
                      <div className='flex justify-center gap-4 mb-2 md:mt-4 mt-3'>
                        <Button className='dark:hover:bg-zinc-800 dark:bg-zinc-900 dark:text-white bg-zinc-600 hover:bg-zinc-500 text-xs md:h-8 h-[24px]'>Cancel</Button>
                        <Button className='dark:hover:bg-zinc-800 dark:bg-zinc-900 dark:text-white bg-zinc-600 hover:bg-zinc-500 text-xs md:h-8 h-[24px]'>Apply</Button>
                      </div>
                    </SelectGroup>

                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className='dark:bg-zinc-800 md:w-[100px] w-[70px] md:h-[25px] h-[22px] border-black'>
                    <SelectValue className='' placeholder='More'/>
                  </SelectTrigger>
                  <SelectContent className='dark:bg-zinc-900 dark:hover:bg-zinc-900  dark:text-white w-[230px] border-none'>
                    <SelectGroup className=''>
                      <SelectItem value='apartment' className='dark:hover:bg-zinc-900 dark:bg-zinc-800 '>
                        <span className='font-bold mb-4'>Beds</span> 
                        <span className='flex gap-2 dark:bg-zinc-900 dark:text-white mt-2'>
                          <Toggle className='dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>1</Toggle>
                          <Toggle className='dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>2</Toggle>
                          <Toggle className='dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>3</Toggle>
                          <Toggle className='dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>4</Toggle>
                          <Toggle className='dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>5+</Toggle>
                        </span>
                      </SelectItem>
                    </SelectGroup>
                   
                    <SelectItem value='baths' className='hover:bg-zinc-800 hover:text-white mb-4'>
                      <span className='font-bold mb-4'>Baths</span> 
                        <span className='flex gap-2 dark:bg-zinc-900 dark:text-white mt-2'>
                          <Toggle className='bg-zinc-950 hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>1</Toggle>
                          <Toggle className='bg-zinc-950 hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>2</Toggle>
                          <Toggle className='bg-zinc-950 hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>3</Toggle>
                          <Toggle className='bg-zinc-950 hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>4</Toggle>
                          <Toggle className='bg-zinc-950 hover:bg-zinc-800 dark:hover:text-white bg-zinc-400 hover:text-black hover:bg-zinc-300'>5+</Toggle>
                        </span>
                    </SelectItem>
                    <Separator/>
                    <div className='flex justify-center gap-4 mb-2 mt-4'>
                      <Button className='dark:bg-zinc-950 dark:hover:bg-zinc-800 bg-zinc-600 hover:bg-zinc-500 dark:text-white text-xs h-8'>Cancel</Button>
                      <Button className='dark:bg-zinc-950 dark:hover:bg-zinc-800 bg-zinc-600 hover:bg-zinc-500 dark:text-white text-xs h-8'>Apply</Button>
                    </div>
                  </SelectContent>
                </Select>
              </div>
            
              <div className='grid grid-cols-2 pt-8 gap-x-1 gap-y-6 mb-12  items-center'>
                <button>
                  <Card className=' md:ml-5 ml-2 md:w-[230px] w-[150px] md:h-[240px] h-[200px] dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white rounded-none border-none shadow-white'>
                    <CardHeader>
                      <img src="/images/house3.jpeg" alt="house2" className='md:w-[190px] w-[100px] md:h-[100px] h-[76px] rounded' />
                      <div className='flex md:gap-8 gap-4'>
                        <CardTitle className='md:text-lg text-[11px]'>Murang'a House</CardTitle>
                        <CardTitle className='flex flex-col text-orange-500 md:text-lg text-sm'>
                          Ksh.10000
                          <span className='md:text-xs text-[10px] text-center text-muted-foreground'>Monthly</span>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className=''>
                      <CardDescription className='italic dark:text-white md:text-sm text-[10px] line-clamp-2'>
                        32 Murang'a Estate 32 Murang'a Estate 32 Murang'a Estate
                      </CardDescription>
                    </CardContent>
                  </Card>
                </button>
                
                <Card className=' md:w-[230px] w-[150px] md:h-[240px] h-[200px] dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white rounded border-none shadow-white '>
                  <CardHeader>
                    <img src="/images/house4.jpeg" alt="house1"className='md:w-[190px] w-[100px] md:h-[100px] h-[76px] rounded' />
                    <div className='flex md:gap-8 gap-4'>
                      <CardTitle className='md:text-lg text-[11px]'>Fine House</CardTitle>
                      <CardTitle className='text-lg flex flex-col text-orange-500 md:text-lg text-sm'>
                        Ksh.10,000
                        <span className='md:text-xs text-[10px] text-center text-muted-foreground'>Monthly</span>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='italic dark:text-white md:text-sm text-[10px] line-clamp-2'>
                      3212 Fine Estate 32 Fine Estate 32 fine Estate
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className='md:ml-5 ml-2 md:w-[230px] w-[150px] md:h-[240px] h-[200px] dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white rounded border-none shadow-white '>
                  <CardHeader>
                    <img src="/images/house5.jpeg" alt="house1" className='md:w-[190px] w-[100px] md:h-[100px] h-[76px] rounded' />
                    <div className='flex md:gap-8 gap-4'>
                      <CardTitle className='md:text-lg text-[11px]'>Embu House</CardTitle>
                      <CardTitle className='flex flex-col text-orange-500 md:text-lg text-sm'>
                        Ksh.10,000
                        <span className='md:text-xs text-[10px] text-center text-muted-foreground'>Monthly</span>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className='italic dark:text-white md:text-sm text-[10px] line-clamp-2'>
                      300 Embu Estate 32 Embu Estate 32 Embu Estate
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className=' md:w-[230px] md:h-[240px] w-[150px] h-[200px] dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-white rounded border-none shadow-white '>
                  <CardHeader>
                    <img src="/images/house7.jpeg" alt="house1" className='md:w-[190px] w-[100px] md:h-[100px] h-[76px] rounded' />
                    <div className='flex md:gap-8 gap-4'>
                      <CardTitle className='md:text-lg text-[11px]'>UpperHill House</CardTitle>
                      <CardTitle className='md:text-lg text-sm flex flex-col text-orange-500'>
                        ksh.10,000
                        <span className='md:text-xs text-[10px] text-center text-muted-foreground'>Monthly</span>
                      </CardTitle>
                      </div>
                  </CardHeader>
                  <CardContent>
                  <CardDescription className='italic dark:text-white md:text-sm text-[10px] line-clamp-2'>
                          3212 UpperHill Estate 32 3212 UpperHill Estate 32
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          <CardFooter className='flex flex-row items-center border-t px-6 py-3 '>
            <Pagination className='ml-auto mr-0'>
              <PaginationContent>
                <PaginationItem>
                  <Button size='' variant='' className='bg-zinc-600 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-500'>
                    <PaginationPrevious className='hover:bg-transparent hover:text-black text-black dark:text-white'/>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='dark:hover:bg-zinc-800 '>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='dark:hover:bg-zinc-800 '>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' className='dark:hover:bg-zinc-800 '>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis/>
                </PaginationItem>
                <PaginationItem>
                  <Button size='' className='bg-zinc-600 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-500'>
                    <PaginationNext className='hover:bg-transparent text-black dark:text-white'/>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
      </div>
    </>
  );
};
export default  TenantApplications;

