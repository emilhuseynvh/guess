import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLimit, setPaginate } from '../../../redux/paginationSlice';
import { useSearchProductsQuery } from '../../../redux/api';

const Pagination = ({ allProducts }) => {
    const data = useSelector((state) => state.products.data);
    
    


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    const paginate = useSelector((state) => state.pagination.paginate);
    const limit = useSelector((state) => state.pagination.limit);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        paginate && queryParams.set('page', paginate);
        queryParams.set('limit', limit);

        navigate({
            pathname: '/products/all',
            search: `?${queryParams.toString()}`,
        });
        window.scrollTo(0, 0)
        window.history.pushState(null, '', '?' + queryParams.toString());
    }, [paginate, limit, navigate]);

    useEffect(() => {
        dispatch(setPaginate(1));
    }, [limit, dispatch]);


    return (
        <div className='flex items-center'>
            <div onClick={() => setOpen(!open)} className='flex item-center gap-2 mr-5 cursor-pointer relative'>
                <p className='underline text-[13px] font-light select-none'>View {limit}</p>
                <svg aria-hidden="true" focusable="false" role="presentation" className="size-3 mt-1 rotate-90" width="16" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.40039 0.571442L8.42896 7.60001C8.48363 7.65132 8.52719 7.71328 8.55698 7.78208C8.58676 7.85087 8.60213 7.92505 8.60213 8.00001C8.60213 8.07498 8.58676 8.14915 8.55698 8.21795C8.52719 8.28675 8.48363 8.34871 8.42896 8.40001L1.40039 15.4286" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className={`${open ? 'block' : 'hidden'} bg-white border absolute top-[20px] text-xs px-2 z-[49] py-1 w-20 left-0`}>
                    <p onClick={() => dispatch(setLimit(5))} className='my-1.5 hover:underline font-light'>View 5</p>
                    <p onClick={() => dispatch(setLimit(10))} className='my-1.5 hover:underline font-light'>View 10</p>
                    <p onClick={() => dispatch(setLimit(15))} className='my-1.5 hover:underline'>View 15</p>
                </div>
            </div>
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron icon--small icon--stroke-based h-[10px] w-[10px] rotate-180 cursor-pointer" width={16} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.40039 0.571442L8.42896 7.60001C8.48363 7.65132 8.52719 7.71328 8.55698 7.78208C8.58676 7.85087 8.60213 7.92505 8.60213 8.00001C8.60213 8.07498 8.58676 8.14915 8.55698 8.21795C8.52719 8.28675 8.48363 8.34871 8.42896 8.40001L1.40039 15.4286" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div className='mx-[6px] flex items-center'>
                <select value={data?.meta.currentPage} onChange={(e) => dispatch(setPaginate(Number(e.target.value)))} className='outline-none text-sm font-light mr-1'>
                    {Array.from({ length: data?.meta.totalPages }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <span className='text-sm font-light'>of {data?.meta.totalPages}</span>
            </div>
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron icon--small icon--stroke-based h-[10px] w-[10px] cursor-pointer" width={16} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.40039 0.571442L8.42896 7.60001C8.48363 7.65132 8.52719 7.71328 8.55698 7.78208C8.58676 7.85087 8.60213 7.92505 8.60213 8.00001C8.60213 8.07498 8.58676 8.14915 8.55698 8.21795C8.52719 8.28675 8.48363 8.34871 8.42896 8.40001L1.40039 15.4286" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </div>
    );
};

export default Pagination;
