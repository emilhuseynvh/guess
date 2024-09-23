import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // useLocation hook
import BreadCrumbs from '../../Components/MainPage/BreadCrumbs';
import FilterMenu from '../../Components/MainPage/Collection/FilterMenu';
import Top from '../../Components/MainPage/Collection/Top';
import Card from '../../Components/MainPage/Collection/Card';
import TopMobile from '../../Components/MainPage/Collection/TopMobile';
import { useGetAllProductQuery, useSearchProductsQuery } from '../../redux/api';
import Pagination from '../../Components/MainPage/Collection/Pagination';

const Collection = () => {
  const location = useLocation();
  const localGrid = localStorage.getItem('grid');
  const [grid, setGrid] = useState(localGrid ? Number(localGrid) : 4);
  const [params, setParams] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const fullQuery = searchParams.toString();
    setParams(fullQuery);
  }, [location]);

  const { data, error: searchError } = useSearchProductsQuery(params);
  const { data: allProducts } = useGetAllProductQuery()

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
            <p>Yüklənir...</p>
          ) : (
            data?.data?.map((item, i) => (
              <div key={i}>
                <Card item={item} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className='flex justify-center mt-12 mb-4'>
        <Pagination allProducts={allProducts && allProducts} />
      </div>
    </div>
  );
};

export default Collection;
