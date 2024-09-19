import React from 'react';
import { FaListAlt } from 'react-icons/fa';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setSubCategory } from '../../redux/subCategorySlice';

const DashboardTable = ({ item, onEdit, onDelete, category }) => {
  const dispatch = useDispatch()

  const { id, name, slug } = item;

  return (
    <div className='flex justify-between px-4 py-4 border-b border-dashboardBorder'>
      <p>{id}</p>
      <p>{name}</p>
      <p>{slug}</p>
      <div className='flex space-x-4'>
        {category && <FaListAlt onClick={() => dispatch(setSubCategory(id))} className='text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer' />}
        <FiEdit onClick={() => onEdit(item)} className='text-dashboardBtn hover:text-dashboardPrimary transition-colors duration-200 cursor-pointer' />
        <FiTrash onClick={() => onDelete(item.id)} className='text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer' />
      </div>
    </div>
  );
};

export default DashboardTable;
