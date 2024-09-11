import { Field } from 'formik'
import React from 'react'

const Input = ({ name, label, type }) => {
  return (
    <div className='flex flex-col my-3'>
            <label htmlFor={name} className='text-[#8b9399] text-xs font-medium'>{label}</label>
            <Field className={`text-lg border-b outline-none py-3 `} type={type} name={name} />
          </div>
  )
}

export default Input