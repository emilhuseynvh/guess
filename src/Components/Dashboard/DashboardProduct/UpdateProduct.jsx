import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import ProductForm from './ProductForm';
import { setProductUpdate } from '../../../redux/productUpdateSlice';
import { useGetProductByIdMutation, useUpdateProductMutation } from '../../../redux/api';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
    const dispatch = useDispatch();
    const { productUpdate } = useSelector((state) => state.productUpdate);

    const [getProductById, { data: productData, error: productError, isLoading: isProductLoading }] = useGetProductByIdMutation();
    const [updateProduct, { data: updateData, error: updateError, isSuccess: isUpdateSuccess }] = useUpdateProductMutation();
    console.log(productData);
    

    useEffect(() => {
        if (productUpdate) {
            getProductById(productUpdate);
        }
    }, [productUpdate, getProductById]);

    const handleSubmit = async (productDetails) => {
        console.log(productDetails);
        
        const updatedDetails = {
            ...productDetails,
            id: productUpdate,
        };
        try {
            await updateProduct(updatedDetails).unwrap();
            toast.success('Product updated successfully');
            dispatch(setProductUpdate(null));
        } catch (error) {
            toast.error('Error updating product');
        }
    };

    return (
        <div className={productUpdate ? 'block' : 'hidden'}>
            <div className="absolute inset-0 opacity-40 bg-black z-40 w-screen h-screen"></div>
            <div style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className="bg-dashboardSecondary w-[50%] h-[500px] px-8 pb-8 z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" >
                <div className="w-full flex justify-end mb-7 mt-6">
                    <IoMdClose onClick={() => dispatch(setProductUpdate(null))} className="absolute text-xl cursor-pointer" />
                </div>
                {isProductLoading ? (
                    <p>Loading product details...</p>
                ) : (
                    <ProductForm initialValues={productData && productData} onSubmit={handleSubmit} />
                )}
            </div>
        </div>
    );
};


export default UpdateProduct;
