import React from 'react';
import Input from '../../Components/MainPage/Checkout/Input';
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage } from 'formik';
import { useLoginMutation } from '../../redux/api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const validationSchema = Yup.object({
    username: Yup.string().min(5, 'Username must be at least 5 characters').required('Username is required'),
    password: Yup.string().required('Password is required')
});

const DashboardLogin = () => {
    const navigate = useNavigate()

    function handleNavigate(response) {
        if (response.data) {
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard')
            location.reload()
        }
        else {
            notify(response.error.data.error)
        }
    }

    const [adminLogin, { data }] = useLoginMutation()

    const notify = (arg) => toast.error(arg);



    return (
        <div className='bg-[#eee] mx-auto w-screen h-screen'>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    adminLogin({
                        username: values.username,
                        password: values.password,
                    })
                        .then((response) => {
                            console.log(response);

                            handleNavigate(response, values)
                        })
                }}
            >
                <Form className='w-[30%] mx-auto pt-48'>
                    <p className='text-xl text-center pb-4'>Sign in</p>
                    <div className="mb-4">
                        <Input type='text' label='Username *' name='username' placeholder='Enter the username' />
                    </div>
                    <div className="mb-4">
                        <Input type='password' label='Password *' name='password' placeholder='Enter the password' />
                    </div>
                    <button type='submit' className='w-full py-3 border border-black hover:text-white duration-200 hover:bg-black mt-1'>Sign in</button>
                    <ToastContainer />
                </Form>
            </Formik>
        </div>
    );
}

export default DashboardLogin;
