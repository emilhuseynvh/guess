import React from 'react'

const Banner = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (

        <div className='md:flex justify-center my-4 relative'>
            <img src='assets/img/account-header.webp' alt="Account Header" />
            <h1 className='absolute text-white text-xl sm:text-3xl whitespace-nowrap  md:text-5xl font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>Hello, {user?.name}</h1>
        </div>
    )
}

export default Banner