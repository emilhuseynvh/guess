import React, { useEffect, useState } from 'react';
import AccardionItem from './AccardionItem';
import { eSize, eColor } from './../../../enum/enumData';
import { useGetAllBrandsQuery } from '../../../redux/api';
import { useNavigate } from 'react-router-dom';

const FilterMenu = () => {
    const navigate = useNavigate();
    const { data: allBrand, isLoading, isError } = useGetAllBrandsQuery();

    const filter = [

        {
            title: 'Size',
            element: eSize
        },
        {
            title: 'Color',
            element: eColor
        },
        {
            title: 'Discount',
            element: ['Discount']
        },
        {
            title: 'Price',
        }
    ];

    if (isLoading) return <p>Loading brands...</p>;

    const handleClearFilters = () => {
        navigate({
            pathname: '/products/all',
            search: '',
        });
    };



    return (
        <div className='pr-4'>
            <div className='flex justify-end'>
                <p onClick={() => handleClearFilters()} className='text-xs cursor-pointer hover:underline'>Clear All</p>
            </div>
            {filter.map((item, i) => (
                <div key={i}>
                    <AccardionItem
                        i={i}
                        item={item}
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterMenu;