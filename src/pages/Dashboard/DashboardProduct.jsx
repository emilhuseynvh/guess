import React from 'react'
import { Link } from 'react-router-dom'
import DashboardTable from '../../Components/Dashboard/DashboardProduct/DashboardTable'
import DashboardButton from '../../Components/Dashboard/DashboardButton'

const DashboardProduct = () => {
  return (
    <div className='bg-dashboardPrimary w-[99vw] h-screen py-4 px-8 text-white'>
      <DashboardButton name='Add Product' />
      <div style={{ boxShadow: '0px 2px 1px -1px rgba(255, 255, 255, 0.05)' }} className='rounded-lg w-full px-8 bg-dashboardSecondary h-[572px] my-8'>
        <div className='w-full pt-4 pb-2 pr-4 pl-4 flex justify-between'>
          <p className='text-base font-medium'>Added Products</p>
          <input style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-1 px-[.8rem] rounded' placeholder='Search' type="text" />
        </div>
        <DashboardTable />
      </div>
    </div>
  )
}

export default DashboardProduct