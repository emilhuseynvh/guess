import React from 'react'

const Input = ({ label, type }) => {
    
    return (
        <div class="relative z-0 w-full mb-6">
            <input type={type} className="block pt-6 pb-3 w-full text-sm text-gray-900 border border-[#dedede] appearance-none outline- focus:ring-0 px-4 outline-1 peer" placeholder=" " required />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 select-none  duration-300 transform -translate-y-7 scale-75 top-4 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[14px]">{label}</label>
        </div>
    )
}

export default Input