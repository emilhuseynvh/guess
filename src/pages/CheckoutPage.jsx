import React from 'react'
import CheckoutForm from '../Components/Checkout/CheckoutForm'

const CheckoutPage = () => {
  return (
    <div className='flex justify-end'>
      <div className='w-[90%] h-screen'>
        <div className='w-1/2'>
          <CheckoutForm />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage