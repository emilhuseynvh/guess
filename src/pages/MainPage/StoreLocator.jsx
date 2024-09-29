import React from 'react'
import Info from '../../Components/MainPage/Locator/Info'
import Map from '../../Components/MainPage/Locator/Map'
import { Helmet } from 'react-helmet-async'

const store = [
    {
        name: 'Birkenhead Point Outlet',
        location: '42/19 Roseby Street, Drummoyne NSW, Australia',
        phone: '+61 2 9188 9165',
        mail: 'customercare@guess.com.au',
    },
    {
        name: 'Carousel',
        location: 'Melbourne Central, Swanston Street, Melbourne VIC, Australia',
        phone: '(03) 9989 4498',
        mail: 'customercare@guess.com.au',
    },
    {
        name: 'Crown Melbourne',
        location: 'Crown Casino, Shop T111, Level 1, Crown Casino, Southbank VIC 3006',
        phone: '+61 3 9686 4101',
        mail: 'customercare@guess.com.au',
    },
    {
        name: 'DFO Brisbane',
        location: 'Shop G071 Skygate, 18th Avenue, Brisbane Airport QLD 4008',
        phone: '+61 7 3114 1059',
        mail: 'customercare@guess.com.au',
    },
    {
        name: 'Birkenhead Point Outlet',
        location: '42/19 Roseby Street, Drummoyne NSW, Australia',
        phone: '+61 2 9188 9165',
        mail: 'customercare@guess.com.au',
    },
    {
        name: 'Carousel',
        location: 'Melbourne Central, Swanston Street, Melbourne VIC, Australia',
        phone: '(03) 9989 4498',
        mail: 'customercare@guess.com.au',
    },
    {
        name: 'Crown Melbourne',
        location: 'Crown Casino, Shop T111, Level 1, Crown Casino, Southbank VIC 3006',
        phone: '+61 3 9686 4101',
        mail: 'customercare@guess.com.au',
    },
    {
        name: 'DFO Brisbane',
        location: 'Shop G071 Skygate, 18th Avenue, Brisbane Airport QLD 4008',
        phone: '+61 7 3114 1059',
        mail: 'customercare@guess.com.au',
    }

]

const StoreLocator = () => {
    return (
        <div className='w-full flex-col-reverse lg:flex-row flex  my-8'>
            <Helmet>
                <title> Guess | Store Locator</title>
            </Helmet>
            <div className='lg:w-1/3 py-5 px-4 h-[500px] scroll overflow-y-auto'>
                {store.map((item, i) => <Info key={i} item={item} />)}
            </div>
            <div className='lg:w-2/3'>
                <Map />
            </div>
        </div>
    )
}

export default StoreLocator