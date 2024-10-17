import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header'

export default function Accounting() {
  return (
    <>
    <Helmet>
      <title>Accounting - MaliCloud</title>
    </Helmet>
      <Header/>
      <div className='text-center'>Accounting</div>
    </>
    
  )
}
