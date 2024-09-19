import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import DashboardTable from '../DashboardTable';
import DashboardInput from '../DashboardInput';
import BrandButton from '../DashboardButton';
import { setSubCategory } from '../../../redux/subCategorySlice';
import { setOpen } from '../../../redux/open';
import BrandModal from '../DashboardModal';
import { useCreateSubCategoryMutation, useDeleteSubCategoryMutation, useGetCategoryByIdMutation, useUpdateSubCategoryMutation } from '../../../redux/api';

const SubcategoryModal = ({ onClose }) => {
    const dispatch = useDispatch();
    const { subCategory } = useSelector((state) => state.subCategory);

    const { open } = useSelector((state) => state.open);

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const [categoryId, { data: CategoryById, isLoading }] = useGetCategoryByIdMutation();
    const [createSubcategory, { isSuccess: createSuccess, error: createErrorData, isError: createError }] = useCreateSubCategoryMutation();

    const [updateSubcategory, { isSuccess: updateSuccess, isError: updateError, error: updateErrorData }] = useUpdateSubCategoryMutation();
    const [deleteSubcategory, { isSuccess: deleteSuccess, error: deleteErrorData, isError: deleteError }] = useDeleteSubCategoryMutation();

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

    useEffect(() => {
        if (subCategory) {
            categoryId(subCategory);
        }
    }, [subCategory, categoryId]);

    useEffect(() => {
        if (createSuccess) {
            toast.success('Subcategory added successfully');
            setName('');
            setSlug('');
            setSelectedSubcategory(null);
            dispatch(setOpen())
        }
        else if (createError) {
            toast.error(createErrorData || 'Error')
        }
    }, [createSuccess, createError])

    useEffect(() => {
        deleteSuccess && toast.success('Subcategory deleted succesfully')
        deleteError && toast.error(deleteErrorData || 'Error')
    }, [deleteSuccess, deleteError])
    useEffect(() => {
        if (updateSuccess) {
            dispatch(setOpen())
            toast.success('Subcategory updated successfully')
        }
        else if (updateError) {
            toast.error(updateErrorData || 'Error')
        }
    }, [updateSuccess, updateError])

    const handleAddSubcategory = async () => {
        if (name && slug) {
            await createSubcategory({ name, slug, categoryId: subCategory });

        } else {
            toast.error('Please fill all fields');
        }
    };

    const handleEditSubcategory = (subcategory) => {
        dispatch(setOpen())
        setSelectedSubcategory(subcategory);
        setName(subcategory.name);
        setSlug(subcategory.slug);
    };

    const handleDeleteSubcategory = async (id) => {
        await deleteSubcategory(id);
    };

    const handleSubmit = async () => {
        if (selectedSubcategory) {
            await updateSubcategory({ id: selectedSubcategory.id, name, slug, categoryId: subCategory });
        } else {
            handleAddSubcategory();
        }
        setName('');
        setSlug('');
    };

    return (
        <div>
            <div className='absolute inset-0 opacity-40 bg-black z-40 w-screen h-screen'></div>
            <div className='bg-dashboardSecondary w-[40%] h-[500px] overflow-y-auto scroll px-8 pb-8 z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg'>
                <div className='relative w-full h-full'>
                    <div className='w-full flex justify-between mb-7 mt-6'>
                        <button onClick={() => dispatch(setOpen(true))} className='bg-dashboardBtn rounded-[10px] px-3 text-sm py-1'>Add</button>
                        <IoMdClose onClick={() => dispatch(setSubCategory(null))} className='text-xl cursor-pointer' />
                    </div>
                    <div className='mt-6'>
                        {isLoading ? (
                            <p>Loading subcategories...</p>
                        ) : CategoryById?.Subcategory.length > 0 ? (
                            CategoryById.Subcategory.map((subcategory, index) => (
                                <DashboardTable key={index} item={subcategory} onEdit={() => handleEditSubcategory(subcategory)} onDelete={() => handleDeleteSubcategory(subcategory.id)} />
                            ))
                        ) : (
                            <p>No subcategories available</p>
                        )}
                    </div>
                </div>
            </div>
            {open && <BrandModal inputDetails={inputDetails} handleSubmit={handleSubmit} />}
        </div>
    );
};

export default SubcategoryModal;

