import React from 'react'
import ProductCard from './ProductCard'

const product = [
    {
        img: 'https://i.shgcdn.com/624ad11d-5c51-46eb-92e1-414577f03372/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        name: 'Women\'s Shirts',
        subcategoryId: 1
    },
    {
        img: 'https://i.shgcdn.com/4d0d05db-5c9a-422a-94f3-7e3e2618ab0e/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        name: 'Men\'s Tees',
        subcategoryId: 25
    },
    {
        img: 'https://i.shgcdn.com/2814c36f-329a-46ed-b681-ab85286d99a9/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        name: 'Women\'s Knits',
        subcategoryId: 18
    },
    {
        img: 'https://i.shgcdn.com/2502253e-bb31-49b6-88e0-01f006ba41c6/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        name: 'Women\'s Pant',
        subcategoryId: 2
    },
    {
        img: 'https://i.shgcdn.com/f0175259-c709-4ae2-845b-b524e970f014/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        name: 'Women\'s Bodysuit',
        subcategoryId: 17 
    },
    {
        img: 'https://i.shgcdn.com/f1a151ab-d8f4-45fe-99e6-7223c7bce3bc/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        name: 'Men\'s Knits',
        subcategoryId: 18 
    },
]

const Products = () => {
    return (
        <div className='w-full flex flex-col my-16 px-[5%]'>
            <em className='text-[2rem] md:text-[3rem] text-center font-normal tracking-wider select-none'>Make It Look Effortless</em>
            <div className='flex flex-wrap gap-3 justify-center'>
                {product.map((item, i) => <ProductCard key={i} item={item} />)}
            </div>
        </div>
    )
}

export default Products