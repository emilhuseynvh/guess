import React from 'react'

const SummaryItem = ({ item }) => {

    const { img, title, price, total } = item

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <div className='w-16 h-16 my-4 bg-lightGray border border-[#d6d4d4] relative'>
                    <img className='object-contain w-full h-full' src={img} alt={title} />
                    <div className='p-[.7rem] bg-[#666] absolute -top-3 -right-2 clip w-[22px] h-[22px] rounded-[50%] flex justify-center items-center'>
                        <span className='text-white font-semibold text-xs'>1</span>
                    </div>
                </div>
                <div className='ml-4'>
                    <p className='text-sm font-semibold'>Guess Originals Blue Vintage T-Shirt</p>
                    <p className='text-sm text-grayCustom'>XS</p>
                </div>
            </div>
            <p className='text-base font-medium'>{price}</p>
        </div>
    )
}

export default SummaryItem