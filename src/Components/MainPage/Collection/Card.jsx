import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useAddToCartMutation } from '../../../redux/api';
import { setLike } from '../../../redux/LikeSlice';

const Card = ({ item }) => {

  const { id, name, price, discount, images, Colors, Size } = item

  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [addToCart, { data, error }] = useAddToCartMutation()

  const [size, setSize] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || []
    if (likedItems.includes(id)) {
      setLiked(true)
    }
  }, [id])

  const handleClick = () => {
    navigate(`details/${id}`)
  }

  const handleAdd = (index) => {
    addToCart({ productId: id, color: Colors[0], size: Size[index] })
  }

  const like = useSelector((state) => state.like.like);


  const handleLike = () => {
    let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (liked) {
      dispatch(setLike(like - 1))
      likedItems = likedItems.filter(itemId => itemId !== id);
      wishlist = wishlist.filter(wishlistItem => wishlistItem.id !== id);
    } else {
      dispatch(setLike(like + 1))
      likedItems.push(id);
      wishlist.push(item);
    }

    localStorage.setItem('likedItems', JSON.stringify(likedItems));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    setLiked(!liked);
  };


  return (
    <div className='w-full relative'>
      <div className='relative'>
        <div className='absolute right-2 top-2'>
          {liked ? (
            <FaHeart onClick={handleLike} className='w-5 h-5 cursor-pointer text-red-600' />
          ) : (
            <FaRegHeart onClick={handleLike} className='w-5 h-5 cursor-pointer' />
          )}
        </div>
        <img onClick={() => handleClick()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className='select-none cursor-pointer mb-[10px] w-full' src={hovered && images[1] ? images[1] : images[0]} alt="Image"/>
        <button onClick={() => setSize(!size)} className='absolute bottom-3 right-3 text-xs px-2 bg-[#F9F9F9] border border-[#b6b6b6b3] rounded-[.375rem] h-[1.875rem]'>Add {size ? '-' : '+'}</button>
      </div>
      <div>
        <h4 className='font-semibold text-sm leading-[1.5] mb-[5px]'>{name}</h4>
        <div className='flex items-start gap-2'>
          <p className={`${discount && 'line-through'} text-gray-400 font-normal text-sm mb-[10px]`}>$ {price}</p>
          <p className={`${discount ? 'block' : 'hidden'}`}>${discount && Math.floor(price - (price / 100 * discount))}</p>
        </div>
        <p className='text-[#ee3a43] text-sm font-normal'>25% Off With Code APASNI</p>
      </div>
      <div style={{ boxShadow: '0 0 rgba(0, 0, 0, 0), 0 0 rgba(0, 0, 0, 0), 0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} className={`${size ? 'block' : 'hidden'} absolute  rounded-[.375rem] z-50 p-5 bg-[#F9F9F9] bottom-4 sm:bottom-1 md:bottom-[-7px] left-1/2 -translate-x-1/2 w-[90%]`}>
        <div>
          <h3>Select a size:</h3>
          <ul className='flex flex-wrap pt-2'>
            {Size.map((item, i) => <li onClick={() => handleAdd(i)} key={i} className='pr-4 cursor-pointer hover:underline'>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
