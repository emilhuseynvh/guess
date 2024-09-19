import { createSlice } from "@reduxjs/toolkit";

export const subCategory = createSlice({
    name: "subcategory",
    initialState: {
        subCategory: null
    },
    reducers: {
        setSubCategory(state, action) {
            state.subCategory = action.payload;
        }
    }
});

export const { setSubCategory } = subCategory.actions;
export default subCategory.reducer;