import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import eye icons from react-icons

const Input = ({ label, type, date, code, setInputValue, name, placeholder, account }) => {
    const [val, setVal] = useState();
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleChange = (e) => {
        let inputValue = e.target.value.replace(/\D/g, '');
        if (inputValue.length > 2) {
            inputValue = inputValue.slice(0, 2) + ' / ' + inputValue.slice(2, 4);
        }
        setValue(inputValue);
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`${account && 'my-6'} relative z-0 w-full`}>
            <label htmlFor={name}>{label}</label>
            <div className="relative">
                <Field
                    id={name}
                    value={date ? value : undefined}
                    maxLength={date ? "7" : code ? "3" : undefined}
                    type={name === 'password' && showPassword ? 'text' : type}
                    className={`${account ? 'py-[8px]' : 'py-[15px]'} block px-2 w-full text-sm text-gray-900 border border-[#dedede]`}
                    placeholder={placeholder}
                    required
                />
                {name === 'password' && (
                    <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-2 flex items-center cursor-pointer">
                        {showPassword ? <AiOutlineEyeInvisible className='size-5' /> : <AiOutlineEye className='size-5' />}
                    </div>
                )}
            </div>
            <ErrorMessage name={name} component='div' className='text-red-600' />
        </div>
    );
}

export default Input;
