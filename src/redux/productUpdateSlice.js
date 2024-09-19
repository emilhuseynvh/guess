import { createSlice } from "@reduxjs/toolkit";

export const productUpdateSlice = createSlice({
    name: "productUpdate",
    initialState: {
        productUpdate: false
    },
    reducers: {
        setProductUpdate(state, action) {
            state.productUpdate = action.payload;
        }
    }
});

export const { setProductUpdate } = productUpdateSlice.actions;
export default productUpdateSlice.reducer;
