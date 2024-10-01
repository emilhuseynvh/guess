import React, { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import MiniCartElement from './MiniCartElement';
import CartBottom from './CartBottom';
import { useGetCartQuery } from '../../../redux/api';
import NoDataIcon from '../NoDataIcon';

const MiniCart = ({ cart, setCart }) => {
  const { data: products, error, isLoading } = useGetCartQuery();
  
  return (
    <div className={`${cart ? 'block' : 'hidden'} scroll fixed md:absolute w-screen md:w-[400px] inset-0 md:inset-auto top-0 md:top-9 right-0 md:right-5 h-auto md:h-[700px] overflow-y-auto z-50 bg-white border border-black pt-[15px] px-[29px]`}>
      <IoMdClose onClick={() => setCart(!cart)} className='absolute top-3 right-3 font-light text-2xl cursor-pointer'/>

      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to load cart items. Please try again.</p>}

      {!isLoading && !error && (
        <div>
          <p className='font-semibold text-sm'>Cart ({products?.length || 0} items)</p>
          {products?.map((item) => (
            <MiniCartElement cart={false} key={item.id} item={item} />
          ))}
          {products.length === 0 && <NoDataIcon />}
        </div>
      )}

      <CartBottom bl={false} products={products} cart={cart} setCart={setCart} />
    </div>
  );
};

export default MiniCart;
