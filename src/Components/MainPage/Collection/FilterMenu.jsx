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
            title: 'Brand',
            element: allBrand && allBrand.length > 0 ? allBrand.map(brand => brand.name) : []
        },
        {
            title: 'Color',
            element: eColor
        },
        {
            title: 'Size',
            element: eSize
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



    return (
        <div className='pr-4'>
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