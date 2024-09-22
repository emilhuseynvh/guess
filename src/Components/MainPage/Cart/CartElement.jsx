import React from 'react'
import { IoClose } from 'react-icons/io5'
import { useCartChangeMutation, useDeleteFromCartMutation } from '../../../redux/api'

const CartElement = ({ item }) => {

    const { id, images, name, price, total } = item.product_id
    const [itemId, { data, error }] = useDeleteFromCartMutation()
    const [changeParams, { data: changedData, error: ChangedError, isLoading }] = useCartChangeMutation()


    const handleDelete = () => {
        itemId(id)
    }

    const handleChange = (arg) => {
        changeParams({ productId: id, count: arg })
        item.count === 1 && itemId(id)
    }

    return (
        <div className='mb-4 pb-4 border-b border-[#eee] flex'>
            <div className='w-1/3 md:w-[14%]'>
                <img src={images[0]} alt="Image" />
            </div>
            <div className='flex justify-between w-full'>
                <div className='pl-8 w-1/2 lg:w-1/3'>
                    <p className='text-base font-medium mb-[5px]'>{name}</p>
                    <p className='text-base font-semibold mb-[5px]'>$69.95</p>
                    <p className=''>Size: Xs</p>
                </div>
                <div>
                    <div className='flex items-center border border-[#e6e6e6] w-[90px]'>
                        <button disable={item.count === 1} onClick={() => handleChange(item.count - 1)} className={`${isLoading && 'cursor-not-allowed'} ${item.count === 1 && 'cursor-not-allowed'} bg-[#fafafa] w-6 h-[34px]`}>-</button>
                        <div className='w-[42px] h-[34px] flex justify-center items-center border-r border-l border-[#e6e6e6]'>{item.count}</div>
                        <button disable={isLoading} onClick={() => handleChange(item.count + 1)} className={`${isLoading && 'cursor-not-allowed'} bg-[#fafafa] w-6 h-[34px]`}>+</button>
                    </div>
                </div>
                <h3 className='text-sm font-bold'>Item total: {price}</h3>
                <IoClose onClick={() => handleDelete()} className='text-lg cursor-pointer' />
            </div>

        </div>
    )
}

export default CartElement