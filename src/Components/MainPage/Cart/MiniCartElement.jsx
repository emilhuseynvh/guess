import React from 'react'

const MiniCartElement = ({ item }) => {

    const { img, title, price, total } = item
    return (
        <div className='py-[17px]'>
            <div className='flex'>
                <img className='w-1/5 rounded-[5%]' src={img} alt="Image" />
                <div className='ml-[15px]'>
                    <h3 className='text-base font-semibold'>{price}</h3>
                    <p>{title}</p>
                    <span>QTY:</span>
                    <select className='outline-none'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className='mt-8 flex justify-between'>
                <p className='underline text-xs'>Remove</p>
                <h3 className='text-sm font-bold'>Item total: {total}</h3>
            </div>
        </div>
    )
}

export default MiniCartElement