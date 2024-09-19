import React from 'react'
import AccardionItem from './AccardionItem';

const filter = [
    {
        title: 'Color',
        element: ['green', 'white', 'black', 'red']
    },
    {
        title: 'Brands',
        element: ['AMIRI', 'Balenciaga', 'Moncler', 'Givenchy']
    },
    {
        title: 'Discount',
        element: ['Discount', 'without discount']
    },
    {
        title: 'Size',
        element: ['XS', 'S', 'M', 'L', 'Xl', 'XXlL']
    },
    {
        title: 'Price',
        element: [null]
    }
]

const FilterMenu = () => {

    return (
        <div className='pr-4'>
            {filter.map((item, i) => <div key={i}><AccardionItem i={i} key={i} item={item} /></div>)}
        </div>
    )
}

export default FilterMenu