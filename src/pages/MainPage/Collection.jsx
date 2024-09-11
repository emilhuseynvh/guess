import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../../Components/MainPage/BreadCrumbs';
import FilterMenu from '../../Components/MainPage/Collection.jsx/FilterMenu';
import Top from '../../Components/MainPage/Collection.jsx/Top';
import Card from '../../Components/MainPage/Collection.jsx/Card';
import TopMobile from '../../Components/MainPage/Collection.jsx/TopMobile';

const Collection = () => {

  const localGrid = localStorage.getItem('grid');
  const [grid, setGrid] = useState(localGrid ? Number(localGrid) : 4);


  useEffect(() => {
    localStorage.setItem('grid', grid);
  }, [grid]);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];

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
          {arr.map((_, i) => (
            <div key={i}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
