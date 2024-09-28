import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";
import SubcategoryMenu from './SubcategoryMenu';

const HamburgerMenu = ({ allCategories, setShowHamburger, showHamburger }) => {
    const [showSubcategory, setShowSubcategory] = useState(false)
    const [category, setCategory] = useState(null)

    const handleClick = (item) => {
        setShowSubcategory(!showSubcategory)
        setCategory(item)

    }

    return (
        <div className={`${showHamburger ? 'block' : 'hidden'} ml-4 fixed w-full h-screen bg-white -left-4 z-50`}>
            <p className={` text-[1.1rem] font-medium pr-4 mr-4 py-3 select-none border-b-2 pl-8 border-[#e5e7eb]`}>Hi, <Link onClick={() => setShowHamburger(!showHamburger)} to={!localStorage.getItem('username') ? '/login' : '/account'} className='font-medium underline cursor-pointer'>{localStorage.getItem('username') ? localStorage.getItem('username') : 'Sign-in or register'}</Link></p>
            {allCategories?.map((item, i) => {
                return (
                    <div onClick={() => item.Subcategory.length > 0 && handleClick(item)} key={i} className='flex border-b-2 pr-6 group border-[#e5e7eb] items-center justify-between cursor-pointer'>
                        <p className={`group-hover:underline text-[1.1rem] py-3 font-medium pr-4 mr-4 select-none  pl-8`}>{item.name}</p>
                        <FiChevronRight className={`${item.Subcategory.length > 0 ? 'block' : 'hidden'} w-6 h-6`} />
                    </div>
                )
            })}
            <SubcategoryMenu setShowHamburger={setShowHamburger} showSubcategory={showSubcategory} setShowSubcategory={setShowSubcategory} category={category} />
        </div>
    )
}

export default HamburgerMenu