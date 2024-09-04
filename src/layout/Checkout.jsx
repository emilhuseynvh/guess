import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const Checkout = () => {
    return (
        <>
            <Header checkout={true} />
            <Outlet />
        </>
    )
}

export default Checkout