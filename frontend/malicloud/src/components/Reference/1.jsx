import React, { useState } from 'react';
import Header from '@/components/common/Header';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardFooter, 
  CardTitle 
} from '@/components/ui/card';
import { Pagination } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

function TenantApplications() {
  // Assuming house data is available in the form of an array
  const houses = [
    { id: 1, title: 'Murang\'a House', price: 'Ksh. 10000', location: '32 Murang\'a Estate', img: '/house1.jpeg' },
    { id: 2, title: 'Fine House', price: 'Ksh. 10000', location: '3212 Fine Estate', img: '/house4.jpeg' },
    { id: 3, title: 'Embu House', price: 'Ksh. 10000', location: '300 Embu Estate', img: '/house5.jpeg' },
    { id: 4, title: 'UpperHill House', price: 'Ksh. 10000', location: '3212 UpperHill Estate', img: '/house7.jpeg' },
    // Add more house objects here
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Calculate total pages
  const totalPages = Math.ceil(houses.length / itemsPerPage);

  // Get current items for the page
  const currentHouses = houses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className='group'>
        {/* House List */}
        <div className='grid grid-cols-2 gap-2 gap-x-0 mb-12 items-center'>
          {currentHouses.map((house) => (
            <Card key={house.id} className='relative w-[240px] h-[240px] bg-zinc-900 text-white rounded border-none shadow-white hover:bg-zinc-800'>
              <CardHeader>
                <img src={house.img} alt={house.title} className='w-[190px] h-[100px]' />
                <div className='flex gap-8'>
                  <CardTitle className='text-lg'>{house.title}</CardTitle>
                  <CardTitle className='text-lg flex flex-col text-orange-500'>
                    {house.price}
                    <span className='text-xs text-center text-muted-foreground'>Monthly</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className='italic text-white'>
                  {house.location}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <CardFooter className='flex flex-row items-center border-t px-6 py-3 '>
          <Pagination className='ml-auto mr-0'>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className='mr-2'
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mr-2 ${currentPage === index + 1 ? 'bg-orange-500' : ''}`}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Pagination>
        </CardFooter>
      </div>
    </>
  );
}

export default TenantApplications;
