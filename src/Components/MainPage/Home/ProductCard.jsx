import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const {img, name} = item
    const navigate = useNavigate()

    return (
        <div onClick={() =>  navigate({ pathname: '/products/all', search: `?subcategoryId=${item.subcategoryId}`})}  className='my-8 w-[46.5%] md:w-[30%] hover:opacity-70 cursor-pointer'>
            <img src={img} alt="Product Image" />
            <p className='text-center text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] mt-1 underline cursor-pointer'>{name}</p>
        </div>
    )
}

export default ProductCard