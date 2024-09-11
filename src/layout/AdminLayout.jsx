import React from 'react'
import Sidebar from '../pages/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../Components/Dashboard/DashBoardHeader'
import { Toaster } from 'react-hot-toast'

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