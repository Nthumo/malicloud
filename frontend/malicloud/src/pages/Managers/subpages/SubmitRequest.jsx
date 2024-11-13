import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SubmitRequest() {
  return (
    <>
    <Helmet>
        <title>MaliCloud - Submit request</title>
    </Helmet>
        <div className='text-center text-lg'>
            <div className='ml-4 pt-40'>
                <h1 className='text-xl font-bold'>Maintenance request</h1>
            </div>
        </div>
    </>
  )
}
