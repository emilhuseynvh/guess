import React, { useEffect, useState } from 'react';
import DashboardButton from '../../Components/Dashboard/DashboardButton';
import { useCreateCategoryMutation, useDeleteCategoryMutation, useGetAllCategoriesQuery, useUpdateCategoryMutation } from '../../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/open';
import toast from 'react-hot-toast';
import BrandButton from '../../Components/Dashboard/DashboardButton';
import BrandModal from '../../Components/Dashboard/DashboardModal';
import DashboardTable from '../../Components/Dashboard/DashboardTable';
import SubCategoryModal from '../../Components/Dashboard/SubCategory/SubCategoryModal';
import Loader from '../../Components/MainPage/Loader';

const DashboardCategory = () => {
    const dispatch = useDispatch();
    const { open } = useSelector((state) => state.open);

    const { subCategory } = useSelector((state) => state.subCategory)

    const [category, setCategory] = useState(true)

    const { data: allCategories, isLoading } = useGetAllCategoriesQuery();

    const [createCategory, { data: createData, error: createError, isSuccess: createSuccess, isError: createIsError }] = useCreateCategoryMutation();
    const [updateCategory, { data: updateData, error: updateError, isSuccess: updateSuccess, isError: updateIsError }] = useUpdateCategoryMutation();
    const [deleteCategory, { error: deleteError, isSuccess: deleteSuccess, isError: deleteIsError }] = useDeleteCategoryMutation();
    console.log(deleteError);


    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (updateSuccess) toast.success('Category updated successfully');
        if (updateIsError) toast.error(updateError?.data?.message || 'Error updating category');
    }, [updateSuccess, updateIsError]);

    useEffect(() => {
        if (createSuccess) toast.success('Category added successfully');
        if (createIsError) toast.error(createError?.data?.message || 'Error adding category');
    }, [createSuccess, createIsError]);

    useEffect(() => {
        if (deleteSuccess) toast.success('Category deleted successfully');
        if (deleteIsError) toast.error(deleteError?.data?.message || 'Error deleting category');
    }, [deleteSuccess, deleteIsError]);

    const handleDelete = async (id) => {
        console.log(id);

        await deleteCategory(id);
    };

    const handleCreateSubmit = async () => {
        if (name && slug) {
            await createCategory({ name, slug });
            dispatch(setOpen());
        } else {
            toast.error('Fill all fields');
        }
    };

    const handleUpdateSubmit = async () => {
        if (name && slug && selectedCategory) {
            await updateCategory({ id: selectedCategory.id, name, slug });
            dispatch(setOpen());
        } else {
            toast.error('Fill all fields');
        }
    };

    const inputDetails = [
        {
            type: 'text',
            label: 'Name of the category',
            placeholder: 'Enter the name of the category',
            onChange: (e) => setName(e.target.value),
            value: name,
        },
        {
            type: 'text',
            label: 'Slug name of the category',
            placeholder: 'Enter the slug name of the category',
            onChange: (e) => setSlug(e.target.value),
            value: slug,
        },
    ];

    const handleEdit = (category) => {
        setName(category.name);
        setSlug(category.slug);
        setSelectedCategory(category);
        dispatch(setOpen());
    };

    return isLoading ? (
        <Loader admin={true} />
    ) : (
        <div className='bg-dashboardPrimary w-[99vw] h-screen py-4 px-8 text-white'>
            <div className='flex justify-end'>
                <div onClick={() => { setName(''); setSlug(''); setSelectedCategory(null); dispatch(setOpen()); }}>
                    <BrandButton name='Create Category' />
                </div>
            </div>
            <div style={{ boxShadow: '0px 2px 1px -1px rgba(255, 255, 255, 0.05)' }} className='w-[100%] rounded-lg  px-8 bg-dashboardSecondary h-[572px] my-8'>
                <div className='w-full pt-4 pb-2 pr-4 pl-4 flex justify-between'>
                    <p className='text-base font-medium'>All Categories</p>
                </div>
                <div className='flex justify-between bg-white text-black py-1.5 px-2 my-4'>
                    <p>Category ID</p>
                    <p>Category name</p>
                    <p>Slug name</p>
                    <p>Actions</p>
                </div>
                <div className='scroll overflow-y-auto h-[400px]'>
                    {allCategories?.map((item, i) => (
                        <DashboardTable key={i} category={category} item={item} onEdit={() => handleEdit(item)} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
            {open && (
                <BrandModal handleSubmit={selectedCategory ? handleUpdateSubmit : handleCreateSubmit} inputDetails={inputDetails} isEdit={!!selectedCategory} />
            )}
            {subCategory && <SubCategoryModal />}
        </div>
    );
};

export default DashboardCategory;
