import React, { useState } from 'react'

const Checkbox = () => {

    const [checkbox, setCheckbox] = useState(false)

    return (
        <span onClick={() => setCheckbox(!checkbox)} className='border rounded-sm p-[3px] mr-2 flex justify-center items-center border-black w-[24px] h-[24px] cursor-pointer'>
            <span className={`${checkbox ? 'block' : 'hidden'} bg-black w-full h-full`}></span>
        </span>
    )
}

export default Checkbox