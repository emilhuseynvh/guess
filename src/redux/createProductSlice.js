import { createSlice } from "@reduxjs/toolkit";

export const createProduct = createSlice({
    name: "createProduct",
    initialState: {
        createProduct: false
    },
    reducers: {
        setCreateProduct(state) {
            state.createProduct = !state.createProduct;
        }
    }
});

export const { setCreateProduct } = createProduct.actions;
export default createProduct.reducer;