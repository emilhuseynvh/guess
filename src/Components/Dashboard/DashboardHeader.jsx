import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

const DashboardHeader = () => {
    return (
        <>
            <div className='bg-dashboardSecondary flex items-center fixed w-screen z-30'>
                <div className='w-60 h-[68px] flex items-center justify-center border-r border-b border-[#FFFFFF1A]'>
                    <img src="https://spruko.com/demo/xintra/dist/assets/images/brand-logos/desktop-dark.png" alt="Dashboard Logo" />
                </div>
                <div className='pl-6 flex items-center justify-end w-[84vw]'>
                    <img className='w-8 h-8 rounded-[4px]' src="https://spruko.com/demo/xintra/dist/assets/images/faces/15.jpg" alt="Profile" />
                </div>
            </div>
            <div className='w-full h-[68px]'></div>
        </>
    )
}

export default DashboardHeader