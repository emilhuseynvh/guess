import React from 'react'

const ProductCard = () => {
    return (
        <div className='my-8 w-[46.5%] md:w-[30%] hover:opacity-70'>
            <img src="https://i.shgcdn.com/4d0d05db-5c9a-422a-94f3-7e3e2618ab0e/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Product Image" />
            <p className='text-center text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] mt-1 underline cursor-pointer'>Men's Tees</p>
        </div>
    )
}

export default ProductCard