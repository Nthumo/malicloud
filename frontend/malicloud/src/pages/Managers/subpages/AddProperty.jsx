import React, {useState} from 'react';
import Header from '@/components/common/Header';
import { Link, useNavigate } from 'react-router-dom';
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
import SelectHouseType from '@/components/managers/SelectHouseType';
import AddUnit from '@/components/managers/AddUnit';
import PropertyAttachement from '@/components/managers/PropertyAttachement';

export default function AddProperty() {
  const [selectedFeatures, setSelectedFeatures] = useState(new Set());
  const [formData, setSetFormData] = useState({
    propertyName: '',
    yearBuilt: '',
    mls: '',
    address: '',
    city: '',
    county: '',
    zip: '',
    constituency: '',
    unitType: '',
    units: [{ unitNumber: '', type: '', size: '', beds: '', baths: '', rent: '', deposit: ''}],
    features: [],
    attachments: [],
    propertyPhoto: [],
    propertyGallery: []
  });

  const navigate = useNavigate();

  const handleCreate = () => {
    console.log('Creating property with details:', formData)
  }

  {/** const handleCreate = async () => {
    try {
        // Example: Posting formData to your backend
        const response = await axios.post('/api/properties', formData);
        if (response.status === 201) {
            // Successfully created the property, navigate to property list or details page
            navigate(`/properties/${response.data.id}`);
        }
    } catch (error) {
        console.error("Error creating property:", error);
        // Handle errors, e.g., display a message to the user
    }
};
*/}
  
  

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
      <div className='md:flex gap-12 md:ml-32 ml-14 md:mt-8 mt-4'>
        <Card className='dark:bg-zinc-900 bg-zinc-300 md:w-[830px] w-[350px] mb-8'>
          <CardHeader className='p-2'>
            <CardTitle className='md:text-[16px] text-[13px]'>
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
            <div className='md:flex md:gap-14 mt-8'>
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
                <span className='md:w-[350px]'>
                  <label htmlFor="year" className='text-sm'>Constituency *</label>
                  <Input className='dark:bg-transparent mt-2 dark:border-muted-foreground border-black focus:border-none' placeholder='Enter constituency name'/>
                </span>
            </div>
            <Separator className='mt-6'/>
            <SelectHouseType/>
            <Separator className='mt-6'/>
            <AddUnit/>
            <Separator className='mt-6'/>
            <div className='relative mt-4'>
              <h1 className='md:font-semibold font-bold md:text-[14px] text-[12px]'>PROPERTY FEATURES</h1>
              <div className='dark:text-white grid md:grid-cols-6 grid-cols-3 gap-x-3 gap-y-4 mt-4'>
                {features.map((feature) => (
                  <Toggle
                  key={feature}
                  pressed={selectedFeatures.has(feature)}
                  onPressedChange={() => handleToggle(feature)}
                  variant='outline'
                  className={`${selectedFeatures.has(feature) ? 'dark:bg-zinc-500' : 'dark:bg-zinc-800 bg-zinc-400'} md:text-[12.5px] text-[11px] rounded-lg`}
                  >
                    {feature}
                  </Toggle>
                ))}
              </div>
            </div>
            <Separator className='mt-6'/>
            <PropertyAttachement/>
            <Separator className='mt-4'/>
            <div className='flex justify-between mt-4'>
              <Link
              to='/manager/properties'
              >
                <Button className='w-24 dark:bg-zinc-950 text-white'>Cancel</Button>
              </Link>
              <Button 
              onClick={handleCreate}
              className='w-24 dark:bg-zinc-950 text-white'>
                Create
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className='dark:bg-zinc-900 bg-zinc-300 w-[300px]'>
          <CardContent>
            <PropertyImageUpload/>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
