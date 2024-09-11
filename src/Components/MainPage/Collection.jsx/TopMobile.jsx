import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import CollectionCheckbox from './CollectionCheckbox';

const sorted = ['Best sellers', 'Featured', 'Price: low to high', 'Price: high to low', 'New Arrivals']
const checkbox = [
    { size: 27, quant: 1 },
    { size: 28, quant: 19 },
    { size: 29, quant: 25 },
    { size: 30, quant: 24 },
    { size: 31, quant: 26 }
]

const TopMobile = () => {

    const [sort, setSort] = useState(false)
    const [filter, setFilter] = useState(false)
    const [accardion, setAccardion] = useState(null)

    return (
        <>
            <div className='w-full md:hidden flex my-4'>
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
            <div className={`${sort ? 'top-0' : '-top-full'} duration-300 fixed w-full h-screen  left-0 right-0 bg-white z-50 px-4 pt-4 pb-6`}>
                <div className='flex justify-between pb-6 pt-2 border-b border-black'>
                    <p className='text-lg font-semibold'>Sort By</p>
                    <svg onClick={() => setSort(!sort)} aria-hidden="true" focusable="false" role="presentation" className="icon icon-close icon--stroke-based" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 5L5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 5L19.5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <ul>
                    {sorted.map((item, i) => {
                        return <li key={i} className='border-b-2 border-[#eee] text-base py-4 pl-14 hover:underline cursor-pointer'>{item}</li>
                    })}
                </ul>
            </div>
            {/* FILTER */}
            <div className={`${filter ? 'top-0' : '-top-full'} duration-300 fixed w-full h-screen  left-0 right-0 bg-white z-50 px-4 pt-4 pb-6`}>
                <div className='flex justify-between items-center pb-6 pt-2 border-b border-black'>
                    <p className='text-lg font-semibold'>Filter</p>
                    <p className='text-sm font-medium'>(186 styles)</p>
                    <svg onClick={() => setFilter(!filter)} aria-hidden="true" focusable="false" role="presentation" className="icon icon-close icon--stroke-based" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 5L5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 5L19.5 19.5" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <ul>
                    <div className='border-b-2 border-[#eee] text-base py-4 px-2 cursor-pointer'>
                        <div onClick={() => setAccardion(accardion === 1 ? null : 1)} className='flex justify-between'>
                            <h4 className='text-base font-semibold'>Size</h4>
                            <img className='select-none' src={accardion === 1 ? 'assets/img/minus.svg' : 'assets/img/plus.svg'} alt="Icon" />
                        </div>
                        <div style={{ maxHeight: accardion === 1 ? '500px' : '0', transition: 'max-height 0.5s ease', }} className={`pt-5 h-56 ${accardion === 1 ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                            {checkbox.map((item, i) => {
                                return <CollectionCheckbox key={i} item={item} />
                            })}
                        </div>

                    </div>
                </ul>
            </div>
        </>
    )
}

export default TopMobile