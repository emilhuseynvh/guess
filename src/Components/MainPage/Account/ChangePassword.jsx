import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../Checkout/Input';

const validationSchema = Yup.object({
  old_password: Yup.string()
    .required('Old password is required')
    .min(6, 'Password must be at least 6 characters long'),
  new_password: Yup.string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters long'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});
const initialValues = {
  old_password: '',
  new_password: '',
  confirm_password: '',
};

const ChangePassword = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    setSubmitting(false);
  };

  return (
    <div className='md:mt-0 mt-6'>
      <h1 className='text-lg font-semibold'>Change Password</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='w-[90%] md:w-[100%]'>
              <Input account={true} type='password' label='Old Password' name='old_password' />
            </div>
            <div className='w-[90%] md:w-[100%]'>
              <Input account={true} type='password' label='New Password' name='new_password' />
            </div>
            <div className='w-[90%] md:w-[100%]'>
              <Input account={true} type='password' label='Confirm Password' name='confirm_password' />
            </div>
            <button className='border w-[90%] md:w-[100%] mb-6 hover:text-white hover:bg-black duration-200 py-2'>Change Password</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
