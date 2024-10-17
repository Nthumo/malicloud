import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';

export default function Documents() {
  return (
    <>
      <Helmet>
        <title>Documents - MaliCloud</title>
      </Helmet>
      <Header/>
      <div className='text-center'>Documents</div>
    </>
    
  )
}
