import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react'

const Input = ({ label, type, date, code, setInputValue, name, placeholder }) => {


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
        <div className="relative z-0 w-full">
            <label htmlFor={name}>{label}</label>
            <Field name={name} value={date ? value : undefined} maxLength={date ? "7" : code ? "3" : undefined} type={type} className="block py-[15px] px-2 w-full text-sm text-gray-900 border border-[#dedede]" placeholder={placeholder} required />
            <ErrorMessage name={name} component='div' className='text-red-600' />
        </div>
    )
}

export default Input