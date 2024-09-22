import React from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { CgWebsite } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";

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
    },
    {
        icon: <CgWebsite className='w-6 h-6' />,
        title: 'Go To Website',
        link: '/'
    },
    {
        exit: true,
        icon: <IoExitOutline className='w-6 h-6' />,
        title: 'Exit',
        link: '/dashboard'
    }
];

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='w-60 bg-dashboardSecondary fixed h-screen'>
                <ul>
                    {list.map((item, i) => {
                        const { icon, title, link, exit } = item;
                        return (
                            <li
                                onClick={() => {
                                    if (exit) {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('role');
                                        location.reload()
                                    } else if (link) {
                                        navigate(link);
                                    }
                                }}
                                key={i} className='flex items-center text-white px-2 py-2'>
                                <div className='px-5 py-[0.65rem] flex items-center hover:bg-[#2D2D30] cursor-pointer w-full rounded-lg'>
                                    {icon}
                                    <p className='ml-3 text-base'>{title}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='w-[250px] h-screen'></div>
        </>
    );
}

export default Sidebar;
