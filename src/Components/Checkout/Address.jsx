import React from 'react'
import Select from './Select'
import Input from './Input'

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

const Address = () => {
    return (
        <>
            <Select option={['Australia', 'New Zealand', 'Baku']} label={'Country/Region'} />
            <div className='flex'>
                <div className='w-1/2 mr-2'>
                    <Input label={'First name'} type={'text'} />
                </div>
                <div className='w-1/2 ml-2'>
                    <Input label={'Last name'} type={'text'} />
                </div>
            </div>
            <Input type={'text'} label={'Company (optional)'} />
            <Input type={'text'} label={'Adress'} />
            <Input type={'text'} label={'Apartment, suite, etc. (optional)'} />
            <div className='flex'>
                <div className='w-1/3'>
                    <Input type={'text'} label={'City'} />
                </div>
                <div className='w-1/3 mx-4'>
                    <Select label={'State/territory'} option={state} />
                </div>
                <div className='w-1/3'>
                    <Input type={'number'} label={'Postcode'} />
                </div>
            </div>
            <Input type={'number'} label={'Phone'} />
        </>
    )
}

export default Address