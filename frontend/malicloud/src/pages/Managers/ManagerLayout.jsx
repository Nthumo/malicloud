import React from 'react';
import { Outlet } from 'react-router-dom';
import ManagerSidebar from './ManagerSidebar';

export default function Layout() {
  return (
    <>
    <div>
        <ManagerSidebar/>
    </div>
    <div>
        <Outlet/>
    </div>
    </>
  )
}
