import React, { useEffect } from 'react'
import { useDeleteCategoryMutation } from '../../../redux/api'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setFlag } from '../../../redux/updateSlice'
import { setShow } from '../../../redux/dropdownSlice'

const DashboardCategoryTable = ({ item }) => {
    const dispatch = useDispatch()
    const { show } = useSelector((state) => state.dropdown);
    console.log(show);


    const { id, name, slug } = item

    const [deleteCategory, { data, isSuccess, isError, error }] = useDeleteCategoryMutation()
    console.log(error);


    useEffect(() => {
        console.log(isSuccess, isError);
        if (isSuccess) {
            console.log('salam');

            dispatch(setShow(null))
            toast.success('Category deleted succesfully')
        }
        else if (isError) {
            toast.error(error.data.error)
        }
    }, [isError, isSuccess, deleteCategory])

    const handleDelete = async (id) => {
        await deleteCategory({ id })
        console.log(error);

    }

    return (
        <div className='flex justify-between border-b border-dashboardBorder py-3 w-full pl-10 relative px-2'>
            <p className='text-start'>{id}</p>
            <p className='text-start'>{name}</p>
            <p className='text-start'>{slug}</p>
            <p onClick={() => show === id ? dispatch(setShow(null)) : dispatch(setShow(id))} className='text-base cursor-pointer select-none'>...</p>
            <ul style={{ boxShadow: '0 1rem 1.125rem rgba(40, 40, 40, 0.15)' }} className={`${show === id ? 'block' : 'hidden'} rounded-[.3rem] absolute -bottom-[105px] text-sm -right-0 z-40 w-[170px] border border-dashboardBorder bg-dashboardSecondary`}>
                <li onClick={() => dispatch(setShow(null))} className='py-2 px-[.9375rem] cursor-pointer hover:text-[#5C67F7] hover:bg-[#5C67F70C]'>Subcategories</li>
                <li onClick={() => dispatch(setFlag(id))} className='py-2 px-[.9375rem] cursor-pointer hover:text-[#5C67F7] hover:bg-[#5C67F70C]'>Update</li>
                <li onClick={() => handleDelete(id)} className='py-2 px-[.9375rem] cursor-pointer hover:text-[#5C67F7] hover:bg-[#5C67F70C]'>Delete</li>
            </ul>
        </div>
    )
}

export default DashboardCategoryTable
