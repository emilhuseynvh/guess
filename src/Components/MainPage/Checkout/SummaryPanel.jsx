import React, { useState } from 'react'
import SummaryItem from './SummaryItem'
import Input from './Input'
import { IoMdClose } from "react-icons/io";
import Benefit from './Benefit';
import Shippping from './Shippping';
import SimpleInput from './SimpleInput';
import { useGetCartQuery } from '../../../redux/api';

const promocode = ['EMIL123', 'APASNI.ME']

const SummaryPanel = () => {

  const [inputValue, setInputValue] = useState('')
  const [appliedCode, setAppliedCode] = useState(() => {
    const savedCode = localStorage.getItem('appliedCode')
    return savedCode ? savedCode : ''
  })

  function handleSubmit() {
    if (promocode.includes(inputValue)) {
      setAppliedCode(inputValue)
      localStorage.setItem('appliedCode', inputValue)
    }
  }

  function handleRemoveCode() {
    setAppliedCode('')
    localStorage.removeItem('appliedCode')
  }

  return (
    <div className='p-8 lg:w-3/4 max-h-[290vh] sticky top-1'>
      <SummaryItem />
      <p className='mt-3'>Enter the promocode or gift card</p>
      <div className='mb-4 flex items-center'>
        <div className='w-full'>
          <div className="relative z-0 w-full my-6">
            <input id='promocode' type='text' className="block px-2 w-full text-sm text-gray-900 border border-[#dedede] py-4" placeholder='Enter the promocode' />
          </div>
        </div>
        <button onClick={handleSubmit} className={`${inputValue ? 'border-black bg-black text-white' : 'bg-[#d6d6d6] border-[#666]'} ml-4 flex border py-3.5 px-4`}> Apply</button>
      </div>
      <div className={`${appliedCode ? 'block' : 'hidden'} bg-[#ececec] flex items-center py-2 px-2 w-1/3 relative`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className={`stroke-[#999999] fill-transparent w-[19px] h-[19px]`}><path strokeLinecap="round" d="M7.284 1.402h4.964a.35.35 0 0 1 .35.35v4.964a.7.7 0 0 1-.205.495L7.49 12.115a.7.7 0 0 1-.99 0L1.885 7.5a.7.7 0 0 1 0-.99L6.79 1.607a.7.7 0 0 1 .495-.205Z"></path><circle cx="9.1" cy="4.9" r="0.7"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M9.102 4.897h-.005v.005h.005z"></path></svg>
        <p className='ml-2'>{appliedCode || 'No promo code applied'}</p>
        <IoMdClose onClick={handleRemoveCode} className='absolute top-1/2 -translate-y-1/2 right-2 text-lg cursor-pointer' />
      </div>
      <div className="max-w-lg mx-auto p-6  text-gray-800">
        {/* Subtotal and Order discount */}
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span>Subtotal</span>
            <span>$389.95</span>
          </div>
          <div className="flex justify-between mb-1 text-gray-500">
            <span>Order discount</span>
            <span>– $39.00</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className={`stroke-[#999999] fill-transparent w-[19px] h-[19px]`}><path strokeLinecap="round" d="M7.284 1.402h4.964a.35.35 0 0 1 .35.35v4.964a.7.7 0 0 1-.205.495L7.49 12.115a.7.7 0 0 1-.99 0L1.885 7.5a.7.7 0 0 1 0-.99L6.79 1.607a.7.7 0 0 1 .495-.205Z"></path><circle cx="9.1" cy="4.9" r="0.7"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M9.102 4.897h-.005v.005h.005z"></path></svg>
              <p className='uppercase ml-2'>{localStorage.getItem('item') && localStorage.getItem('item')}</p>
            </div>
          </div>
        </div>
        <Shippping />
        <Benefit />
      </div>
    </div>
  )
}

export default SummaryPanel
