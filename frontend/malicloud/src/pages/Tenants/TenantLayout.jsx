import React from 'react';
import { Outlet } from 'react-router-dom';
import TenantHome from './TenantSidebar';

export default function TenantLayout() {
  return (
    <div className='flex'>
        <TenantHome/>
        <div className='flex'>
            <Outlet/>
        </div>
    </div>
  )
};
