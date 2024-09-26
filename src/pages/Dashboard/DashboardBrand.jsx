import React, { useEffect, useState } from 'react';
import DashboardButton from '../../Components/Dashboard/DashboardButton';
import { useCreateBrandMutation, useDeleteBrandMutation, useGetAllBrandsQuery, useUpdateBrandMutation } from '../../redux/api';
import DashboardTable from '../../Components/Dashboard/DashboardTable';
import BrandModal from '../../Components/Dashboard/DashboardModal';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/open';
import toast from 'react-hot-toast';
import BrandButton from '../../Components/Dashboard/DashboardButton';
import Loader from '../../Components/MainPage/Loader';

const DashboardBrand = () => {
    const dispatch = useDispatch();
    const { open } = useSelector((state) => state.open);

    const { data: allBrands, isLoading } = useGetAllBrandsQuery();
    console.log(allBrands);

    const [createBrand, { data: createData, error: createError, isSuccess: createSuccess, isError: createIsError }] = useCreateBrandMutation();
    const [updateBrand, { data: updateData, error: updateError, isSuccess: updateSuccess, isError: updateIsError }] = useUpdateBrandMutation();
    const [deleteBrand, { error: deleteError, isSuccess: deleteSuccess, isError: deleteIsError }] = useDeleteBrandMutation();



    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [selectedBrand, setSelectedBrand] = useState(null);

    useEffect(() => {
        if (updateSuccess) toast.success('Brand updated successfully');
        if (updateIsError) toast.error(updateError?.data?.message || 'Error updating brand');
    }, [updateSuccess, updateIsError])

    useEffect(() => {
        if (createSuccess) toast.success('Brand added successfully');
        if (createIsError) toast.error(createError?.data?.message || 'Error adding brand');
    }, [createSuccess, createIsError,])

    useEffect(() => {
        if (deleteSuccess) toast.success('Brand deleted successfully');
        if (deleteIsError) toast.error(deleteError?.data?.message || 'Error deleting brand');
    }, [deleteSuccess, deleteIsError])

    const handleDelete = async (id) => {
        console.log(id);
        await deleteBrand(id);
    };

    const handleCreateSubmit = async () => {
        if (name && slug) {
            await createBrand({ name, slug });
            dispatch(setOpen());
        } else {
            toast.error('Fill all fields');
        }
    };

    const handleUpdateSubmit = async () => {
        if (name && slug && selectedBrand) {
            await updateBrand({ id: selectedBrand.id, name, slug });
            dispatch(setOpen());
        } else {
            toast.error('Fill all fields');
        }
    };

    const inputDetails = [
        {
            type: 'text',
            label: 'Name of the brand',
            placeholder: 'Enter the name of the brand',
            onChange: (e) => setName(e.target.value),
            value: name,
        },
        {
            type: 'text',
            label: 'Slug name of the brand',
            placeholder: 'Enter the slug name of the brand',
            onChange: (e) => setSlug(e.target.value),
            value: slug,
        },
    ];

    const handleEdit = (brand) => {
        setName(brand.name);
        setSlug(brand.slug);
        setSelectedBrand(brand);
        dispatch(setOpen());
    };

    return isLoading ? (
        <Loader admin={true} />
    ) : (
        <div className='bg-dashboardPrimary w-[99vw] h-screen py-4 px-8 text-white'>
            <div className='flex justify-end'>
                <div onClick={() => { setName(''); setSlug(''); setSelectedBrand(null); dispatch(setOpen());}}>
                    <BrandButton name='Create Brand' />
                </div>
            </div>
            <div style={{ boxShadow: '0px 2px 1px -1px rgba(255, 255, 255, 0.05)' }} className='w-[100%] rounded-lg  px-8 bg-dashboardSecondary h-[572px] my-8'>
                <div className='w-full pt-4 pb-2 pr-4 pl-4 flex justify-between'>
                    <p className='text-base font-medium'>All Brands</p>
                    <input style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-1 px-[.8rem] rounded' placeholder='Search' type="text" />
                </div>
                <div className='flex justify-between bg-white text-black py-1.5 px-2 my-4'>
                    <p>Category ID</p>
                    <p>Category name</p>
                    <p>Slug name</p>
                    <p>Actions</p>
                </div>
                <div className='scroll overflow-y-auto h-[400px]'>
                    {allBrands?.map((item, i) => (
                        <DashboardTable key={i} item={item} onEdit={() => handleEdit(item)} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
            {open && (
                <BrandModal handleSubmit={selectedBrand ? handleUpdateSubmit : handleCreateSubmit} inputDetails={inputDetails} isEdit={!!selectedBrand} />
            )}
        </div>
    );
};

export default DashboardBrand;
