import { createSlice } from "@reduxjs/toolkit";

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState: {
        productDetails: null
    },
    reducers: {
        setProductDetails(state, action) {
            state.productDetails = action.payload;
        }
    }
})

export const { setProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;

