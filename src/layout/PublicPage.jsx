import React from 'react'
import Header from '../Components/MainPage/Header'
import Footer from '../Components/MainPage/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const PublicPage = () => {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicPage