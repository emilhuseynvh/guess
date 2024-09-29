import React from 'react'

const Info = ({ item }) => {
    const { name, location, phone, mail } = item
    return (
        <div className='mb-4 p-4  border-b border-[#C4C4C4]'>
            <p className='text-sm font-black'>{name}</p>
            <div className='flex gap-1 items-center my-3 cursor-pointer'>
                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52L417 819q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"></path></svg>
                <p className='text-xs font-medium'>{location}</p>
            </div>
            <div className='lg:flex justify-between'>
                <div className='flex lg:mb-0 mb-3 items-center gap-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1792 1792"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T1151 1520t-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5T344 904q-48-77-83-175-3-9-18-49t-20.5-55.5T208 577t-12.5-57.5T192 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path></svg>
                    <p className='text-xs font-medium'>{phone}</p>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1792 1792"><path d="M1792 710v794q0 66-47 113t-113 47H160q-66 0-113-47T0 1504V710q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38T639 1015q-91-64-262-182.5T172 690q-62-42-117-115.5T0 438q0-78 41.5-130T160 256h1472q65 0 112.5 47t47.5 113z"></path></svg>
                    <p className='text-xs font-medium'>{mail}</p>
                </div>
            </div>
        </div>
    )
}

export default Info