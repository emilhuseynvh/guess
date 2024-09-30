import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSideBar = () => {
    const [activeItem, setActiveItem] = useState('Contact Info');
    const navigate = useNavigate();

    const handleItemClick = (item, path) => {
        setActiveItem(item);
        navigate(path);
    };
    const handleLogOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('user')
        navigate('/')
        location.reload()
    }

    return (
        <div className='w-full'>
            <ul className='lg:block flex'>
                <li onClick={() => handleItemClick('Contact Info', '/account')} className={`lg:text-black text-[#bfbfbf] py-4 lg:py-5 lg:font-medium font-semibold lg:pl-[60px] text-sm ml-2 mr-4 lg:mx-0 whitespace-nowrap cursor-pointer ${activeItem === 'Contact Info' ? 'text-[black] border-b-[2px] lg:border-b-0 lg:bg-[#e3e3e3] lg:border-l-[3px] border-black' : ''}`}>Contact Info</li>
                <li onClick={() => handleItemClick('Orders', '/account/orders')} className={`lg:text-black text-[#bfbfbf] py-4 lg:py-5 lg:font-medium font-semibold lg:pl-[60px] text-sm ml-2 mr-4 lg:mx-0 whitespace-nowrap cursor-pointer ${activeItem === 'Orders' ? 'text-[black] border-b-[2px] lg:border-b-0 lg:bg-[#e3e3e3] lg:border-l-[3px] border-black' : ''}`}>Orders</li>
                <li onClick={() => handleLogOut()} className={`lg:text-black text-[#bfbfbf] py-4 lg:py-5 lg:font-medium font-semibold lg:pl-[60px] text-sm ml-2 mr-4 lg:mx-0 whitespace-nowrap cursor-pointer`}>Log out</li>
            </ul>
        </div>
    );
};

export default AccountSideBar;
