import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegistarationSelection from './components/Registration/RegistrationSelection';
import LandlordRegistration from './pages/Landlords/LandlordRegistration';
import TenantRegistration from './pages/Tenants/TenantRegistration';
import PropertyManagerRegistration from './pages/Managers/PropertyManagerRegistration';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SigninPage';
import TenantSidebar from './pages/Tenants/TenantSidebar';
import TenantApplications from './pages/Tenants/Applications';
import TenantFileManager from './pages/Tenants/File-manager';
import TenantMaintenanceRequests from './pages/Tenants/Maintenance';
import TenantRent from './pages/Tenants/Rent';
import Dashboard from './pages/Tenants/Dashboard';
import Once from './pages/Tenants/Payments/Once';
import Recurring from './pages/Tenants/Payments/Recurring';
import HomePage from './pages/Managers/Dashboard';
import Accounting from './pages/Managers/Accounting';
import Documents from './pages/Managers/Documents';
import Leases from './pages/Managers/Leases';
import Maintenance from './pages/Managers/Maintenance';
import Properties from './pages/Managers/Properties';
import Reports from './pages/Managers/Reports';
import Tenants from './pages/Managers/Tenants';
import AddTenant from './pages/Managers/AddTenant';
import TenantProfile from './pages/Managers/subpages/TenantProfile';
import PropertyDetails from './pages/Managers/subpages/PropertyDetails';
import Layout from './pages/Managers/ManagerLayout';
import PropertiesPage from './pages/Managers/PropertiesPage';
import EditProperty from './pages/Managers/subpages/PropertyDetails';
import AddProperty from './pages/Managers/subpages/AddProperty';
import Requests from './pages/Managers/Requests';
import SubmitRequest from './pages/Managers/subpages/SubmitRequest';
import LandLordDashboard from './pages/Landlords/Dashboard';


function App() {

  const helmetContext = {};
  return (
    <>
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <link rel="icon" type='image/png' href="/cloud2.png" />
        <link rel="shortcut icon" href="/cloud2.png"/>
        <title>MaliCloud - Property Management</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<RegistarationSelection />}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/signup/tenant' element={<TenantRegistration />}/>
          <Route path='/signup/landlord' element={<LandlordRegistration />}/>
          <Route path='/signup/property-manager' element={<PropertyManagerRegistration />}/>
          <Route path='/pay_once' element={<Once/>}/>
          <Route path='/recurring' element={<Recurring/>}/>

          <Route path='/tenant' element={<TenantSidebar/>}>
            <Route path='/tenant' element={<Dashboard/>}/>
            <Route path='applications' element={<TenantApplications/>}/>
            <Route path='file-manager' element={<TenantFileManager/>}/>
            <Route path='maintenance' element={<TenantMaintenanceRequests/>}/>
            <Route path='transactions' element={<TenantRent/>}/>
          </Route>

          <Route path='/manager' element={<Layout/>}>
            <Route path='/manager' element={<HomePage/>}/>
            <Route path='accounting' element={<Accounting/>}/>
            <Route path='documents' element={<Documents/>}/>
            <Route path='leases' element={<Leases/>}/>
            <Route path='requests' element={<Requests/>}>
              <Route index element={<Maintenance/>}/>
              <Route path='submit-request' element={<SubmitRequest/>}/>
            </Route>
            <Route path='properties' element={<Properties/>}>
                <Route index element={<PropertiesPage/>}/>
                <Route path='property-details' element={<PropertyDetails/> }/>
                <Route path='add-property' element={<AddProperty/>}/>
                <Route path='edit-property' element={<EditProperty/>}/>
            </Route>
            <Route path='reports' element={<Reports/>}/>
            <Route path='tenants' element={<Tenants/>}/>
            <Route path='add-tenant' element={<AddTenant/>}/>
            <Route path='tenant-profile' element={<TenantProfile/>}/>
          </Route>

          <Route path='/landlord' element={<LandLordDashboard/>}>

          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
    </>
  )
}

export default App

