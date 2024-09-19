import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Checkbox from '../../Components/MainPage/Checkbox';
import { useRegisterMutation } from '../../redux/api';
import { eGender } from './../../enum/enumData'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const input = [
  {
    label: 'Name*',
    type: 'text',
    name: 'name',
  },
  {
    label: 'Username*',
    type: 'text',
    name: 'username',
  },
  {
    label: 'Email address*',
    type: 'text',
    name: 'email',
  },
  {
    label: 'Phone*',
    type: 'text',
    name: 'phone',
  },
  {
    label: 'Password*',
    type: 'password',
    name: 'password',
  },
  {
    label: 'Confirm Password*',
    type: 'password',
    name: 'confirmPassword',
  }
];



const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 9 digits'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Register = () => {
  const [registerMutation, { data, error, isError, isSuccess, isLoading }] = useRegisterMutation();
  console.log(data, error);

  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/login');
    }

    if (error) {
      toast.error('This user already exists')
    }
  }, [error, isSuccess]);


  const [gender, setGender] = useState()

  return (

    <div className='w-[95%] mx-auto flex justify-center pt-8'>
      <ToastContainer />
      <div className='w-full md:w-1/2'>
        <h2 className='text-2xl font-semibold mb-[15px]'>Register</h2>
        <p className='text-sm font-medium mb-[15px]'>Create an account to make your checkout experience fast and easy.</p>

        <Formik
          initialValues={{
            name: '',
            username: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            gender: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            registerMutation({
              name: values.name,
              username: values.username,
              email: values.email,
              password: values.password,
              phone: values.phone,
              gender: gender
            })

          }}
        >
          {({ handleChange, handleBlur, values, isSubmitting }) => (
            <Form className='pt-4'>
              {input.map((item, i) => (
                <div key={i} className='my-4 flex flex-col'>
                  <label className='text-[#8b9399] text-xs font-medium'>{item.label}</label>
                  <Field className='text-lg border-b border-[#bdbec0] outline-none py-3' type={item.type} name={item.name} onChange={handleChange} onBlur={handleBlur} value={values[item.name]} />
                  <ErrorMessage name={item.name}>
                    {(msg) => <p className='text-red-500 text-xs mt-1'>{msg}</p>}
                  </ErrorMessage>
                </div>

              ))}


              <label for="gender" class="text-[#8b9399] text-sm font-medium">Gender</label>
              <select onChange={(e) => setGender(e.target.value)} id="gender" name="gender" class="border-b border-[#bdbec0] w-full focus:outline-none py-3">
                <option value="" disabled selected></option>
                {eGender?.map((item, i) => <option key={i} value={item}>{item}</option>)}
              </select>
              <div className='w-full flex justify-center'>
                <button
                  type='submit'
                  className='w-[90%] border-2 border-black py-3 my-6'
                >
                  {isLoading ? 'Submitting...' : 'Register'}
                </button>
              </div>

            </Form>
          )}
        </Formik>

        <p className='text-center underline text-sm font-medium p-3 mb-5'>Login if you are already a member</p>
      </div>
    </div>
  );
};

export default Register;
