import React, { useState } from 'react'
import Profile from '../../Components/MainPage/Account/Profile';
import Order from '../../Components/MainPage/Account/Order';
import AccountInfo from '../../Components/MainPage/Account/AccountInfo';
import Wishlist from './Wishlist';
import AccountSideBar from '../../Components/MainPage/Account/AccountSideBar';
import Header from '../../Components/MainPage/Header';
import Footer from '../../Components/MainPage/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../../Components/MainPage/Account/Banner';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';


const Account = () => {
  const [row, setRow] = useState(null)
  const user = JSON.parse(localStorage.getItem('user'));

  const [image, setImage] = useState(null)

  return user ? (
    <>
      <Helmet>
        <title>Guess | Account</title>
      </Helmet>
      <Header />
      <Banner />
      <Toaster position="top-center" reverseOrder={false} />
      <div className='lg:w-4/5 mx-auto lg:flex'>
        <div className='lg:w-[350px] lg:py-24 lg:border-r border-b'>
          <AccountSideBar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  ) : (
    <h1 className=' text-2xl text-center my-8 md:text-4xl'>Page not found</h1>
  )
}

export default Account