import React from 'react'

const Shippping = () => {
    return (

        <div className="mb-6 w-full">
            <div className="flex justify-between mb-1 text-gray-500">
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <p className="text-black"><span className='text-sm font-semibold'>AUD</span> $350.95</p>
            </div>
            <div className="text-sm text-gray-500 mb-4">Including $31.90 in taxes</div>
            <div className="flex items-center text-lg font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" focusable="false" aria-hidden="true" className="stroke-black fill-none w-[19px] h-[19px]"><path stroke-linecap="round" stroke-linejoin="round" d="m10.802 15.686 5.367-5.368a.15.15 0 0 0 .046-.109V4.144m-2.998-.95h-5.67a.16.16 0 0 0-.11.046L1.779 8.897a.154.154 0 0 0 0 .219l5.594 5.593c.06.06.158.06.218 0l5.658-5.657a.15.15 0 0 0 .045-.11v-5.67a.077.077 0 0 0-.077-.077Zm-3.06 3.749a.643.643 0 1 1-1.286 0 .643.643 0 0 1 1.286 0m-.648-.005h.01v.01h-.01z"></path></svg>
                <span className="uppercase ml-2">Total Savings $39.00</span>
            </div>
        </div>
    )
}

export default Shippping