import React from 'react'
import Checkbox from '../Checkbox'

const CollectionCheckbox = ({ item }) => {

    const { size, quant } = item
    

    return (
        <div className='flex justify-between my-5 select-none'>
            <div className='flex '>
                <Checkbox />
                <p>{size}</p>
            </div>
            <p>({quant})</p>
        </div>
    )
}

export default CollectionCheckbox