import React from 'react'
import NoDataIcon from '../NoDataIcon'

const Order = () => {
  return (
    <div className='my-32 w-full mx-[120px]'>
      <NoDataIcon text='You havent placed any orders yet' />
    </div>
  )
}

export default Order