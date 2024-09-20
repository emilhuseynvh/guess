import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from './Input';

// Define the Yup validation schema
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
});

const CheckoutFor = () => {
    return (
        <div className='w-full'>
            <p className='text-sm font-medium text-center mt-4'>Express checkout</p>
            <div className='flex items-center w-full pt-4'>
                <button className='bg-[#592ff4] w-1/2 h-12 rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 341 80.035" className="PrlUn w-[84px] mx-auto">
                        {/* SVG content */}
                    </svg>
                </button>
                <button className='h-12 w-1/2 flex justify-center items-center rounded bg-[#ffc439] ml-4'>
                    <img className='w-[84px]' src="assets/img/paypal.svg" alt="Paypal" />
                </button>
            </div>

            <div className='flex items-center my-4'>
                <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
                <h1 className='whitespace-nowrap text-center px-4 text-sm'>OR</h1>
                <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
            </div>

            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Form Submitted', values);
                }}
            >
                {({ handleSubmit }) => (
                    <Form className='w-[30%] mx-auto pt-48' onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input
                                type='text'
                                label='Email *'
                                name='email'
                                placeholder='Enter your email'
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                            Submit
                        </button>
                        <ToastContainer />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CheckoutFor;

