import React, {useState} from 'react';
import { Circle, CheckCircle } from 'lucide-react';

export default function SelectHouseType() {
    const[selectedType, setSelectedType] = useState(null);

  return (
    <div className='mt-4'>
    <h1 className='font-semibold'>PROPERTY TYPE</h1>
    <div className='flex md:gap-8 gap-2 mt-4'>
      <div
        onClick={() => setSelectedType('single')}
        className={`relative gap-3 items-center border rounded-lg p-4 cursor-pointer md:h-[170px] h-[200px] overflow-scroll ${
            selectedType == 'single' ? 'dark:border-green-800 border-green-600 dark:bg-zinc-950 bg-zinc-400' : 'border-gray-600'
        }`}
        >
        <div>
            {selectedType === 'single' ? (
                <CheckCircle className='md:h-7 h-6 dark:text-green-500 text-green-700'/>
            ): (
                <Circle className='md:h-7 h-5'/>
            )}
          <h1 className='md:ml-8 md:font-semibold font-bold underline md:text-[14px] text-[12px]'>Single Unit type</h1>
        </div>
          <p className='text-sm md:ml-8 mt-2'>
            Single family rentals(often abbriviated as SFR) are rentals in which only one rental associated to a specific address.
            This type of rental is usually used for a house, single mobile home, or a single condo. 
            <strong>This type of property does not allow to add any units/rooms.</strong>
          </p>        
      </div>

      <div
        onClick={() => setSelectedType('multi')}
        className={`relative items-center gap-3 border rounded-lg p-4 cursor-pointer md:h-[170px] h-[200px] overflow-scroll ${
            selectedType == 'multi' ? 'dark:border-green-800 border-green-600 dark:bg-zinc-950 bg-zinc-400' : 'border-gray-600'
        }`}
        >
        <div>
            {selectedType === 'multi' ? (
                <CheckCircle className=' md:h-7 h-6 dark:text-green-500 text-green-700'/>
            ): (
                <Circle className='md:h-7 h-5'/>
            )}
            <h1 className='md:ml-8 md:font-semibold font-bold underline md:text-[14px] text-[12px]'>Multi Unit type</h1>
        </div>
        <p className='md:ml-8 text-sm mt-2'>
          Multi-unit property are for rentals in which there are multiple rental units per a single address. 
          This type of propety is typically used for renting out rooms of a house, apartment units, office units, condos, garages, storage units, mobile home park and etc.
        </p>
      </div>
    </div>
  </div>
  )
}