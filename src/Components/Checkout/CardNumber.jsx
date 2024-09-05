import React, { useState } from 'react'
import Input from './Input'
import CheckBox from './CheckBox'
import Address from './Address'

const CardNumber = () => {

    const [checkbox, setCheckbox] = useState(false)

    return (
        <div className='p-[1.5rem] bg-lightGray'>
            <div className='relative'>
                <Input label={'Card number'} type={'number'} />
                <svg className="stroke-grayCustom w-[19px] h-[19px] absolute top-1/2 right-3 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" stroke="#707070" fill="none" d="M3.5 6.3c0-2.298 1.131-4.9 3.5-4.9s3.5 2.602 3.5 4.9m-8.4.47v5.36c0 .26.21.47.47.47h8.86c.26 0 .47-.21.47-.47V6.77a.47.47 0 0 0-.47-.47H2.57a.47.47 0 0 0-.47.47"></path></svg>
            </div>
            <div className='w-full flex'>
                <div className='w-1/2'>
                    <Input label={'Expiration date (MM / YY)'} date={true} type={'text'} />
                </div>
                <div className='w-1/2 ml-4'>
                    <Input label={'Security code'} type={'text'} code={true} />
                </div>
            </div>
            <Input label={'Name on card'} type={'text'} />
            <div className='flex'>
                <CheckBox checkbox={checkbox} setCheckbox={setCheckbox} />
                <p className='text-sm font-medium select-none ml-2'>Use shipping address as billing address</p>
            </div>
            <div className={`${checkbox ? 'max-h-0' : 'max-h-[800px]'} overflow-hidden mt-4 transition-[max-height] duration-2000 ease-linear`}>
                <Address />
            </div>
        </div>
    )
}

export default CardNumber