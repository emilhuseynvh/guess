import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/MainPage/Header'
import { Helmet } from 'react-helmet-async'

const Checkout = () => {
    return (
        <>
            <Helmet>
                <title> Guess | Checkout</title>
            </Helmet>
            <Header checkout={true} />
            <Outlet />
        </>
    )
}

export default Checkout