import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <div className='w-full flex flex-col my-16 px-[5%]'>
            <em className='text-[2rem] md:text-[3rem] text-center font-normal tracking-wider'>Make It Look Effortless</em>
            <div className='flex flex-wrap gap-3 justify-center'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Products