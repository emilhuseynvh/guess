import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../Components/Dashboard/DashboardHeader'
import { Toaster } from 'react-hot-toast'
import Sidebar from '../Components/Dashboard/Sidebar'

const AdminLayout = () => {
  return (
    <div id='dashboard'>
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