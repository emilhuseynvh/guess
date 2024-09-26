import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useAddToCartMutation } from '../../../redux/api';
import { useNavigate } from 'react-router-dom';
import NoDataIcon from '../NoDataIcon';

const WislistElement = ({ item, i, noData, setNoData }) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'))
  const navigate = useNavigate()
  const [remove, setRemove] = useState(false)

  const { id, images, name, description, price, discount, Size, Colors } = item

  const [addToCart, { data, error }] = useAddToCartMutation()
  console.log(data, error);
  const [hovered, setHovered] = useState(false);

  const handleAdd = () => {
    addToCart({ productId: id, count: 1, size: Size[0], color: Colors[0] })
  }

  const handleNavigate = () => {
    navigate(`/products/all/details/${id}`)
  }



  const handleDelete = () => {
    const likedItems = JSON.parse(localStorage.getItem('likedItems') || [])
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || [])
    const updatedItems = likedItems.filter(item => item !== id)
    const updatedWishlist = wishlist.filter((item) => item.id !== id)
    console.log(updatedWishlist);

    localStorage.setItem('likedItems', JSON.stringify(updatedItems))
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    setRemove(true)
  }
  if(wishlist.length === 0 && remove === true){
    setNoData(true)
  }
    return (
      <div className={`${remove ? 'hidden' : 'block'} w-[100%] cursor-pointer relative`}>
        <IoMdClose onClick={(e) => { e.stopPropagation(); handleDelete() }} className='absolute w-6 h-6 right-2 top-2 z-30' />
        <img onClick={() => handleNavigate()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='select-none cursor-pointer mb-[10px] w-full' src={hovered && images[1] ? images[1] : images[0]} alt="Image" />
        <h2 className='mt-1 '>{name}</h2>
        <p className='mt-1 text-sm'>{description.length > 50 ? description.slice(0, 50) + '...' : description}</p>
        <div className='xs:flex items-center gap-2 justify-between'>
          <div className='flex gap-1 items-center'>
            <p className={`${discount && 'line-through text-gray-500'} text-sm`}>{price}</p>
            <p className={`${discount ? 'block' : 'hidden'} text-base text-red-500`}>{discount}</p>
          </div>
          <button onClick={() => handleAdd()} className='border text-sm border-black px-2 py-1 hover:text-white hover:bg-black whitespace-nowrap'>Add to cart</button>
        </div>
      </div>
    )
}

export default WislistElement
