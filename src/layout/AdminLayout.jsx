import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../Components/Dashboard/DashboardHeader'
import { Toaster } from 'react-hot-toast'
import Sidebar from '../Components/Dashboard/Sidebar'
import { Helmet } from 'react-helmet-async'

const AdminLayout = () => {
  return (
    <div id='dashboard' className='overflow-y-hidden h-screen'>
      <Helmet>
        <title> Guess | Dashboard</title>
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />
      <DashboardHeader />
      <div className='flex w-screen'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
