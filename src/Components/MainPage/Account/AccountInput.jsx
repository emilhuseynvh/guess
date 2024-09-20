import { ErrorMessage, Field } from 'formik'
import React from 'react'

const AccountInput = ({ type, label, name, placeholder}) => {
    return (
        <div className='flex flex-col w-[90%] sm:w-[150%]'>
            <label className='ml-1' htmlFor={name}>{label}</label>
            <Field className='border py-1 pl-2 rounded-lg outline-none my-1' type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default AccountInput