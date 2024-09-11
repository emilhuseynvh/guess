import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className='mb-2'>
                <img className='md:block hidden' src="assets/img/ads_desktop.avif" alt="Ads" />
                <img className='md:hidden block' src="assets/img/ads_mobile.avif" alt="Ads" />
            </div>
            <div className='relative md:text-black text-white'>
                <img className='md:block hidden' src="assets/img/hero.webp" alt="" />
                <img className='md:hidden block' src="assets/img/hero_mobile.webp" alt="" />
                <div className='md:mt-[14%] md:ml-[50%] top-[50%]  left-1/2 -translate-x-1/2 absolute h-full w-full md:left-0 md:top-0'>
                    <p className='md:ml-[50%] md:mr-[5%] mb-0 text-center text-[8vw] md:text-[4vw] tracking-wider font-normal'>Revel in the Radiant</p>
                    <p className='md:ml-[50%] md:mr-[5%] text-center text-[3vw] md:text-[1.5vw] font-normal tracking-wider'>This season - every moment is an adventure</p>
                    <div className='md:ml-[50%] md:mr-[5%] flex justify-center mt-[3%] md:mt-[2%] gap-[8%]'>
                        <Link to='/collection'  className='tracking-wider text-[2.8vw] hover:border-black text-center md:text-[1.31rem]  border-[1px]  text-black px-[7%] bg-white md:bg-transparent md:border-[#010101] border-white rounded-[25px] py-[10px] md:px-[7%] hover:bg-black hover:text-white duration-300'>WOMEN'S</Link>
                        <Link to='/collection' className='tracking-wider text-[2.8vw] hover:border-black md:text-[1.31rem]  border-[1px] bg-white md:bg-transparent px-[7%] md:border-[#010101] border-white rounded-[25px] text-black py-[10px] md:px-[9%] hover:bg-black hover:text-white duration-300'>MEN'S</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero