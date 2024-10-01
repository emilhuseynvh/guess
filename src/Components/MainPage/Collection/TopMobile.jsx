import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import CollectionCheckbox from './CollectionCheckbox';
import AccardionItem from './AccardionItem';
import { eColor, eSize } from '../../../enum/enumData';
import { useNavigate } from 'react-router-dom';

const sorted = [
    {
        name: 'Price: low to high',
        sort: 'price',
        order: 'asc'
    },
    {
        name: 'Price: high to low',
        sort: 'price',
        order: 'desc'
    }
]
const filterMobile = [
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

const TopMobile = () => {
    const navigate = useNavigate()

    const [sort, setSort] = useState(false)
    const [filter, setFilter] = useState(false)
    const [accardion, setAccardion] = useState(null)

    const handleSort = (order, sort) => {
        const queryParams = new URLSearchParams(window.location.search)

        if (sort && order) {
            queryParams.set('sortBy', sort)
            queryParams.set('sortOrder', order)
        }
        navigate({
            pathname: '/products/all',
            search: `?${queryParams.toString()}`,
        });
        setSort(!sort)
    }

    return (
        <>
            <div className='w-full lg:hidden flex my-4'>
                <div onClick={() => setSort(!sort)} className='w-1/2 flex items-center border border-y-[#d9d9d9] py-2 px-4 cursor-pointer'>
                    <p className='mr-2 text-base'>Sort by  </p>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron icon--small icon--stroke-based h-[10px] w-[10px] rotate-90 cursor-pointer" width={16} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.40039 0.571442L8.42896 7.60001C8.48363 7.65132 8.52719 7.71328 8.55698 7.78208C8.58676 7.85087 8.60213 7.92505 8.60213 8.00001C8.60213 8.07498 8.58676 8.14915 8.55698 8.21795C8.52719 8.28675 8.48363 8.34871 8.42896 8.40001L1.40039 15.4286" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div onClick={() => setFilter(!filter)} className='w-1/2 flex items-center border border-y-[#d9d9d9] py-2 px-4 cursor-pointer'>
                    <p className='mr-2 text-base'>Filter</p>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron icon--small icon--stroke-based h-[10px] w-[10px] rotate-90 cursor-pointer" width={16} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.40039 0.571442L8.42896 7.60001C8.48363 7.65132 8.52719 7.71328 8.55698 7.78208C8.58676 7.85087 8.60213 7.92505 8.60213 8.00001C8.60213 8.07498 8.58676 8.14915 8.55698 8.21795C8.52719 8.28675 8.48363 8.34871 8.42896 8.40001L1.40039 15.4286" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
            </div>
            {/* SORT */}
            <div className={`${sort ? 'top-0' : '-top-[200%]'} duration-300 fixed w-full h-screen  left-0 right-0 bg-white z-50 px-4 pt-4 pb-6`}>
                <div className='flex justify-between pb-6 pt-2 border-b border-black'>
                    <p className='text-lg font-semibold'>Sort By</p>
                    <svg onClick={() => setSort(!sort)} aria-hidden="true" focusable="false" role="presentation" className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 5L5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 5L19.5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <ul>
                    {sorted.map((item, i) => {
                        return <li key={i} onClick={() => handleSort(item.order, item.sort)} className='border-b-2 border-[#eee] text-base py-4 pl-14 hover:underline cursor-pointer'>{item.name}</li>
                    })}
                </ul>
            </div>
            {/* FILTER */}
            <div className={`${filter ? 'top-0' : '-top-[200%]'} duration-300 fixed w-full h-screen  left-0 right-0 bg-white z-50 px-4 pt-4 pb-6`}>
                <div className='flex justify-between items-center pb-6 pt-2 border-b border-black'>
                    <p className='text-lg font-semibold'>Filter</p>
                    <svg onClick={() => setFilter(!filter)} aria-hidden="true" focusable="false" role="presentation" className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 5L5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 5L19.5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                {filterMobile.map((item, i) => (
                    <div key={i}>
                        <AccardionItem
                            i={i}
                            item={item}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopMobile