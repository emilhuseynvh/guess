import React, { useEffect, useState } from 'react';
import DashboardModal from './DashboardModal';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoryByIdMutation, useUpdateCategoryMutation } from '../../../redux/api';
import toast from 'react-hot-toast';
import { setFlag } from '../../../redux/updateSlice';
import { setShow } from '../../../redux/dropdownSlice';

const UpdateCategory = () => {
    const dispatch = useDispatch()

    const { flag } = useSelector((state) => state.update);

    const id = flag;

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    const [getCategoryById, { data, isSuccess: getCategorySucces }] = useGetCategoryByIdMutation();
    const [updateCategory, { isSuccess: updateCategorySuccess, isError: updateCategoryError }] = useUpdateCategoryMutation()


    useEffect(() => {
        if (id) {
            getCategoryById(id);
        }
    }, [id, getCategoryById]);

    useEffect(() => {
        if (getCategorySucces && data) {
            setName(data.name || '');
            setSlug(data.slug || '');
        }
    }, [data, getCategorySucces]);

    useEffect(() => {
        if (updateCategorySuccess) {
            toast.success('Category updated succesfully')
            dispatch(setFlag(null))
            dispatch(setShow(null))
        }
    }, [updateCategorySuccess, updateCategoryError, updateCategory])

    const handleSubmit = async () => {
        await updateCategory({ id, name, slug })
    };

    return (
        <div className={flag ? 'block' : 'hidden'}>
            <DashboardModal>
                <div className='w-full'>
                    <label className='px-1 text-sm' htmlFor='name'>Name *</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn mt-1 w-full outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded' placeholder='Enter the name of category' type='text' id='name' />
                </div>
                <div className='mt-8'>
                    <div className='w-full'>
                        <label className='px-1 text-sm' htmlFor='slug'>Slug *</label>
                        <input value={slug} onChange={(e) => setSlug(e.target.value)} style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn mt-1 w-full outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded' placeholder='Enter the slug name of category' type='text' id='slug' />
                    </div>
                </div>
                <button onClick={() => handleSubmit()} className='bg-dashboardBtn hover:bg-[#5C67F7E6] mt-8 mb-2 duration-100 py-[.6rem] text-center px-3 rounded-[4px] block text-sm w-full'> Update Category </button>
            </DashboardModal>
        </div>
    );
};

export default UpdateCategory;