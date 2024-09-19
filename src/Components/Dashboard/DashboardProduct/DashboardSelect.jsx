import React, { useState } from 'react';

const DashboardSelect = ({ item }) => {
    const [isFocused, setIsFocused] = useState(false);
    const list = Array.isArray(item) ? item : item.sub ? item.list?.Subcategory : item.list;

    return (
        <div className={`px-4 w-${item.width || 'full'} mt-4`}>
            <select
                value={item.value}
                multiple={item.multiple}
                onChange={item.onchange}
                disabled={item.disable}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    transition: 'background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                }}
                className={`scroll select mt-1 w-full border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded ${isFocused ? 'bg-[#f0f0f0]' : 'bg-transparent'}`}
            >
                <option></option>
                {list?.length > 1 ? (
                    list.map((subItem, i) => (
                        <option  style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn mt-1 w-full outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded' 
                            key={i}
                            value={subItem.id || subItem}
                        >
                            {subItem.name || subItem}
                        </option>
                    ))
                ) : (
                    <option
                        value={list?.[0]?.id || list?.[0]}
                    >
                        {list?.[0]?.name || list?.[0]}
                    </option>
                )}
            </select>
        </div>
    );
};

export default DashboardSelect;
