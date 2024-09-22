import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const WislistElement = ({ item, i }) => {
  const { id, images, name, description, price, discount } = item

  const [remove, setRemove] = useState(false)

  
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

  return (
    <div className={`${remove ? 'hidden' : 'block'} w-[100%] cursor-pointer relative`}>
      <IoMdClose onClick={() => handleDelete()} className='absolute w-6 h-6 right-2 top-2' />
      <img src={images[0]} alt="Product Image" />
      <h2 className='mt-1 '>{name}</h2>
      <p className='mt-1 text-sm'>{description.length > 50 ? description.slice(0, 50) + '...' : description}</p>
      <div className='flex items-center gap-2'>
        <p className={`${discount && 'line-through text-gray-500'} text-sm`}>{price}</p>
        <p className={`${discount ? 'block' : 'hidden'} text-base`}>{discount}</p>
      </div>
    </div>
  )
}

export default WislistElement
