import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardTable from '../../Components/Dashboard/DashboardProduct/DashboardProductTable'
import DashboardButton from '../../Components/Dashboard/DashboardButton'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateProduct } from '../../redux/createProductSlice'
import ProductModal from '../../Components/Dashboard/DashboardProduct/CreateProduct'
import { useGetAllProductQuery, useSearchProductByInputMutation } from '../../redux/api'
import CreateProduct from '../../Components/Dashboard/DashboardProduct/CreateProduct'
import UpdateProduct from '../../Components/Dashboard/DashboardProduct/UpdateProduct'
import BrandButton from '../../Components/Dashboard/DashboardButton'

const DashboardProduct = () => {
  const dispatch = useDispatch()
  const { productUpdate } = useSelector((state) => state.productUpdate);
  const [input, setInput] = useState('')



  const { data: allProducts, error } = useGetAllProductQuery()
  const [inputValue, { data: searchData, error: searchError }] = useSearchProductByInputMutation()
  console.log(searchData, searchError);

  useEffect(() => {
    input && inputValue(input)
  }, [input])


  console.log('salam');


  return (
    <div className='bg-dashboardPrimary w-[99vw] h-screen py-4 px-8 text-white'>
      <div className='flex justify-end'>
        <div onClick={() => dispatch(setCreateProduct())}>
          <BrandButton name='Add Product' />
        </div>
      </div>
      <div style={{ boxShadow: '0px 2px 1px -1px rgba(255, 255, 255, 0.05)' }} className='rounded-lg w-full px-8 bg-dashboardSecondary h-[572px] my-8'>
        <div className='h-[550px] overflow-y-auto scroll'>
          <div className='w-full pt-4 pb-2 pr-4 pl-4 flex justify-between'>
            <p className='text-base font-medium'>Added Products</p>
            <input onChange={(e) => setInput(e.target.value)} style={{ transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out' }} className='focus:border-dashboardBtn outline-none bg-transparent border border-dashboardBorder text-[.8rem] py-1 px-[.8rem] rounded' placeholder='Search' type="text" />
          </div>
          <table id='product-table' className='border border-dashboardBorder w-full mt-4'>
            <thead>
              <tr>
                <th>Product ID </th>
                <th>Product name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Discount</th>
                <th>Subcategory</th>
                <th>Actions</th>
              </tr>
            </thead>
            {searchData ? (
              searchData.length > 0 ? (
                searchData.map((item, i) => <DashboardTable key={i} item={item} />)
              ) : (
                <p>Not found</p>
              )
            ) : (
              allProducts?.data?.map((item, i) => <DashboardTable key={i} item={item} />)
            )}

          </table>
        </div>
      </div>
      <CreateProduct />
      {productUpdate != null && <UpdateProduct />}
    </div>
  )
}

export default DashboardProduct