import React from 'react'
import Select from './Select'
import Input from './Input'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'

const state = [
    'Australian Capital Territory',
    'New South Wales',
    'Northern Territory',
    'Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia'
]

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    company: Yup.string(),
    address: Yup.string().required('Address is required'),
    apartment: Yup.string(),
    city: Yup.string().required('City is required'),
    postcode: Yup.number().typeError('Postcode must be a number').required('Postcode is required'),
    phone: Yup.number().typeError('Phone number must be a number').required('Phone is required')
});

const Address = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                company: '',
                address: '',
                apartment: '',
                city: '',
                postcode: '',
                phone: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form>
                <Select option={['Australia', 'New Zealand', 'Baku']} label={'Country/Region'} />
                <div className='flex'>
                    <div className='w-1/2 mr-2'>
                        <Input label={'First name'} type={'text'} name='firstName' />
                    </div>
                    <div className='w-1/2 ml-2'>
                        <Input label={'Last name'} type={'text'} name='lastName' />
                    </div>
                </div>
                <Input type={'text'} label={'Company (optional)'} name='company' />
                <Input type={'text'} label={'Address'} name='address' />
                <Input type={'text'} label={'Apartment, suite, etc. (optional)'} name='apartment' />
                <div className='flex'>
                    <div className='w-1/3'>
                        <Input type={'text'} label={'City'} name='city' />
                    </div>
                    <div className='w-1/3 mx-4'>
                        <Select label={'State/territory'} option={state} name='state' />
                    </div>
                    <div className='w-1/3'>
                        <Input type={'number'} label={'Postcode'} name='postcode' />
                    </div>
                </div>
                <Input type={'number'} label={'Phone'} name='phone' />
            </Form>

            <Input type={'number'} label={'Phone'} name='phone' />
        </Formik>
    )
}

export default Address