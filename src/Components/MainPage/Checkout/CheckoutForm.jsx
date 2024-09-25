import React, { useState } from 'react';
import CheckBox from './CheckBox';
import { Link } from 'react-router-dom';
import Address from './Address';
import Method from './Method';
import SimpleInput from './SimpleInput';

const method = [
    {
        card: true,
        title: 'Credit card',
        img: [
            'assets/img/visa.svg',
            'assets/img/master.svg',
            'assets/img/amex.svg',
            'assets/img/eftpos.svg'
        ]
    },
    {
        paypal: true,
        desc: 'After clicking "Pay with PayPal", you will be redirected to PayPal to complete your purchase securely.',
        title: 'PayPal',
        img: ['assets/img/paypal.svg']
    },
    {
        desc: 'After clicking “Pay now”, you will be redirected to Afterpay to complete your purchase securely.',
        title: 'Afterpay',
        img: ['assets/img/afterpay.svg']
    },
    {
        desc: 'After clicking “Pay now”, you will be redirected to Klarna - Flexible payments to complete your purchase securely.',
        title: 'Klarna - Flexible payments',
        img: ['assets/img/klarna.svg']
    },
    {
        desc: 'After clicking “Pay now”, you will be redirected to Zip - Buy now, pay later to complete your purchase securely.',
        title: 'Zip - Buy now, pay later',
        img: ['assets/img/zip.svg']
    },
];

const CheckoutForm = () => {
    const [checkbox, setCheckbox] = useState(false);
    const [checkboxCircle, setCheckboxCircle] = useState(0);
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, mobile });
    };

    return (
        <div className='w-full'>
            <p className='text-sm font-medium text-center mt-4'>Express checkout</p>
            <div className='flex items-center w-full pt-4'>
                <button className='bg-[#592ff4] w-1/2 h-12 rounded'>
                    {/* PayPal and other buttons content here */}
                </button>
                <button className='h-12 w-1/2 flex justify-center items-center rounded bg-[#ffc439] ml-4'>
                    <img className='w-[84px]' src="assets/img/paypal.svg" alt="Paypal" />
                </button>
            </div>
            <div className='flex items-center my-4'>
                <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
                <h1 className=' whitespace-nowrap text-center px-4 text-sm'>OR</h1>
                <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ fontFamily: 'futura, sans-serif' }}>
                    <div className='flex justify-between items-center mb-4'>
                        <p>Contact</p>
                        <Link to='/login' className='text-sm cursor-pointer underline'>Log in</Link>
                    </div>

                    <SimpleInput label="Email address" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter the email address"/>

                    <div className='flex items-center select-none'>
                        <CheckBox checkbox={checkbox} setCheckbox={setCheckbox} />
                        <p className='ml-2 text-sm'>Email me with news and offers</p>
                    </div>
                    <p className='my-8'>Delivery</p>
                    <Address />
                    <div className='flex items-center mb-6'>
                        <CheckBox checkbox={checkbox} setCheckbox={setCheckbox} />
                        <p className='ml-2 text-sm'>Text me with news and offers</p>
                    </div>

                    <div className={`${checkbox ? 'max-h-96' : 'max-h-0'} transition-[max-height] duration-2000 ease-linear overflow-hidden`}>
                        <SimpleInput label="Mobile phone number" name="mobile" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter the mobile number" />
                        <p className='text-xs font-medium'>By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our Privacy Policy and Terms of Service. </p>
                    </div>
                    <p className='text-sm font-medium'>Shipping method</p>
                    <p className='text-base text-[#707070] rounded-[5px] px-[1.8rem] py-4 bg-[#f5f5f5] my-4'>Enter your shipping address to view available shipping methods.</p>
                    <div>
                        <p className='text-sm font-medium'>Payment</p>
                        <p className='text-[#707070] text-xs mt-2 mb-4'>All transactions are secure and encrypted.</p>
                    </div>
                    <div>
                        {method.map((item, i) => (
                            <Method checkboxCircle={checkboxCircle} setCheckboxCircle={setCheckboxCircle} key={i} item={item} i={i} />
                        ))}
                    </div>
                    <button type='submit' className='w-full bg-black text-white my-4 py-4'>Pay now</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
