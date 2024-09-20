import React, { useEffect, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import CheckBox from '../Checkout/CheckBox';
import InputSlider from './InputSlider';
import { useNavigate } from 'react-router-dom';

const AccardionItem = ({ item, i }) => {
    const navigate = useNavigate()


    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [brand, setBrand] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
    
        if (size.length > 0) {
            queryParams.set('size', size.join(','));
        }
    
        if (color.length > 0) {
            queryParams.set('color', color.join(','));
        }
    
        if (brand) {
            queryParams.set('brand', brand);
        }
    
        navigate({
            pathname: '/products/all',
            search: `?${queryParams.toString()}`,
        });
    }, [size, color, brand]);
    


    const { title, element } = item;

    const [checkParent, setCheckParent] = useState(false);
    const [accardion, setAccardion] = useState(false);

    const toggleFunc = (list) => {
        if (title === 'Brand') {
            if (brand === list) {
                setBrand('');
            } else {
                setBrand(list);
            }
        } else if (title === 'Color') {
            if (color.includes(list)) {
                const newColor = color.filter(item => item !== list);
                setColor(newColor);
            } else {
                setColor([...color, list]);
            }
        } else if (title === 'Size') {
            if (size.includes(list)) {
                const newSize = size.filter(item => item !== list);
                setSize(newSize);
            } else {
                setSize([...size, list]);
            }
        }
    };
    

    const alwaysRenderCheckBox = () => {
        if (i !== 1 && title !== 'Price') {
            return (
                <CheckBox checkParent={checkParent} setCheckParent={setCheckParent} title={title} />
            );
        }
        return null;
    };

    return (
        <div className='filter border-b-[1px] border-b-[#979797] py-4 pr-1 overflow-hidden duration-300'>
            <div onClick={() => setAccardion(!accardion)} className='flex justify-between cursor-pointer'>
                <h3 className='text-base font-normal block leading-[1.5] pb-2'>{title}</h3>
                <IoChevronDown className={`${accardion ? '-rotate-180' : 'rotate-0'} duration-300`} />
            </div>
            <ul style={{ maxHeight: accardion ? '500px' : '0', transition: 'max-height 0.5s ease' }} className="pl-3 text-xs font-medium overflow-hidden">
                {element?.map((list, index) => (
                    <React.Fragment key={index}>
                        <div className={`${title === 'Price' ? 'hidden' : 'flex'} my-2`} onClick={() => toggleFunc(list)}>
                            {alwaysRenderCheckBox()}
                            {i === 1 && (
                                <div style={{ background: `${list}`, borderColor: `${list === 'WHITE' ? 'black' : list}` }} className="border border-black w-5 h-5 rounded-[50%]"></div>
                            )}
                            <li className='cursor-pointer pb-1 ml-2 select-none'>{list}</li>
                        </div>
                    </React.Fragment>
                ))}
                {title === 'Price' && (
                    <div className="mr-5">
                        <InputSlider />
                    </div>
                )}
            </ul>
        </div>
    );
};

export default AccardionItem;