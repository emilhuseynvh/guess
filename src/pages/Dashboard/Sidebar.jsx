import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const list = [
    {
        icon: <AiOutlineProduct className='w-6 h-6' />,
        title: 'Products',
        link: '/dashboard'
    },
    {
        icon: <MdOutlineCategory className='w-6 h-6' />,
        title: 'Category',
        link: 'category'
    },
    {
        icon: <TbBrandAirtable className='w-6 h-6' />,
        title: 'Brand',
        link: 'brand'
    }
]

const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='w-60 bg-dashboardSecondary fixed h-screen'>
                <ul>
                    {list.map((item, i) => {
                        const { icon, title, link } = item
                        return (
                            <li onClick={() => navigate(`${link && link}`)} key={i} className='flex items-center text-white px-2 py-2'>
                                <div className='px-5 py-[0.65rem] flex items-center hover:bg-[#2D2D30] cursor-pointer w-full rounded-lg'>
                                    {icon}
                                    <p className='ml-3 text-base'>{title}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='w-[278px] h-scren'></div>
        </>
    )
}

export default Sidebar