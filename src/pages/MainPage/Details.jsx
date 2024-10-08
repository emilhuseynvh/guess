import React, { useEffect, useState } from 'react';
import Img from '../../Components/MainPage/Details/Img';
import Info from '../../Components/MainPage/Details/Info';
import { useGetProductByIdMutation, useSearchProductsQuery } from '../../redux/api';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/MainPage/Loader';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const { id } = useParams();
    const [getProductById, { data: productDetails, isLoading }] = useGetProductByIdMutation();

    useEffect(() => {
        id && getProductById(id);
    }, [id, getProductById]);

    return (
            <div className='w-[95%] mx-auto my-6 md:flex'>
                <Helmet>
                    <title>{'Guess | ' + productDetails?.name}</title>
                </Helmet>
                {isLoading ? (
                    <Loader />
                ) : productDetails ? (
                    <>
                        <div className='w-full md:w-1/2 lg:w-3/4 lg:grid grid-cols-2 gap-2'>
                            <Img product={productDetails} />
                        </div>
                        <div className='lg:w-[400px] md:pl-8'>
                            <Info product={productDetails} />
                        </div>
                    </>
                ) : (
                    <p>No product found</p>
                )}
            </div>
    );
};

export default Details;

