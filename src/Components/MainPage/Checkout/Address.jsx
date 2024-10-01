import React, { useEffect, useState } from 'react';
import Select from './Select';
import SimpleInput from './SimpleInput';

const stateOptions = [
    'Australian Capital Territory',
    'New South Wales',
    'Northern Territory',
    'Queensland',
    'South Australia',
    'Tasmania',
    'Victoria',
    'Western Australia'
];

const Address = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [stateValue, setStateValue] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    useEffect(() => {
        console.log(firstName);
    }, [firstName, setFirstName])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            firstName,
            lastName,
            company,
            address,
            apartment,
            city,
            state: stateValue,
            postcode,
            phone,
            country
        };
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Select name="country" label="Country/Region" option={['Australia', 'New Zealand', 'Baku']} value={country} onChange={(e) => setCountry(e.target.value)}/>

            <div className='flex'>
                <div className='w-1/2 mr-2'>
                    <SimpleInput  label="First name"  name="firstName"  type="text"  value={firstName}  onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name"  />
                </div>
                <div className='w-1/2 ml-2'>
                    <SimpleInput  label="Last name"  name="lastName"  type="text"  value={lastName}  onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name"  />
                </div>
            </div>

            <SimpleInput  label="Company"  name="company"  type="text"  value={company}  onChange={(e) => setCompany(e.target.value)} placeholder="Enter your company name" />
            <SimpleInput label="Address" name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address"/>
            <SimpleInput label="Apartment, suite, etc." name="apartment" type="text" value={apartment} onChange={(e) => setApartment(e.target.value)} placeholder="Enter apartment or suite" />

            <div className='sm:flex items-center'>
                <div className='sm:w-1/3'>
                    <SimpleInput label="City" name="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" />
                </div>
                <div className='sm:w-1/3 sm:mx-4 mt-6'>
                    <Select name="state" label="State/territory" option={stateOptions} value={stateValue} onChange={(e) => setStateValue(e.target.value)} />
                </div>
                <div className='sm:w-1/3'>
                    <SimpleInput label="Postcode" name="postcode" type="number" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Enter your postcode" />
                </div>
            </div>

            <SimpleInput label="Phone" name="phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
        </form>
    );
};

export default Address;
