import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const FilterMenu = () => {
    const [openFilter, setOpenFilter] = useState(null);

    function toggleSection(arg) {
        setOpenFilter(openFilter === arg ? null : arg);
    }
    return (
        <div className='pr-4'>
            <div className='filter border-b-[1px] border-b-[#979797] py-4 pr-1 overflow-hidden duration-300'>
                <div onClick={() => toggleSection(1)} className='flex justify-between cursor-pointer'>
                    <h3 className='text-[1.125rem] font-normal block leading-[1.5] pb-4'>Category</h3>
                    {openFilter === 1 ? <FaMinus /> : <FaPlus />}
                </div>
                <ul style={{ maxHeight: openFilter === 1 ? '500px' : '0', transition: 'max-height 0.5s ease', }} className="pl-3 text-xs font-medium overflow-hidden">
                    <li className='cursor-pointer underline pb-1'>View all</li>
                    <li className='cursor-pointer underline pb-1'>New Arrivals</li>
                    <li className='cursor-pointer underline pb-1'>Activewear</li>
                    <li className='cursor-pointer underline pb-1'>Shirts</li>
                </ul>
            </div>

            <div className='filter border-b-[1px] border-b-[#979797] py-4 pr-1 overflow-hidden'>
                <div onClick={() => toggleSection(2)} className='flex justify-between cursor-pointer'>
                    <h3 className='text-[1.125rem] font-normal block leading-[1.5] pb-4'>Color</h3>
                    {openFilter === 2 ? <FaMinus /> : <FaPlus />}
                </div>
                <div style={{ maxHeight: openFilter === 2 ? '500px' : '0', transition: 'max-height 0.5s ease', }} className='overflow-hidden duration-300  pl-3'>
                    <span className='cursor-pointer block bg-brown pb-1 bg-[#f5f5dc] border-[1px] border-black rounded-[3px] p-[2px] w-[30px] h-[30px]'></span>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu