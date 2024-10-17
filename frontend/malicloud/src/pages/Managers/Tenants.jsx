import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/common/Header';

export default function Tenants() {
  return (
    <>
    <Helmet>
      <title>Tenants - MaliCloud</title>
    </Helmet>
    <Header/>
      <div className='text-center'>Tenants</div>
    </>
    
  )
}
