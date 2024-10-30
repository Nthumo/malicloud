import React, {useState} from 'react';
import Header from '@/components/common/Header';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Circle, X, PlusCircle, CloudUpload, ClubIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import PropertyImageUpload from '@/components/managers/PropertyImageUpload';

export default function AddProperty() {
  const [selectedFeatures, setSelectedFeatures] = useState(new Set());

  const features =['Alarm', 'Furnished', 'Renovated', 'Hardwood floors', 'Fireplace', 'Fresh paint', 'Swimming Pool', 'Security System', 'Internet', 'Walk-in closets', 'Balcony, Deck, Patio', 'Fenced yard', 'Storage', 'Carpet']
  
  const handleToggle = (feature) => {
    setSelectedFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(feature)) {
        newSet.delete(feature);
      } else {
        newSet.add(feature);
      }
      return newSet;
    }
  );
  };

  return (
    <>
    <Helmet>
      <title>Add property - MaliCloud</title>
    </Helmet>
    <Header/>
        <div className='flex gap-12 ml-32'>
          <Card className=' dark:bg-zinc-900 bg-zinc-300 w-[300px] h-auto overflow-auto'>
            <CardContent>
              <PropertyImageUpload/>
            </CardContent>
          </Card>

          <Card className='dark:bg-zinc-900 bg-zinc-300 w-[830px] mb-8'>
            <CardHeader className='p-2'>
              <CardTitle className='text-[16px]'>
                GENERAL INFORMATION
              </CardTitle>
            </CardHeader>
            <CardContent className=''>
              <div className='flex gap-14 mt-3'>
                <span className='w-[350px]'>
                  <label htmlFor="property" className='text-sm'>Property name *</label>
                  <Input className='mt-2 dark:bg-transparent dark:border-muted-foreground border-black focus:border-none' placeholder='Enter property name' />
                </span>
                <span className='w-[150px]'>
                  <label htmlFor="year" className='text-sm'>Year built</label>
                  <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter year'/>
                </span>
                <span className='w-[150px]'>
                  <label htmlFor="year" className='text-sm'>Mls #</label>
                  <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter mls number'/>
                </span>
              </div>
              <div className='flex gap-14 mt-8'>
                <span className='w-[350px]'>
                    <label htmlFor="year" className='text-sm'>Street address *</label>
                    <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter address'/>
                  </span>
                  <span className='w-[350px]'>
                    <label htmlFor="year" className='text-sm'>City *</label>
                    <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter city name'/>
                  </span>
              </div>
              <div className='flex gap-14 mt-8'>
                <div className='flex gap-8'>
                  <span className='w-[220px]'>
                    <label htmlFor="year" className='text-sm'>County *</label>
                    <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter county name'/>
                  </span>
                  <span className='w-[100px]'>
                    <label htmlFor="year" className='text-sm'>Zip *</label>
                    <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter zip code'/>
                  </span>
                </div>
                  
                  <span className='w-[350px]'>
                    <label htmlFor="year" className='text-sm'>Constituency *</label>
                    <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter constituency name'/>
                  </span>
              </div>
              <Separator className='mt-6'/>
              <div className='mt-4'>
                <h1 className='font-semibold'>PROPERTY TYPE</h1>
                <div className='flex gap-8 mt-4'>
                  <span className='relative gap-3 items-center border rounded-lg p-4'>
                    <Circle className='absolute w-5'/>
                      <h1 className='ml-8 font-semibold'>Single Unit type</h1>
                      <p className='text-sm ml-8 mt-2'>
                        Single family rentals(often abbriviated as SFR) are rentals in which only one rental associated to a specific address.
                        This type of rental is usually used for a house, single mobile home, or a single condo. 
                        <strong>This type of property does not allow to add any units/rooms.</strong>
                      </p>
                  </span>
                  <span className='items-center gap-3 border rounded-lg p-4'>
                    <Circle className='absolute w-5'/>
                    <h1 className='ml-8 font-semibold'>Multi Unit type</h1>
                    <p className='ml-8 text-sm mt-2'>
                      Multi-unit property are for rentals in which there are multiple rental units per a single address. 
                      This type of propety is typically used for renting out rooms of a house, apartment units, office units, condos, garages, storage units, mobile home park and etc.
                    </p>
                  </span>
                </div>
              </div>
              <Separator className='mt-6'/>
              <div className='mt-4'>
                <div className='flex justify-between'>
                  <h1 className='font-semibold text-[13px]'>Unit 1</h1>
                  <a href="#" className=''>
                    <h1 className='flex items-center gap-2 font-semibold text-[12px] text-orange-500 hover:text-orange-600'>remove <X className='h-4'/></h1>
                  </a>
                </div>
                
                <div className='flex gap-9 mt-4'>
                  <div className=' w-[160px] p-2'>
                    <Label>unit # *</Label>
                    <Input className='bg-transparent border-muted-foreground focus:border-none'/>
                  </div>
                  <div className='p-2 '>
                    <Label>Unit type *</Label>
                    <Select>
                      <SelectTrigger className='bg-transparent w-[350px] focus:border-none border-muted-foreground'>Select Type</SelectTrigger>
                      <SelectContent>
                        <SelectItem value='apartment'>Apartment</SelectItem>
                        <SelectItem value='parking-space'>Parking Space</SelectItem>
                        <SelectItem value='storage-unit'>Storage unit</SelectItem>
                        <SelectItem value='room'>Room</SelectItem>
                        <SelectItem value='office-unit'>Office unit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='p-2 '>
                    <Label>Size, sq.ft</Label>
                    <Input className='bg-transparent border-muted-foreground focus:border-none'/>
                  </div>
                </div>
                <div className='flex gap-7 mt-8'>
                  <div className='p-2'>
                    <Label>Beds</Label>
                    <Select>
                      <SelectTrigger className='bg-transparent w-[150px] border-muted-foreground focus:border-none'></SelectTrigger>
                      <SelectContent>
                        <SelectItem value='1'>1</SelectItem>
                        <SelectItem value='2'>2</SelectItem>
                        <SelectItem value='3'>3</SelectItem>
                        <SelectItem value='4'>4</SelectItem>
                        <SelectItem value='5'>5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='p-2'>
                    <Label>Baths</Label>
                    <Select>
                      <SelectTrigger className='bg-transparent w-[150px] border-muted-foreground focus:border-none'></SelectTrigger>
                      <SelectContent>
                        <SelectItem value='1'>1</SelectItem>
                        <SelectItem value='1.5'>1.5</SelectItem>
                        <SelectItem value='2'>2</SelectItem>
                        <SelectItem value='2.5'>2.5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='p-2'>
                    <Label>Rent</Label>
                    <Input className='bg-transparent border-muted-foreground focus:border-none'/>
                  </div>
                  <div className='p-2'>
                    <Label>Deposit</Label>
                    <Input className='bg-transparent border-muted-foreground focus:border-none'/>
                  </div>
                </div>
                <div className=''>
                  <a href="#" className='flex gap-2 items-center mt-4 p-2 text-orange-500 hover:text-orange-600'>
                  <PlusCircle className='h-6'/>
                  <p className='font-semibold'>Add unit</p>
                  </a>
                </div>
              </div>
              <Separator className='mt-6'/>
              <div className='relative mt-4'>
                <h1 className='font-semibold'>PROPERTY FEATURES</h1>
                <div className='dark:text-white grid grid-cols-6 gap-x-3 gap-y-4 mt-4'>
                  {features.map((feature) => (
                    <Toggle
                    key={feature}
                    pressed={selectedFeatures.has(feature)}
                    onPressedChange={() => handleToggle(feature)}
                    variant='outline'
                    className={`${selectedFeatures.has(feature) ? 'dark:bg-zinc-500' : 'dark:bg-zinc-800 bg-zinc-400'} rounded-3xl`}
                    >
                      {feature}
                    </Toggle>
                  ))}
                </div>
              </div>
              <Separator className='mt-6'/>
              <div className='mt-4'>
                <h1 className='font-semibold'>PROPERTY ATTACHMENTS</h1>
                <div className='dark:bg-zinc-800 bg-zinc-200 h-[100px] rounded-lg mt-4'>
                  <span className='flex flex-col justify-center items-center pt-4'>
                    <CloudUpload className='w-10 h-10'/>
                    <h1 className='font-bold'>Upload</h1>
                    <p className='text-sm'>Store documents and templates</p>
                  </span>
                </div>
              </div>
              <Separator className='mt-4'/>
              <div className='flex justify-between mt-4'>
                <Button className='w-24 dark:bg-zinc-950 text-white'>Cancel</Button>
                <Button className='w-24 dark:bg-zinc-950 text-white'>Create</Button>
              </div>
            </CardContent>

          </Card>

        </div>
    </>
  )
}
