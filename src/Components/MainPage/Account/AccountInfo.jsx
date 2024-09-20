import React, { useEffect } from 'react';
import * as Yup from 'yup';
import AccountInput from './AccountInput';
import { useUpdateUserMutation } from '../../../redux/api';
import { ErrorMessage, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});

const user = JSON.parse(localStorage.getItem('user'));

const input = [
    { type: 'text', label: 'Name', name: 'name' },
    { type: 'text', label: 'Email', name: 'email' },
    { type: 'text', label: 'Phone', name: 'phone' },
    { type: 'password', label: 'Password', name: 'password' },
];

const AccountInfo = ({ image, setImage }) => {
    const [updateUser, {data, isSuccess, isError, error }] = useUpdateUserMutation();
    
    const initialValues = {
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        password: '',
    };
    useEffect(() => {
        if (isSuccess) {
            toast.success('Profile updated succesfully')
            localStorage.setItem('user', JSON.stringify(data?.user))
            location.reload()
        }
        else if(isError){
            toast.error(error || 'profile could not be updated')
        }

    }, [isSuccess, isError])


    return (
        <div className='ml-8'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Submitting:', values);
                    updateUser({
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        password: values.password,
                        user_img: image
                    });
                }}
            >
                <Form>
                    <div className='sm:flex flex-wrap w-full'>
                        {input.map((item, i) => (
                            <div key={i} className='my-2 sm:mx-14 lg:mx-20'>
                                <AccountInput label={item.label} type={item.type} name={item.name} placeholder={item.placeholder} />
                                <ErrorMessage name={item.name} component='div' className='text-red-600' />
                            </div>
                        ))}
                    </div>
                    <button type='submit' className="mt-4 p-2 border border-black px-8 hover:bg-black hover:text-white rounded mb-5">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default AccountInfo;




