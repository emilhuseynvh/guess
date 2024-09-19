import React, { useEffect } from 'react'
import Img from '../../Components/MainPage/Details/Img'
import Info from '../../Components/MainPage/Details/Info'
import { useSelector } from 'react-redux'
import { useGetProductByIdMutation } from '../../redux/api'

const Details = () => {
    const { productDetails } = useSelector((state) => state.productDetails)
    console.log(productDetails);

    return (
        <div className='w-[95%] mx-auto my-6 md:flex'>
            {productDetails ? (
                <>
                    <div className='w-full md:w-1/2 lg:w-3/4 lg:grid grid-cols-2 gap-2'>
                        <Img product={productDetails} />
                    </div>
                    <div className='lg:w-[400px] md:pl-8'>
                        <Info product={productDetails} />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Details
