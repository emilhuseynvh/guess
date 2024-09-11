import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Checkbox from '../../Components/MainPage/Checkbox';

const input = [
  {
    label: 'First Name*',
    type: 'text',
    name: 'firstName',
  },
  {
    label: 'Last Name*',
    type: 'text',
    name: 'lastName',
  },
  {
    label: 'Email address*',
    type: 'text',
    name: 'email',
  },
  {
    label: 'Password*',
    type: 'password',
    name: 'password',
  },
];

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .required('First Name is required')
      .min(3, 'First name must be at least 3 characters'),
      lastName: Yup.string()
      .required('Last Name is required')
      .min(6, 'Last name must be at least 6 characters'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .required('Password is required'),

    }),
    onSubmit: (values) => {
      console.log('Form Values:', values);
    },
  });

  return (
    <div className='w-[95%] mx-auto flex justify-center pt-8'>
      <div className='w-full md:w-1/2'>
        <h2 className='text-2xl font-semibold mb-[15px]'>Register</h2>
        <p className='text-sm font-medium mb-[15px]'>Create an account to make your checkout experience fast and easy.</p>
        <form onSubmit={formik.handleSubmit} className='pt-4'>
          {input.map((item, i) => {
            return (
              <div key={i} className='my-4 flex flex-col'>
                <label className='text-[#8b9399] text-xs font-medium'>{item.label}</label>
                <input
                  className={`text-lg border-b ${
                    formik.touched[item.name] && formik.errors[item.name] ? 'border-red-500' : 'border-[#bdbec0]'
                  } outline-none py-3`}
                  type={item.type}
                  name={item.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name]}
                />
                {formik.touched[item.name] && formik.errors[item.name] ? (
                  <p className='text-red-500 text-xs mt-1'>{formik.errors[item.name]}</p>
                ) : null}
              </div>
            );
          })}
          <div className='flex'>
            <div className='w-6 h-6 mx-[10px]'>
              <Checkbox />
            </div>
            <p className='text-sm font-medium'>
              Yes, I want to become a VIP and be the among the first to hear about GUESS special offers, exclusive events and new collections.
            </p>
          </div>
          <div className='w-full flex justify-center'>
            <button type='submit' className='w-[90%] border-2 border-black py-3 my-6'>
              Register
            </button>
          </div>
        </form>
        <p className='text-center underline text-sm font-medium p-3 mb-5'>Login if you are already a member</p>
      </div>
    </div>
  );
};

export default Register;
