import React from 'react';

const SimpleInput = ({ name, label, placeholder, onChange, type, value }) => {
    return (
        <div className="relative z-0 w-full my-6">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                value={value}
                onChange={onChange}
                className="block px-2 w-full text-sm text-gray-900 border border-[#dedede] py-4"
                placeholder={placeholder}
                required
            />
        </div>
    );
};

export default SimpleInput;
