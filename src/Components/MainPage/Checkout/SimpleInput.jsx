import React, { useState } from 'react';

const SimpleInput = ({ name, label, placeholder, onChange, type, value, space }) => {
    const [error, setError] = useState('');

    const validate = (val) => {
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(val)) {
                return 'Please enter a valid email';
            }
        } else if (name === 'postcode') {
            const numberRegex = /^\d{0,4}$/;
            if (!numberRegex.test(val)) {
                return 'Postcode can be a maximum of 4 digits';
            }
        } else if (!val) {
            return `${label} is required`;
        }

        return '';
    };

    const handleValidation = (e) => {
        let val = e.target.value;

        const errorMessage = validate(val);
        setError(errorMessage);

        onChange({ ...e, target: { ...e.target, value: val } });
    };

    const handleBlur = (e) => {
        const val = e.target.value;
        const errorMessage = validate(val);
        setError(errorMessage);
    };

    return (
        <div className={`${space ? 'mb-6 mt-0' : 'mb-12 mt-6'} relative z-0 w-full mt-6 `}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                value={value}
                onChange={handleValidation}
                onBlur={handleBlur}
                className={`block px-2 w-full text-sm text-gray-900 border border-[#dedede] py-4 ${error ? 'border-red-500' : ''}`}
                placeholder={placeholder}
                required
            />
            {error && <p className="text-red-500 text-sm mt-1 absolute">{error}</p>}
        </div>
    );
};

export default SimpleInput;


