import React from 'react'
import { useNavigate } from 'react-router-dom'

const Introducing = () => {
  const navigate = useNavigate() 

  return (
    <div className='my-10 relative'>
        <img className='md:block hidden' src="assets/img/introducing.webp" alt="BG image" />
        <img className='md:hidden block'  src="assets/img/introducing_mobile.avif" alt="BG image" />
        <div className='absolute top-[63%]  text-sm md:text-base md:w-full flex md:flex-row flex-col md:left-0 left-[4%]  justify-center'>
            <button onClick={() =>  navigate({ pathname: '/products/all', search: `?subcategoryId=34&brandId=4`})} className='md:bg-[#FFFFFF99] px-4 py-2 bg-white sm:w-auto hover:bg-black md:my-0 my-2 hover:text-white duration-300 rounded-[25px] md:py-[14px] md:px-14 md:mx-2'>Women's Clothes</button>
            <button onClick={() =>  navigate({ pathname: '/products/all', search: `?subcategoryId=35&brandId=4`})} className='md:bg-[#FFFFFF99] px-4 py-2 bg-white rounded-[25px] md:my-0 my-2 hover:bg-black duration-300 hover:text-white md:py-[14px] md:px-[68px] md:mx-2'>Men's Clothes</button>
        </div>
    </div>
  )
}

export default Introducing