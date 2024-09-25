import React, { useState } from 'react'
import WislistElement from '../../Components/MainPage/Account/WislistElement'
import NoDataIcon from '../../Components/MainPage/NoDataIcon';

const Wishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'))
  const [noData, setNoData] = useState(false)

  return (
    <div className='w-[95%] md:w-[90%] mx-auto my-8'>
      {wishlist && wishlist.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {wishlist.map((item, i) => (
            <WislistElement noData={noData} setNoData={setNoData} key={i} i={i} item={item} />
          ))}
        </div>
      ) : noData === true ? (
        <NoDataIcon />
      ) : <NoDataIcon />}

    </div>
  )
}

export default Wishlist
