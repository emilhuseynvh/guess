import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SubcategoryMenu = ({ setShowSubcategory, showSubcategory, category, setShowHamburger }) => {
    const navigate = useNavigate()

    const handleSubcategoryFilter = (id) => {
        navigate({ pathname: '/products/all', search: `?subcategoryId=${id}`, })
        setShowHamburger(false)
    };

    const handleCategoryFilter = (id) => {
        navigate({ pathname: '/products/all', search: `?categoryId=${id}`, })
        setShowHamburger(false)
    };

    return (
        <div className={`${showSubcategory ? 'translate-x-0' : 'translate-x-full'} duration-300 ml-4 z-[99] top-12  w-full h-screen bg-white -left-4 fixed`}>
            <IoMdArrowBack onClick={() => setShowSubcategory(!showSubcategory)} className='w-6 h-6 ml-7 mt-4 mb-6 cursor-pointer' />
            <p onClick={() => handleCategoryFilter(category.id)} className={` text-[1.1rem] font-medium pr-4 mr-4 py-3 select-none border-b-2 pl-8 border-[#e5e7eb] hover:underline cursor-pointer`}>View all</p>
            {category?.Subcategory.map((item, i) => {
                return (
                    <div key={i} className='flex border-b-2 pr-6 group border-[#e5e7eb] items-center justify-between cursor-pointer'>
                        <p onClick={() => handleSubcategoryFilter(item.id)} className={`group-hover:underline text-[1.1rem] py-3 font-medium pr-4 mr-4 select-none  pl-8`}>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SubcategoryMenu