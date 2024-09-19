import React from 'react'
import SummaryPanel from '../../Components/MainPage/Checkout/SummaryPanel'
import CheckoutFor from '../../Components/MainPage/Checkout/CheckoutFor'

const CheckoutPage = () => {
  return (
    <div className='flex  lg:justify-end'>
      <div className='w-[95%] lg:mx-0 mx-auto xl:w-[90%] lg:flex-row flex-col justify-center lg:h-screen flex'>
        <div className='lg:w-1/2'>
          <CheckoutFor />
        </div>
        <div className='lg:w-1/2 w-full lg:ml-6 lg:h-[220vh] bg-[#f5f5f5]'>
          <SummaryPanel />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage