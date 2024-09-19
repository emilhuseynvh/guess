import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../../Components/MainPage/BreadCrumbs';
import FilterMenu from '../../Components/MainPage/Collection/FilterMenu';
import Top from '../../Components/MainPage/Collection/Top';
import Card from '../../Components/MainPage/Collection/Card';
import TopMobile from '../../Components/MainPage/Collection/TopMobile';
import { useSelector } from 'react-redux';
import { useGetAllProductQuery, useGetProductBySubcategoryIdMutation, useSearchProductsQuery } from '../../redux/api';
import { selectChangedFilters } from '../../redux/productFilterSlice';

const Collection = () => {

  const localGrid = localStorage.getItem('grid');
  const [grid, setGrid] = useState(localGrid ? Number(localGrid) : 4);
  const [filters, setFilters] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([]);

  // const { productFilter } = useSelector((state) => state)
  // console.log(productFilter.subcategoryId);
  // const {data:allProduct, error} = useGetAllProductQuery()
  // console.log(allProduct, error);  

  // useEffect(() => {
  //   if (data) {
  //    const filteredProduct =  allProduct?.filter(item => item.id === productFilter.subcategoryId)
  //   }
  // }, []);
  const {data} = useGetAllProductQuery()
  console.log(data);
  

  useEffect(() => {
    localStorage.setItem('grid', grid);
  }, [grid]);

  return (
    <div className='w-[95%] mx-auto py-7'>
      <BreadCrumbs />
      <Top grid={grid} setGrid={setGrid} />
      <TopMobile />
      <div className='flex'>
        <div className='w-1/5 lg:block hidden'>
          <FilterMenu />
        </div>
        <div className={`lg:w-4/5 w-full gap-4 grid grid-cols-${grid}`}>
          {!data ? (
            <p>Loading...</p> // Placeholder while data is loading
          ) : (
            data.data?.map((item, i) => (
              <div key={i}>
                <Card item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Collection;

