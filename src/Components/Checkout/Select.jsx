import React from 'react'

const Select = ({ option, label }) => {
    return (
        <div className="relative z-0 w-full mb-6">
            <select className="block pt-6 pb-2 w-full text-sm text-gray-900 border border-[#dedede] appearance-none focus:ring-0 px-4 outline-1 peer">
                {option.map((item, i) => {
                    return <option key={i} value={item} defaultValue={i === 0}>{item}</option>;
                })}
            </select>
            <label className="peer-focus:font-medium absolute text-base text-gray-500 select-none duration-300 transform  scale-75 top-4 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto px-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 -translate-y-[12px]">{label}</label>
        </div>
    )
}

export default Select