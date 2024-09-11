import React from 'react'
import { Link } from 'react-router-dom'

const DashboardButton = ({ name }) => {
    return (
        <div className='w-full flex justify-end'>
            <Link className='bg-dashboardBtn hover:bg-[#5C67F7E6] duration-100 py-[.375rem] px-3 rounded-[4px] text-sm'>{name}</Link>
        </div>
    )
}

export default DashboardButton