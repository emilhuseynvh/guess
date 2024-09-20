import React, { useEffect, useState } from 'react'
import Profile from '../../Components/MainPage/Account/Profile';
import Order from '../../Components/MainPage/Account/Order';
import ChangePassword from '../../Components/MainPage/Account/ChangePassword';
import AccountInfo from '../../Components/MainPage/Account/AccountInfo';
import { useNavigate } from 'react-router-dom';


const Account = () => {
  const [row, setRow] = useState(null)
  const user = JSON.parse(localStorage.getItem('user'));

  const [image, setImage] = useState(null)

  return user ? (
    <div className='lg:w-[80%] mx-auto :w-[100%]'>
      <div className='md:flex justify-center my-4 relative'>
        <img src='assets/img/account-header.webp' alt="Account Header" />
        <h1 className='absolute text-white text-xl sm:text-5xl font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>Hello, {user?.name}</h1>
      </div>
      <div className='md:flex'>
        <Profile image={image} setImage={setImage} row={row} setRow={setRow} user={user} />
        <div className={`${row === null ? 'block' : 'hidden'} w-full`}>
          <AccountInfo image={image} setImage={setImage} />
        </div>
        <div className={`${row === 1 ? 'block' : 'hidden'} ml-8 w-full`}>
          <Order />
        </div>
        <div className={`${row === 2 ? 'block' : 'hidden'} ml-8 w-full`}>
          <ChangePassword />
        </div>
      </div>
    </div>
  ) : (
    <h1 className=' text-2xl text-center my-8 md:text-4xl'>Page not found</h1>
  )
}

export default Account