import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email is incorrect.')
        .required('Email is incorrect.'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  return (
    <div className='flex justify-center w-[95%] mx-auto'>
      <div className='w-full md:w-1/2 my-8'>
        <h2 className='text-lg font-semibold mb-[15px]'>Login</h2>
        <p className='text-sm font-medium mb-[10px]'>Please enter your email and password here.</p>
        <p className='text-sm font-semibold mb-[10px]'>If you were a member of our old site, please use the 'forget password' link to reset your password</p>
        <form onSubmit={formik.handleSubmit} className='my-4'>
          <div className='flex flex-col my-3'>
            <label className='text-[#8b9399] text-xs font-medium'>Email address*</label>
            <input
              className={`text-lg border-b outline-none py-3 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-500 text-sm mt-1'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='flex flex-col my-3'>
            <label className='text-[#8b9399] text-xs font-medium'>Password*</label>
            <input
              className={`text-lg border-b outline-none py-3 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='text-red-500 text-sm mt-1'>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className='border-2 border-black py-3 w-full my-5'>Login</button>
          <Link to='/register' className='underline text-sm font-medium'>Click to sign up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
