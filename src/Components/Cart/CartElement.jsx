import React from 'react'
import { IoClose } from 'react-icons/io5'

const CartElement = ({ item }) => {

    const { img, title, price, total } = item

    return (
        <div className='mb-4 pb-4 border-b border-[#eee] flex'>
            <div className='w-1/3 md:w-[14%]'>
                <img src={img} alt="Image" />
            </div>
            <div className='flex justify-between w-full'>
                <div className='pl-8 w-1/2 lg:w-1/3'>
                    <p className='text-base font-medium mb-[5px]'>{title}</p>
                    <p className='text-base font-semibold mb-[5px]'>$69.95</p>
                    <p className=''>Size: Xs</p>
                </div>
                <div>
                    <span>QTY:</span>
                    <select className='outline-none'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <h3 className='text-sm font-bold'>Item total: {total}</h3>
                <IoClose className='text-lg cursor-pointer' />
            </div>

        </div>
    )
}

export default CartElement