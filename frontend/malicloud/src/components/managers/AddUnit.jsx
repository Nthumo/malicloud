import React, {useState} from 'react';
import { Label } from '../ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem } from '../ui/select';
import { Input } from '../ui/input';
import { PlusCircle, X } from 'lucide-react';
import { Button } from '../ui/button';


export default function AddUnit() {
    const [units, setUnits] = useState([{ id: 1, unitNumber:'', unitType: '', size: '', beds: '', baths: '', rent: '', deposit: ''}]);

     // Function to add new unit
    const addUnit = () => {
        setUnits([
        ...units,
        {id: units.length + 1, unitNumber: '', unitType: '', size: '', beds: '', baths: '', rent: '', deposit: ''}
        ]);
    };

    // Funtion to remove a unit by index
    const removeUnit = (index) => {
        setUnits(units.filter((_, i) => i !== index));
    };

    // Handle input change for each unit
    const handleInputChange = (index, field, value) => {
        const updatedUnits = units.map((unit, i) =>
            i == index ? { ...unit, [field]: value }: unit
        );
        setUnits(updatedUnits);
    };

  return (
    <div>
        {units.map((unit, index) => (
        <div key={unit.id} className='mt-4'>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-[13px]'>Unit {unit.id}</h1>
                <Button onClick={() => removeUnit(index)} className='bg-transparent hover:bg-transparent'>
                    <h1 className='flex items-center gap-2 font-semibold text-[12px] text-orange-500 hover:text-orange-600'>remove <X className='h-4'/></h1>
                </Button>
            </div>
            
            <div className='flex gap-9 mt-4'>
                <div className=' w-[160px] p-2'>
                    <Label>unit # *</Label>
                    <Input
                    value={unit.unitNumber}
                    onChange={(e) => handleInputChange(index, 'unitNumber', e.targer.value)}
                     className='bg-transparent border-muted-foreground focus:border-none'
                    />
                </div>
                <div className='p-2 '>
                <Label>Unit type *</Label>
                <Select className='focus:ring-0 focus:outline-none'>
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
                <Button 
                onClick={addUnit} 
                className='flex gap-2 items-center mt-4 p-2 text-orange-500 hover:text-orange-600 bg-transparent hover:bg-transparent'>
                    <PlusCircle className='h-6'/>
                    <p className='font-semibold'>Add unit</p>
                </Button>
            </div>
        </div>
        ))}
 
    </div>
  )
}
