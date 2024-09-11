import React from 'react'
import { IoMdClose } from "react-icons/io";
import MiniCartElement from './MiniCartElement';
import CartBottom from './CartBottom';

const product = [
  {
    img: 'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V1.jpg?v=1721191714',
    title: 'Eco beige treated flower jumper',
    price: '$116.95',
    total: '$129.95'
  },
  {
    img: 'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V1.jpg?v=1721191714',
    title: 'Eco beige treated flower jumper',
    price: '$116.95',
    total: '$129.95'
  },
  {
    img: 'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V1.jpg?v=1721191714',
    title: 'Eco beige treated flower jumper',
    price: '$116.95',
    total: '$129.95'
  },
  {
    img: 'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V1.jpg?v=1721191714',
    title: 'Eco beige treated flower jumper',
    price: '$116.95',
    total: '$129.95'
  },
  {
    img: 'https://guess.com.au/cdn/shop/files/M4GQ14KC6V1_DREAMY-MOON_V1.jpg?v=1721191714',
    title: 'Eco beige treated flower jumper',
    price: '$116.95',
    total: '$129.95'
  },
]

const MiniCart = ({ cart, setCart }) => {
  return (
    <div className={`${cart ? 'block' : 'hidden'} fixed md:absolute w-screen md:w-[400px] inset-0 md:inset-auto top-0 md:top-9 right-0 md:right-5 h-auto md:h-[700px] overflow-y-auto z-50 bg-white border border-black pt-[15px] px-[29px]`}>
      <IoMdClose onClick={() => setCart(!cart)} className='absolute top-3 right-3 font-light text-2xl cursor-pointer' />
      <div>
        <p className='font-semibold text-sm'>Cart ({product.length} items)</p>
        {product.map((item, i) => {
          return <MiniCartElement cart={false} key={i} item={item} />
        })}
      </div>
      <CartBottom bl={false} cart = {cart} setCart = {setCart} />
    </div>
  )
}

export default MiniCart