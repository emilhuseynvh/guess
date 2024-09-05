import React, { useState } from 'react'

const Input = ({ label, type, date, code, setInputValue }) => {

    const [val, setVal] = useState()

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        let inputValue = e.target.value.replace(/\D/g, '');

        if (inputValue.length > 2) {
            inputValue = inputValue.slice(0, 2) + ' / ' + inputValue.slice(2, 4);
        }
        setValue(inputValue);
        

    };

    return (
        <div className="relative z-0 w-full mb-6">
            <input value={date ? value : undefined} onInput={(e) => setVal(e.target.value)} onChange={date ? handleChange : setInputValue ? (e) => setInputValue(e.target.value) : undefined} maxLength={date ? "7" : code ? "3" : undefined} type={type} className="block pt-6 pb-3 w-full text-sm text-gray-900 border border-[#dedede] appearance-none outline- focus:ring-0 px-4 outline-1 peer" placeholder=" " required />
            <label className={`${val ? "scale-75 -translate-y-[14px]" : ""} peer-focus:font-medium absolute text-sm text-gray-500 select-none duration-300 transform top-4 z-10 origin-[0] peer-focus:start-0  rtl:peer-focus:left-auto px-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75]`}>{label}</label>
        </div>
    )
}

export default Input