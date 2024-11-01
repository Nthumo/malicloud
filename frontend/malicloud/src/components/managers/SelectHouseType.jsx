import React, {useState} from 'react';
import { Circle, CheckCircle } from 'lucide-react';

export default function SelectHouseType() {
    const[selectedType, setSelectedType] = useState(null);

  return (
    <div className='mt-4'>
    <h1 className='font-semibold'>PROPERTY TYPE</h1>
    <div className='flex gap-8 mt-4'>
      <div
        onClick={() => setSelectedType('single')}
        className={`relative gap-3 items-center border rounded-lg p-4 cursor-pointer ${
            selectedType == 'single' ? 'border-green-800 bg-zinc-950' : 'border-gray-600'
        }`}
        >
        <div>
            {selectedType === 'single' ? (
                <CheckCircle className='text-green-500'/>
            ): (
                <Circle/>
            )}
          <h1 className='ml-8 font-semibold'>Single Unit type</h1>
        </div>
          <p className='text-sm ml-8 mt-2'>
            Single family rentals(often abbriviated as SFR) are rentals in which only one rental associated to a specific address.
            This type of rental is usually used for a house, single mobile home, or a single condo. 
            <strong>This type of property does not allow to add any units/rooms.</strong>
          </p>        
      </div>

      <div
        onClick={() => setSelectedType('multi')}
        className={`items-center gap-3 border rounded-lg p-4 cursor-pointer ${
            selectedType == 'multi' ? 'border-green-800 bg-zinc-950' : 'border-gray-600'
        }`}
        >
        <div>
            {selectedType === 'multi' ? (
                <CheckCircle className='text-green-500'/>
            ): (
                <Circle/>
            )}
            <h1 className='ml-8 font-semibold'>Multi Unit type</h1>
        </div>
        <p className='ml-8 text-sm mt-2'>
          Multi-unit property are for rentals in which there are multiple rental units per a single address. 
          This type of propety is typically used for renting out rooms of a house, apartment units, office units, condos, garages, storage units, mobile home park and etc.
        </p>
      </div>
    </div>
  </div>
  )
}