import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // useLocation və useNavigate hook-larını əlavə et
import BreadCrumbs from '../../Components/MainPage/BreadCrumbs';
import FilterMenu from '../../Components/MainPage/Collection/FilterMenu';
import Top from '../../Components/MainPage/Collection/Top';
import Card from '../../Components/MainPage/Collection/Card';
import TopMobile from '../../Components/MainPage/Collection/TopMobile';
import { useGetAllProductQuery, useSearchProductsQuery } from '../../redux/api';
import Pagination from '../../Components/MainPage/Collection/Pagination';
import { useDispatch } from 'react-redux';
import { setData } from '../../redux/productSlice';
import Loader from '../../Components/MainPage/Loader';

const Collection = () => {
  const localGrid = localStorage.getItem('grid');
  const [grid, setGrid] = useState(localGrid ? Number(localGrid) : 4);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useState(null);

  useEffect(() => {
    const handlePopState = (event) => {
      if (window.location.pathname === '/products/all') {
        navigate('/');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const fullQuery = searchParams.toString();
    setParams(fullQuery);
  }, [location]);

  const { data } = useSearchProductsQuery(params);
  const { data: allProducts } = useGetAllProductQuery();

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
  }, [data, dispatch]);

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
            <Loader />
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
        <Pagination data={data} allProducts={allProducts && allProducts} />
      </div>
    </div>
  );
};

export default Collection;

