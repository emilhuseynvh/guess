import React from 'react'

const SweetLife = () => {
    return (
            <div className='relative md:text-black text-white'>
                <img className='md:block hidden' src="assets/img/sweetlife.webp" alt="" />
                <img className='md:hidden block' src="assets/img/sweetlife_mobile.webp" alt="" />
                <div className='md:pt-[15%] md:ml-[5%] top-[50%]  left-1/2 -translate-x-1/2 absolute h-full w-full md:left-0 md:top-0'>
                    <p className='md:ml-[50%] md:mr-[5%] mb-0 text-center text-[8vw] md:text-[4vw] tracking-wider font-normal'>Revel in the Radiant</p>
                    <p className='md:ml-[50%] md:mr-[5%] text-center text-[3vw] md:text-[1.5vw] font-normal tracking-wider'>This season - every moment is an adventure</p>
                    <div className='md:ml-[50%] md:mr-[5%] flex justify-center mt-[3%] md:mt-[2%] gap-[8%]'>
                        <button className='tracking-wider text-[2.8vw] hover:border-black text-center md:text-[1.31rem] border-[1px]  text-black px-[7%] bg-white md:bg-transparent md:border-[#010101] border-white rounded-[25px] py-2 md:py-4 md:px-[7%] hover:bg-black hover:text-white duration-300'>MARCIANO COLLECTION</button>
                    </div>
                </div>
            </div>
    )
}

export default SweetLife