import React from 'react'
import { FiTag } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import FreeShipping from '../FreeShipping';

const CartBottom = ({ bl, setCart, cart }) => {

    const navigate = useNavigate()

    return (
        <>
            <div className={`${bl ? 'block' : 'hidden'}`}>
                <FreeShipping />
            </div>
            <div className='pt-4 mt-2 border-t border-[#eee]'>
                <div className='flex justify-between'>
                    <p className='text-sm'>Subtotal</p>
                    <p className='text-[.94rem] font-light'>$ 389.95</p>
                </div>
                <div className='mt-3 flex justify-between'>
                    <div className='flex items-center'>
                        <FiTag className='text-lg rotate-90' />
                        <p className='ml-2 text-xs'>guess1073a67298</p>
                    </div>
                    <p className='text-[.94rem] font-light'>-$39.00</p>
                </div>
                <div className='mt-3 flex justify-between'>
                    <p className='text-lg font-semibold'>Total</p>
                    <p className='text-lg font-semibold'>$350.95</p>
                </div>
                <p onClick={() => {setCart(!cart), navigate('/cart')}} to='/cart' className={`${bl ? 'hidden' : 'block'} text-center underline text-sm mt-3 cursor-pointer`}>View cart</p>
                <Link to='/checkout'  className='bg-black block text-white mb-5 font-medium text-base mt-3 text-center w-full py-[9px]'>Proceed To Checkout</Link>
                <div className={`${bl ?  'hidden' : 'block'}`}>
                    <FreeShipping />
                </div>
            </div>
        </>
    )
}

export default CartBottom