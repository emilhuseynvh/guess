import React from 'react'
import CardNumber from './CardNumber'

const Method = ({ item, i, checkboxCircle, setCheckboxCircle, }) => {

    const { img, title, desc, card } = item
    
    return (
        <div>
            <div onClick={() => setCheckboxCircle(i)} className={`${checkboxCircle === i ? 'bg-lightGray border-black' : 'bg-transparent border-[#dedede]'} border flex justify-between items-center cursor-pointer p-[1.5rem]`}>
                <div className='flex items-center'>
                    <div className={`${checkboxCircle === i && 'bg-black'} w-[18px] h-[18px] flex items-center border border-[#dedede] justify-center rounded-[50%]`}>
                        <div className={`${checkboxCircle === i ? 'block' : 'hidden'} w-[6px] h-[6px] bg-white rounded-[50%]`}>
                        </div>
                    </div>
                    <p className='ml-2 select-none'>{title}</p>
                </div>
                <div className='flex gap-2'>
                    {img.map((item, i) =>  <img key={i} src={item} alt="Payment Method" /> )}
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-out flex flex-col bg-lightGray justify-center  ${checkboxCircle === i ? 'max-h-[5000px] p-[1rem]' : 'max-h-0 p-0'}`}>
                {!card ? (
                    <>
                        <svg className={`${i === 1 ? 'hidden' : 'block'} h-20`} xmlns="http://www.w3.org/2000/svg" viewBox="-270.8 371 102 52"><path fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="2" d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"></path><circle cx="-255.5" cy="376.5" r="1.5" fill="#707070"></circle><circle cx="-250.5" cy="376.5" r="1.5" fill="#707070"></circle><circle cx="-245.5" cy="376.5" r="1.5" fill="#707070"></circle></svg>
                        <p className='text-center  mt-6 md:px-14 lg:px-24'>{desc}</p>
                    </>
                ) : (
                    <CardNumber />
                )}
            </div>
        </div>
    )
}

export default Method