import React, { useEffect, useState } from 'react'
import DashboardButton from '../../Components/Dashboard/DashboardButton'
import DashboardTable from '../../Components/Dashboard/DashboardProduct/DashboardTable'
import { useCreateCategoryMutation, useGetAllCategoriesQuery } from '../../redux/api'
import DashboardCategoryTable from '../../Components/Dashboard/DashboardCategory/DashboardCategoryTable'
import DashboardModal from '../../Components/Dashboard/DashboardCategory/DashboardModal'
import toast from 'react-hot-toast'
import UpdateCategory from '../../Components/Dashboard/DashboardCategory/UpdateCategory'

const DashboardCategory = () => {
    const { data: allCategories, error } = useGetAllCategoriesQuery()
    const [createNewCategory, { data, isSuccess, isError }] = useCreateCategoryMutation();
    const [createCategory, setCreateCategry] = useState(false)
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const updateCat = true

    useEffect(() => {
        if (isSuccess) {
            setCreateCategry(false);
            toast.success('Successfully created category!');
        } else if (isError) {
            toast.error('Error creating category');
        }
    }, [isSuccess, isError, setCreateCategry]);

    const handleSubmit = async () => {
        if (name && slug) {
            await createNewCategory({ name, slug });
        } else {
            toast.error('Please fill in all fields!');
        }
    };

    return (
        <div className='bg-dashboardPrimary w-[99vw] h-screen py-4 px-8 text-white'>
            <div>
                <div onClick={() => setCreateCategry(!createCategory)}>
                    <DashboardButton name='Create Category' />
                </div>
                <div style={{ boxShadow: '0px 2px 1px -1px rgba(255, 255, 255, 0.05)' }} className='w-[100%] rounded-lg  px-8 bg-dashboardSecondary h-[572px] my-8'>
                    <div className='w-full pt-4 pb-2 pr-4 pl-4 flex justify-between'>
                        <p className='text-base font-medium'>All Categories</p>
                        <input style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-1 px-[.8rem] rounded' placeholder='Search' type="text" />
                    </div>
                    <div className='flex justify-between bg-white text-black py-1.5 px-2 my-4'>
                        <p>Category ID</p>
                        <p>Category name</p>
                        <p>Slug name</p>
                        <p>Actions</p>
                    </div>
                    <div className='scroll overflow-y-auto h-[400px]'>
                        {allCategories?.map((item, i) => <DashboardCategoryTable key={i} item={item} />)}
                    </div>
                </div>
            </div>
            <div className={createCategory ? 'block' : 'hidden'}>
                <DashboardModal createCategory={createCategory} setCreateCategry={setCreateCategry} >
                    <div className='w-full'>
                        <label className='px-1 text-sm' htmlFor='name'>Name *</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn mt-1 w-full outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded' placeholder='Enter the name of category' type='text' />
                    </div>
                    <div className='mt-8'>
                        <div className='w-full'>
                            <label className='px-1 text-sm' htmlFor='slug'>Slug *</label>
                            <input value={slug} onChange={(e) => setSlug(e.target.value)} style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn mt-1 w-full outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded' placeholder='Enter the slug name of category' type='text' />
                        </div>
                    </div>
                    <button onClick={() => handleSubmit()} className='bg-dashboardBtn hover:bg-[#5C67F7E6] mt-8 mb-2 duration-100 py-[.6rem] text-center px-3 rounded-[4px] block text-sm w-full' > Create a Category </button>
                </DashboardModal>
            </div>
            <UpdateCategory updateCat={updateCat} />
        </div>
    )
}

export default DashboardCategory