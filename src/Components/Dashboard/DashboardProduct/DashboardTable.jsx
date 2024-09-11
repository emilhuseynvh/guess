import React from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const DashboardTable = () => {
    return (
        <table id='product-table' className='border border-dashboardBorder w-full mt-4'>
            <thead>
                <tr>
                    <th>Product ID </th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Discount</th>
                    <th>Added date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#1547988</td>
                    <td className='flex items-center'>
                        <div className='bg-[#2B2E31] w-10 h-10 rounded-sm'>
                            <img className='w-10 h-10' src="https://spruko.com/demo/xintra/dist/assets/images/ecommerce/png/12.png" alt="Product img" />
                        </div>
                        <p className='ml-2'>Sweater Coat</p>
                    </td>
                    <td>$241.08</td>
                    <td>Women's wear</td>
                    <td>
                        <p className='bg-dashboardBtn w-10 h-5 rounded ml-4'>40%</p>
                    </td>
                    <td>15-05-2024</td>
                    <td>
                        <div className='flex justify-center'>
                            <div className='bg-[#0EA5E819] p-2 rounded mr-2 cursor-pointer text-[#0EA5E8] hover:text-white hover:bg-[#0EA5E8]'>
                                <MdOutlineModeEditOutline className='w-4 h-4 ' />
                            </div>
                            <div className='bg-[#FF5D9F19] p-2 rounded ml-2 text-[#FF5D9F] cursor-pointer hover:bg-[#FF5D9F] duration-200 hover:text-white'>
                                <FaRegTrashAlt className='w-4 h-4' />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default DashboardTable