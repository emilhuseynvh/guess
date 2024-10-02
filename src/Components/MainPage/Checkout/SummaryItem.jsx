import React from 'react';
import { useGetCartQuery } from '../../../redux/api';
import NoDataIcon from '../NoDataIcon';

const SummaryItem = () => {
    const { data: products, error } = useGetCartQuery();
    

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <div>
            {products && products.length > 0 ? (
                products.map((item) => {
                    const {images, name, price} = item.product_id
                    return (
                        <div key={item.id} className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div className='w-16 h-16 my-4 bg-lightGray border border-[#d6d4d4] relative'>
                                    <img className='object-contain w-full h-full' src={images[0]} alt={name} />
                                    <div className='p-[.7rem] bg-[#666] absolute -top-3 -right-2 clip w-[22px] h-[22px] rounded-[50%] flex justify-center items-center'>
                                        <span className='text-white font-semibold text-xs'>{item.count}</span>
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <p className='text-sm font-semibold'>{name}</p>
                                    <p className='text-sm text-grayCustom'>{item.Size}</p>
                                </div>
                            </div>
                            <p className='text-base font-medium'>{price}</p>
                        </div>
                    );
                })
            ) : (
                <NoDataIcon />
            )}
        </div>
    );
};

export default SummaryItem;
