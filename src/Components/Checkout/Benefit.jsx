import React from 'react'

const Benefit = () => {
  return (
    <div>
    <h2 className="font-bold text-lg mb-4">Benefits</h2>
    <div className="flex items-start mb-4">
    <img className='w-[15px] mt-2' src="assets/img/phone.svg" alt="Phone" />
      <div className='ml-5'>
        <h3 className="font-bold">Customer Service</h3>
        <p className="text-gray-600">
          Need Help? Call us on <a href="tel:1800-0-GUESS" className="underline">1800-0-GUESS</a> or{' '}
          <a href="#" className="underline">contact us</a>.
        </p>
      </div>
    </div>
    <div className="flex items-start">
      <img className='w-[15px] mt-2' src="assets/img/return.svg" alt="Return" />
      <div className='ml-5'>
        <h3 className="font-bold">Returns</h3>
        <p className="text-gray-600">
          Need to send it back? No problem! 30 days hassle-free online and in-store returns.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Benefit