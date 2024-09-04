import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {

  const [size, setSize] = useState(false)

  const navigate = useNavigate()

  return (
    <div className='w-full relative'>
      <div className='relative'>
        <img onClick={() => navigate('details')} className='cursor-pointer mb-[10px] w-full' src="https://cdn.shopify.com/s/files/1/0274/5620/8968/files/M4GQ14KC6V1_DREAMY-MOON_V4_375x.jpg?v=1721191714" alt="Image" />
        <button onClick={() => setSize(!size)} className='absolute bottom-3 right-3 text-xs px-2 bg-[#F9F9F9] border border-[#b6b6b6b3] rounded-[.375rem] h-[1.875rem]'>Add {size ? '-' : '+'}</button>
      </div>
      <div>
        <h4 className='font-semibold text-sm leading-[1.5] mb-[5px]'>Eco Beige Treated Flower Jumper</h4>
        <p className='font-normal text-sm text-[#222] mb-[10px]'>$ 129.95</p>
        <p className='text-[#ee3a43] text-sm font-normal'>25% Off With Code GIFT25</p>
      </div>
      <div style={{boxShadow: '0 0 rgba(0, 0, 0, 0), 0 0 rgba(0, 0, 0, 0), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} className={`${size ? 'block' : 'hidden'} absolute rounded-[.375rem] z-50 p-5 bg-[#F9F9F9] bottom-[-7px] left-1/2 -translate-x-1/2 w-[90%]`}>
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