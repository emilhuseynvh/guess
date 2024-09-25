import React from 'react'
import { useCartChangeMutation, useDeleteFromCartMutation } from '../../../redux/api'

const MiniCartElement = ({ item, cart }) => {


    const { id, images, name, price, total } = item.product_id
    const [itemId, { data, error }] = useDeleteFromCartMutation()
    const [changeParams, { data: changedData, error: ChangedError, isLoading }] = useCartChangeMutation()


    const handleDelete = () => {
        itemId(item.id)
    }

    const handleChange = (arg) => {
        changeParams({ productId: id, count: arg })
        item.count === 1 && arg === -1 && itemId(id)
    }

    return (
        <div className='py-[17px]'>
            <div className='flex'>
                <img className='w-1/4 rounded-[5%]' src={images[0]} alt="Image" />
                <div className='ml-[15px]'>
                    <h3 className='text-base font-semibold'>{price}</h3>
                    <p>{name.length > 20 ? `${name.substring(0, 20)}...` : name}</p>
                    <div className='flex gap-1 items-center'>
                        <p>Color:</p>
                        <div style={{ background: `${item.Color}` }} className='w-4 h-4 rounded-[50%]'></div>
                    </div>
                    <span>QTY:</span>
                    <div className='flex items-center border border-[#e6e6e6] w-[90px]'>
                        <button onClick={() => handleChange(item.count - 1)} className={`${isLoading && 'cursor-not-allowed'} ${item.count === 1 && 'cursor-not-allowed'} bg-[#fafafa] w-6 h-[34px]`}>-</button>
                        <div className='w-[42px] h-[34px] flex justify-center items-center border-r border-l border-[#e6e6e6]'>{item.count}</div>
                        <button onClick={() => handleChange(item.count + 1)} className={`${isLoading && 'cursor-not-allowed'} bg-[#fafafa] w-6 h-[34px]`}>+</button>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex justify-between'>
                <p onClick={() => handleDelete()} className='underline text-xs cursor-pointer'>Remove</p>
                <h3 className='text-sm font-bold'>Item total: {price}</h3>
            </div>
        </div>
    )
}

export default MiniCartElement