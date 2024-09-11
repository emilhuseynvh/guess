import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setFlag } from '../../../redux/updateSlice';

const DashboardModal = ({ createCategory, setCreateCategry, children, updateCat }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className='absolute inset-0 opacity-40 bg-black z-40 w-screen h-screen'></div>
            <div style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='bg-dashboardSecondary w-[35%] h-[350px] px-8 pb-8 z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                <div className='w-full flex justify-end mb-7 mt-6'>
                    <IoMdClose onClick={() => { setCreateCategry ? setCreateCategry(!createCategory) : dispatch(setFlag(null)) }} className='absolute text-xl cursor-pointer' />
                </div>
                {children}
            </div>
        </div>
    )
}

export default DashboardModal