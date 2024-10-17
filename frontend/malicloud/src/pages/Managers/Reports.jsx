import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';

export default function Reports() {
  return (
    <>
    <Helmet>
      <title>Reports - MaliCloud</title>
    </Helmet>
    <Header/>
      <div className='text-center'>Reports</div>
    </>
    
  )
}
