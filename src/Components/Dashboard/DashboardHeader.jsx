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
                <div className='pl-6 flex items-center justify-between w-[84vw]'>
                    <div className='flex items-center'>
                        <RiMenu2Fill className='text-[#F0F5F8] text-2xl' />
                        <div className='relative rounded-[.3rem] ml-3'>
                            <IoSearchSharp className='absolute text-lg text-[#FFFFFF99] top-1/2 -translate-y-1/2 left-2' />
                            <input className='text-[#FFFFFF99] text-sm bg-[#FFFFFF0D] w-80 h-[35px] rounded-[.3rem] px-8 outline-none' placeholder='Search anything here...' type="text" />
                        </div>
                    </div>
                    <img className='w-8 h-8 rounded-[4px]' src="https://spruko.com/demo/xintra/dist/assets/images/faces/15.jpg" alt="Profile" />
                </div>
            </div>
            <div className='w-full h-[68px]'></div>
        </>
    )
}

export default DashboardHeader