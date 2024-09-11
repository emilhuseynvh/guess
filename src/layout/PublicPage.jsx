import React from 'react'
import Header from '../Components/MainPage/Header'
import Footer from '../Components/MainPage/Footer'
import { Outlet } from 'react-router-dom'

const PublicPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicPage