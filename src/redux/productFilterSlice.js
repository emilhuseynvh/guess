import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
    page: 1,
    limit: 10,
    sortBy: 'price',
    sortOrder: 'asc',
    categoryId: null,
    subcategoryId: null,
    brandId: null,
    color: null,
    size: null,
    minPrice: 0,
    maxPrice: 10000,
    discount: false,
};

const productFilterSlice = createSlice({
    name: 'productFilter',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            const filters = action.payload;
            Object.keys(filters).forEach((key) => {
                state[key] = filters[key];
            });
        },
        resetFilters: (state) => {
            Object.assign(state, initialState);
        },
    },
});

// Yalnız dəyişmiş filtrləri qaytaracaq selector
export const selectChangedFilters = createSelector(
    (state) => state.productFilter,
    (productFilter) => {
        const changedFilters = {};
        Object.keys(productFilter).forEach((key) => {
            // Əgər dəyər `initialState`-dən fərqlidirsə, onu changedFilters-ə əlavə edirik
            if (productFilter[key] !== initialState[key]) {
                changedFilters[key] = productFilter[key];
            }
        });
        return changedFilters; // Yalnız fərqli olan dəyərlər qaytarılacaq
    }
);

export const { setFilters, resetFilters } = productFilterSlice.actions;

export default productFilterSlice.reducer;
