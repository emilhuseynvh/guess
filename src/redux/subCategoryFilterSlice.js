import { createSlice } from "@reduxjs/toolkit";

export const subCategoryFilterSlice = createSlice({
    name: "subCategoryFilter",
    initialState: null,
    reducers: {
        setSubCategoryFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSubCategoryFilter } = subCategoryFilterSlice.actions;

export default subCategoryFilterSlice.reducer;
