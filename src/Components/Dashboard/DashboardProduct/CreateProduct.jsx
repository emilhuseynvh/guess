import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateProduct } from '../../../redux/createProductSlice';
import { useCreateProductMutation } from '../../../redux/api';
import toast from 'react-hot-toast';
import CreateProductForm from './CreateProductForm';

const CreateProduct = () => {
    const dispatch = useDispatch();
    const [createProduct] = useCreateProductMutation();
    const { createProduct: isCreateProductOpen } = useSelector((state) => state.createProduct);

    const handleSubmit = async (productDetails) => {
        try {
            await createProduct(productDetails).unwrap();
            toast.success('Product created successfully');
            dispatch(setCreateProduct());
        } catch (error) {
            toast.error('Error creating product');
        }
    };

    return (
        <div className={isCreateProductOpen ? 'block' : 'hidden'}>
            <div className='absolute inset-0 opacity-40 bg-black z-40 w-screen h-screen'></div>
            <div style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='bg-dashboardSecondary w-[50%] h-[500px] px-8 pb-8 z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                <div className='w-full flex justify-end mb-7 mt-6'>
                    <IoMdClose onClick={() => dispatch(setCreateProduct())} className='absolute text-xl cursor-pointer' />
                </div>
                <CreateProductForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default CreateProduct;

