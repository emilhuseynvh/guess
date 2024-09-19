import React from 'react'

const BrandButton = ({ name }) => {
  return (
    <button className='w-full bg-dashboardBtn hover:bg-[#5C67F7E6] duration-100 py-[.5rem] px-3 rounded-[4px] text-sm'>{name}</button>
  )
}

export default BrandButton