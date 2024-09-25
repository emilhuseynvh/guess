import React, { useState } from 'react';
import Address from './Address';

const CardNumber = () => {
    const [checkbox, setCheckbox] = useState(false);

    return (
        <div className='p-[1.5rem] bg-lightGray'>
            <div className='relative'>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                    Card number
                </label>
                <input
                    id="cardNumber"
                    name="cardNumber"
                    type="number"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <svg className="stroke-grayCustom w-[19px] h-[19px] absolute top-1/2 right-3 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke="#707070" fill="none" d="M3.5 6.3c0-2.298 1.131-4.9 3.5-4.9s3.5 2.602 3.5 4.9m-8.4.47v5.36c0 .26.21.47.47.47h8.86c.26 0 .47-.21.47-.47V6.77a.47.47 0 0 0-.47-.47H2.57a.47.47 0 0 0-.47.47"></path>
                </svg>
            </div>
            <div className='w-full flex'>
                <div className='w-1/2'>
                    <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                        Expiration date (MM / YY)
                    </label>
                    <input
                        id="expirationDate"
                        name="expirationDate"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div className='w-1/2 ml-4'>
                    <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700">
                        Security code
                    </label>
                    <input
                        id="securityCode"
                        name="securityCode"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mt-4">
                Name on card
            </label>
            <input
                id="nameOnCard"
                name="nameOnCard"
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <div className='flex mt-4'>
                <input
                    type="checkbox"
                    id="useShippingAsBilling"
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="useShippingAsBilling" className='text-sm font-medium ml-2 select-none'>
                    Use shipping address as billing address
                </label>
            </div>
            <div className={`${checkbox ? 'max-h-0' : 'max-h-[800px]'} overflow-hidden mt-4 transition-[max-height] duration-2000 ease-linear`}>
                <Address />
            </div>
        </div>
    );
};

export default CardNumber;
