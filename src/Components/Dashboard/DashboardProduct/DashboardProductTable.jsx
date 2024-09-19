import React, { useEffect } from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteProductMutation } from '../../../redux/api';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setCreateProduct } from '../../../redux/createProductSlice';
import { setProductUpdate } from '../../../redux/productUpdateSlice';

const DashboardProductTable = ({ item }) => {
    const dispatch = useDispatch()

    const { id, images, Brands, name, category, price, subcategory, discount } = item

    const [ProductId, { isSuccess, isError }] = useDeleteProductMutation()

    useEffect(() => {
        isSuccess && toast.success('The product has been removed')
        isError && toast.error('Error')
    }, [isSuccess, isError])

    const handleDelete = async () => {
        await ProductId(id)
    }

    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td className='flex items-center'>
                    <div className='bg-[#2B2E31] w-10 h-10 rounded-sm'>
                        <img className='w-10 h-10' src={images[0]} alt="Product img" />
                    </div>
                    <p className='ml-2'>{name}</p>
                </td>
                <td>${price}</td>
                <td>{category?.name}</td>
                <td>{Brands.name}</td>
                <td>
                    <p className='bg-dashboardBtn w-12 h-5 rounded ml-4'>{discount}%</p>
                </td>
                <td>{subcategory?.name}</td>
                <td>
                    <div className='flex justify-center'>
                        <div className='bg-[#0EA5E819] p-2 rounded mr-2 cursor-pointer text-[#0EA5E8] hover:text-white hover:bg-[#0EA5E8]'>
                            <MdOutlineModeEditOutline onClick={() => dispatch(setProductUpdate(id))} className='w-4 h-4 ' />
                        </div>
                        <div className='bg-[#FF5D9F19] p-2 rounded ml-2 text-[#FF5D9F] cursor-pointer hover:bg-[#FF5D9F] duration-200 hover:text-white'>
                            <FaRegTrashAlt onClick={() => handleDelete()} className='w-4 h-4' />
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    )
}

export default DashboardProductTable