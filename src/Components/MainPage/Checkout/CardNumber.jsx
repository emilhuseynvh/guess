import React, { useState } from 'react';
import Address from './Address';
import SimpleInput from './SimpleInput';
import CheckBox from './CheckBox';

const CardNumber = () => {
    const [checkbox, setCheckbox] = useState(false);

    const handleInputChange = (e) => {
    };

    return (
        <div className='p-[1.5rem] bg-lightGray'>
            <div className='relative'>
                <SimpleInput name="cardNumber" label="Card number" type="number" placeholder="Enter card number" onChange={handleInputChange} />
                <svg className="stroke-grayCustom w-[19px] h-[19px] absolute top-1/2 right-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke="#707070" fill="none" d="M3.5 6.3c0-2.298 1.131-4.9 3.5-4.9s3.5 2.602 3.5 4.9m-8.4.47v5.36c0 .26.21.47.47.47h8.86c.26 0 .47-.21.47-.47V6.77a.47.47 0 0 0-.47-.47H2.57a.47.47 0 0 0-.47.47"></path>
                </svg>
            </div>
            <div className='w-full flex'>
                <div className='w-1/2'>
                    <SimpleInput space={true} name="expirationDate" label="Date" type="text" placeholder="MM / YY" onChange={handleInputChange} />
                </div>
                <div className='w-1/2 ml-4'>
                    <SimpleInput space={true} name="securityCode" label="Security code" type="text" placeholder="Enter security code" onChange={handleInputChange} />
                </div>
            </div>
            <SimpleInput name="nameOnCard" label="Name on card" type="text" placeholder="Enter name on card" onChange={handleInputChange} />
            <div className='flex mt-4'>
                <div onClick={() => setCheckbox(!checkbox)}>
                    <CheckBox />
                </div>
                <label htmlFor="useShippingAsBilling" className='text-sm font-medium ml-2 select-none'>Use shipping address as billing address</label>
            </div>
            <div className={`${checkbox ? 'max-h-0' : 'max-h-[5000px]'} overflow-hidden mt-4 transition-[max-height] duration-2000 ease-linear`}>
                <Address />
            </div>
        </div>
    );
};

export default CardNumber;
