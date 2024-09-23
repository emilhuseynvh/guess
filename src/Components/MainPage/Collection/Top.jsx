import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAllProductQuery } from '../../../redux/api'
import Pagination from './Pagination'

const Top = ({ grid, setGrid }) => {
    const navigate = useNavigate()

    const { data: allProducts } = useGetAllProductQuery()

    const sorted = [
        {
            name: 'Recommended'
        },
        {
            name: 'Latest',
            sort: 'time',
            order: 'desc'
        },
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

    const [featured, setFeatured] = useState(false)

    const onHandleChange = (arg) => {
        setGrid(arg)
    }

    
    const handleSort = (order, sort) => {
        const queryParams = new URLSearchParams(window.location.search);

        if (sort && order) {
            queryParams.set('sortBy', sort);
            queryParams.set('sortOrder', order);
        }

        navigate({
            pathname: '/products/all',
            search: `?${queryParams.toString()}`,
        });
    };

    return (
        <div className='lg:flex justify-end mb-4 hidden'>
            <div className='pt-16 pb-6 w-4/5 justify-between'>
                <h4 className='text-lg font-medium mb-[5px] '>Men's Clothing</h4>
                <div className='flex justify-between items-center'>
                    <p className='text-xs font-light'>({allProducts?.meta.totalProducts} styles)</p>
                    <Pagination allProducts={allProducts && allProducts} />
                    <div className='flex items-end'>
                        <svg onClick={() => onHandleChange(2)} className={`${grid === 2 ? 'opacity-60' : 'opacity-100'} mx-1 cursor-pointer`} width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>3E846D32-2B32-44D1-A889-C72370C1DBBC</title><desc>Created with sketchtool.</desc><g id="Category-page" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Desktop-HD-Collection-page" transform="translate(-1186.000000, -167.000000)" fill="#000000"><g id="grid-4" transform="translate(1186.000000, 167.000000)"><rect id="Rectangle" x="0" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-13" x="0" y="10" width="8" height="8"></rect><rect id="Rectangle-Copy" x="10" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-14" x="10" y="10" width="8" height="8"></rect></g></g></g></svg>
                        <svg onClick={() => onHandleChange(4)} className={`${grid === 4 ? 'opacity-60' : 'opacity-100'} mx-1 cursor-pointer`} width="38px" height="18px" viewBox="0 0 38 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>DB6B1EC8-5F1D-49D7-8ECB-565A70EEC1CA</title><desc>Created with sketchtool.</desc><g id="Category-page" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Desktop-HD-Collection-page" transform="translate(-1214.000000, -167.000000)" fill="#000000"><g id="grid-8" transform="translate(1214.000000, 167.000000)"><g id="Group-9-Copy"><rect id="Rectangle" x="0" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-13" x="0" y="10" width="8" height="8"></rect><rect id="Rectangle-Copy" x="10" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-14" x="10" y="10" width="8" height="8"></rect></g><g id="Group-9-Copy-2" transform="translate(20.000000, 0.000000)"><rect id="Rectangle" x="0" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-13" x="0" y="10" width="8" height="8"></rect><rect id="Rectangle-Copy" x="10" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-14" x="10" y="10" width="8" height="8"></rect></g></g></g></g></svg>
                        <svg onClick={() => onHandleChange(6)} className={`${grid === 6 ? 'opacity-60' : 'opacity-100'} mx-1 cursor-pointer`} width="58px" height="18px" viewBox="0 0 58 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>A4E86512-9C9D-482E-85D6-C5E2CC798EC6</title><desc>Created with sketchtool.</desc><g id="Category-page" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Desktop-HD-Collection-page" transform="translate(-1262.000000, -167.000000)" fill="#000000"><g id="grid-12" transform="translate(1262.000000, 167.000000)"><g id="Group-9-Copy-3"><rect id="Rectangle" x="0" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-13" x="0" y="10" width="8" height="8"></rect><rect id="Rectangle-Copy" x="10" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-14" x="10" y="10" width="8" height="8"></rect></g><g id="Group-9-Copy-5" transform="translate(40.000000, 0.000000)"><rect id="Rectangle" x="0" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-13" x="0" y="10" width="8" height="8"></rect><rect id="Rectangle-Copy" x="10" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-14" x="10" y="10" width="8" height="8"></rect></g><g id="Group-9-Copy-4" transform="translate(20.000000, 0.000000)"><rect id="Rectangle" x="0" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-13" x="0" y="10" width="8" height="8"></rect><rect id="Rectangle-Copy" x="10" y="0" width="8" height="8"></rect><rect id="Rectangle-Copy-14" x="10" y="10" width="8" height="8"></rect></g></g></g></g></svg>

                        <div className='relative'>
                            <div onClick={() => setFeatured(!featured)} className='flex items-center cursor-pointer'>
                                <p className='underline ml-5 text-sm pr-3 font-medium select-none'>Featured</p>
                                <svg aria-hidden="true" focusable="false" role="presentation" className={`icon icon-chevron icon--small icon--stroke-based h-[10px] w-[10px] ${featured ? '-rotate-90' : 'rotate-90'} duration-200`} width={16} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.40039 0.571442L8.42896 7.60001C8.48363 7.65132 8.52719 7.71328 8.55698 7.78208C8.58676 7.85087 8.60213 7.92505 8.60213 8.00001C8.60213 8.07498 8.58676 8.14915 8.55698 8.21795C8.52719 8.28675 8.48363 8.34871 8.42896 8.40001L1.40039 15.4286" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                <ul className={`${featured ? 'block' : 'hidden'} absolute top-9 right-0 bg-white border border-[#eee] p-4 w-64 text-sm z-50 font-medium`}>
                                    {sorted.map((item, i) => <li onClick={() => handleSort(item.order, item.sort)} key={i} className='p-2 hover:underline'>{item.name}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top