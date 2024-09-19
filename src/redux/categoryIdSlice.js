import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subcategoryId: null,
};

const subcategorySlice = createSlice({
    name: 'subcategory',
    initialState,
    reducers: {
        setSubcategoryId: (state, action) => {
            state.subcategoryId = action.payload;
        },
    },
});

export const { setSubcategoryId, resetSubcategoryId } = subcategorySlice.actions;

export default subcategorySlice.reducer;