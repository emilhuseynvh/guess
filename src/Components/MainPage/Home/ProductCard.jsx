import React from 'react'

const ProductCard = ({ item }) => {

    const {img, name} = item

    return (
        <div className='my-8 w-[46.5%] md:w-[30%] hover:opacity-70'>
            <img src={img} alt="Product Image" />
            <p className='text-center text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] mt-1 underline cursor-pointer'>{name}</p>
        </div>
    )
}

export default ProductCard