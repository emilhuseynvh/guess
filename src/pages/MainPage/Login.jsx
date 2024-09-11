import { Form, Formik, ErrorMessage } from 'formik';
import Input from '../../Components/MainPage/Login/Input';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/api';
import { ToastContainer, toast } from 'react-toastify';


const validationSchema = Yup.object({
  username: Yup.string().min(5, 'Username must be at least 5 characters').required('Username is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const navigate = useNavigate()

  function handleLoginResponse(response, values) {
    if (response.data) {
      localStorage.setItem('username', values.username)
      localStorage.setItem('token', response.data.token)
      navigate('/')
    }
    else {
      notify(response.error.data.error)
    }
  }

  const [userLogin] = useLoginMutation();
  const notify = (arg) => toast.error(arg);

  return (
    <div className='flex justify-center w-[95%] mx-auto'>
      <div className='w-full md:w-1/2 my-8'>
        <h2 className='text-lg font-semibold mb-[15px]'>Login</h2>
        <p className='text-sm font-medium mb-[10px]'>Please enter your email and password here.</p>
        <p className='text-sm font-semibold mb-[10px]'>If you were a member of our old site, please use the 'forget password' link to reset your password</p>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            userLogin({
              username: values.username,
              password: values.password
            })
              .then((response) => {
                handleLoginResponse(response, values)
              })
          }}
        >
          <Form>
            <div className='mb-4'>
              <Input name='username' type='username' label='Enter the username*' />
              <ErrorMessage name='username' component='div' className='text-red-600' />
            </div>
            <div className='mb-4'>
              <Input name='password' type='password' label='Enter your password*' />
              <ErrorMessage name='password' component='div' className='text-red-600' />
            </div>
            <button type="submit" className='border-2 border-black py-3 w-full my-5'>Login</button>
            <ToastContainer />
            <div className='mt-4'>
              <Link to='/forgot-password' className='text-blue-500'>Forgot your password?</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
