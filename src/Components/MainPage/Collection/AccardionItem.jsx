import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5';
import CheckBox from '../Checkout/CheckBox';
import InputSlider from './InputSlider';

const AccardionItem = ({ item, i }) => {

    const { title, element } = item

    const [accardion, setAccardion] = useState(false);

    return (
        <div className='filter border-b-[1px] border-b-[#979797] py-4 pr-1 overflow-hidden duration-300'>
            <div onClick={() => setAccardion(!accardion)} className='flex justify-between cursor-pointer'>
                <h3 className='text-base font-normal block leading-[1.5] pb-2'>{title}</h3>
                <IoChevronDown className={`${accardion ? '-rotate-180' : 'rotate-0'} duration-300`} />
            </div>
            <ul style={{ maxHeight: accardion ? '500px' : '0', transition: 'max-height 0.5s ease', }} className="pl-3 text-xs font-medium overflow-hidden">
                {element.map((list, index) => {
                    return (
                        <>
                            <div key={index} className={`${title === 'Price' ? 'hidden' : 'flex'} my-2`}>
                                <div className={i === 0 ? 'hidden' : title === 'Price' ? 'hidden' : 'block'}>
                                    <CheckBox />
                                </div>
                                <div style={{ background: `${list}`, borderColor: `${list === 'white' ? 'black' : list}` }} className={`${i === 0 ? 'block' : 'hidden'} border border-black w-5 h-5 rounded-[50%]`}></div>
                                <li key={i} className='cursor-pointer pb-1 ml-2 select-none'>{list}</li>
                            </div>
                            <div className={`${title === 'Price' ? 'block'  : 'hidden'} mr-5`}>
                                <InputSlider />
                            </div>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default AccardionItem