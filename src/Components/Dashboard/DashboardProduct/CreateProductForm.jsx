import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUploadImgMutation, useGetAllCategoriesQuery, useGetAllBrandsQuery, useGetCategoryByIdQuery } from '../../../redux/api';
import DashboardInput from '../DashboardInput';
import DashboardSelect from './DashboardSelect';
import DashboardButton from '../DashboardButton';
import toast from 'react-hot-toast';
import { eSize, eColor } from '../../../enum/enumData';
import CreateFileUpload from './CreateFIleUpload';

const CreateProductForm = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const [sendFormData] = useUploadImgMutation();
    const [id, setId] = useState()

    const  { data: categoryByID } = useGetCategoryByIdQuery(id && id);
    const { data: allCategories } = useGetAllCategoriesQuery();
    const { data: allBrands } = useGetAllBrandsQuery();

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDiscount, setProductDiscount] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productSubCategory, setProductSubCategory] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productSize, setProductSize] = useState([]);
    const [productColor, setProductColor] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    useEffect(() => {
        productCategory && setId(productCategory);
    }, [productCategory, id]);

    const handleSelectChange = (event, setFunction) => {
        const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
        setFunction(selectedValues);
    };

    const handleChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            const response = await sendFormData(formData).unwrap();
            if (response.file && response.file.location) {
                setUploadedFiles(prevFiles => [...prevFiles, response.file.location]);
                toast.success('Image uploaded successfully');
            } else {
                toast.error('Error uploading image');
            }
        }
    };

    const handleRemove = (fileUrl) => {
        setUploadedFiles(prevFiles => prevFiles.filter(file => file !== fileUrl));
    };

    const handleSubmit = () => {
        const productDetails = {
            name: productName,
            price: productPrice,
            discount: productDiscount,
            description: productDesc,
            categoryId: productCategory,
            subcategoryId: productSubCategory,
            brandsId: productBrand,
            size: productSize,
            colors: productColor,
            images: uploadedFiles,
        };

        onSubmit(productDetails);
    };

    const formInput = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Enter the name of the product',
            label: 'Name of product',
            width: 'full',
            value: productName,
            onchange: (e) => setProductName(e.target.value),
        },
        {
            name: 'price',
            type: 'number',
            placeholder: 'Enter the price of product',
            label: 'Price of product',
            onchange: (e) => setProductPrice(e.target.value),
            width: '1/2',
            value: productPrice
        },
        {
            name: 'discount',
            type: 'number',
            placeholder: 'Enter the discount of product',
            label: 'Discount of product',
            value: productDiscount,
            onchange: (e) => setProductDiscount(e.target.value),
            width: '1/2'
        }
    ];

    const formSelect = [
        {
            list: allCategories,
            width: '1/3',
            value: productCategory,
            onchange: (e) => setProductCategory(e.target.value),
        },
        {
            disable: !categoryByID,
            list: categoryByID,
            width: '1/3',
            value: productSubCategory,
            onchange: (e) => setProductSubCategory(e.target.value),
            sub: true
        },
        {
            list: allBrands,
            width: '1/3',
            value: productBrand,
            onchange: (e) => setProductBrand(e.target.value)
        },
        {
            list: eSize,
            width: '1/2',
            value: productSize,
            onchange: (e) => handleSelectChange(e, setProductSize),
            multiple: true
        },
        {
            list: eColor,
            width: '1/2',
            value: productColor,
            onchange: (e) => handleSelectChange(e, setProductColor),
            multiple: true
        },
    ];

    return (
        <div className='scroll flex flex-wrap justify-between overflow-y-auto h-[400px]'>
            {formInput.map((item, i) => {
                const { type, name, label, placeholder, onchange, width, value } = item;
                return (
                    <div key={i} className={`w-${width} mt-6 px-4`}>
                        <DashboardInput type={type} placeholder={placeholder} value={value} name={name} label={label} onChange={onchange} />
                    </div>
                );
            })}
            <div className='px-4 w-full mt-4'>
                <label>Description</label>
                <textarea onChange={(e) => setProductDesc(e.target.value)} value={productDesc} className='focus:border-dashboardBtn mt-1 w-full outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-2.5 px-[.8rem] rounded' cols={50} rows={8}></textarea>
            </div>
            {formSelect.map((item, i) => <DashboardSelect key={i} item={item} />)}
            <div className='px-4 mt-6 w-full'>
                <CreateFileUpload files={uploadedFiles} onRemove={handleRemove} onchange={handleChange} />
            </div>
            <div onClick={() => handleSubmit()} className='mt-4'>
                <DashboardButton name='Create Product' />
            </div>
        </div>
    );
};

export default CreateProductForm;
