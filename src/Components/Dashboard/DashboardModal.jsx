import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setOpen } from '../../redux/open';
import DashboardInput from './DashboardInput';
import BrandButton from './DashboardButton';

const BrandModal = ({ inputDetails, handleSubmit, isEdit }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className='absolute inset-0 opacity-40 bg-black z-50 w-screen h-screen'></div>
      <div style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='bg-dashboardSecondary w-[35%] h-[350px] px-8 pb-8 z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <div className='w-full flex justify-end mb-7 mt-6'>
          <IoMdClose onClick={() => dispatch(setOpen())} className='absolute text-xl cursor-pointer' />
        </div>
        {inputDetails.map((item, i) => {
          const { type, onChange, label, placeholder, value } = item;
          return (
            <div className='my-8' key={i}>
              <DashboardInput type={type} placeholder={placeholder} value={value} onChange={onChange} label={label} />
            </div>
          );
        })}
        <div onClick={() => handleSubmit()} className='w-full mt-8'>
          <BrandButton name={isEdit ? 'Update Brand' : 'Create Brand'} />
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
