import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/MainPage/Header'

const Checkout = () => {
    return (
        <>
            <Header checkout={true} />
            <Outlet />
        </>
    )
}

export default Checkout