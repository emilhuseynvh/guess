import React from 'react';

const DashboardInput = ({ name, label, type, placeholder, value, onChange }) => {



  return (
    <div className='w-full'>
      <label className='px-1 text-sm' htmlFor={name}>{label}</label>
      <input value={value} style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn mt-1 w-full outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded' placeholder={placeholder} type={type} onChange={onChange} />
    </div>
  );
};

export default DashboardInput;
