import React from 'react'
import Img from '../Components/Details/Img'
import Info from '../Components/Details/Info'


const Details = () => {
    return (
        <div className='w-[95%] mx-auto my-6 md:flex'>
            <div className='w-full md:w-1/2 lg:w-3/4 lg:grid grid-cols-2 gap-2'>
                <Img />
            </div>
            <div className='lg:w-[400px] md:pl-8'>
                <Info />
            </div>
        </div>
    )
}

export default Details