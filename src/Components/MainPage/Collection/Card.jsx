import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProductDetails } from '../../../redux/ProductDetailsSlice'

const Card = ({ item }) => {
  const { id, name, price, discount, images } = item

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [size, setSize] = useState(false)

  const handleClick = () => {
    dispatch(setProductDetails(item))
    navigate('details')
  }

  return (
    <div className='w-full relative'>
      <div className='relative'>
        <img onClick={() => handleClick()} className='cursor-pointer mb-[10px] w-full' src={images[0]} alt="Image" />
        <button onClick={() => setSize(!size)} className='absolute bottom-3 right-3 text-xs px-2 bg-[#F9F9F9] border border-[#b6b6b6b3] rounded-[.375rem] h-[1.875rem]'>Add {size ? '-' : '+'}</button>
      </div>
      <div>
        <h4 className='font-semibold text-sm leading-[1.5] mb-[5px]'>{name}</h4>
        <div className='flex items-center'>
          <p className={`${discount && 'line-through'} text-gray-400 font-normal text-sm mb-[10px]`}>$ {price}</p>
          <p className={discount ? 'block' : 'hidden'}>{discount && Math.floor(price - (price / 100 * discount))}</p>
        </div>
        <p className='text-[#ee3a43] text-sm font-normal'>25% Off With Code APASNI</p>
      </div>
      <div style={{ boxShadow: '0 0 rgba(0, 0, 0, 0), 0 0 rgba(0, 0, 0, 0), 0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} className={`${size ? 'block' : 'hidden'} absolute rounded-[.375rem] z-50 p-5 bg-[#F9F9F9] bottom-[-7px] left-1/2 -translate-x-1/2 w-[90%]`}>
        <h3>Select a size:</h3>
        <ul className='flex flex-wrap pt-2'>
          <li className='pr-4 cursor-pointer hover:underline'>XS</li>
          <li className='pr-4 cursor-pointer hover:underline'>S</li>
          <li className='pr-4 cursor-pointer hover:underline'>M</li>
          <li className='pr-4 cursor-pointer hover:underline'>L</li>
          <li className='pr-4 cursor-pointer hover:underline'>XL</li>
        </ul>
      </div>
    </div>
  )
}

export default Card
