import { configureStore, createSlice } from "@reduxjs/toolkit";
import { guessApi } from "./api";
import updateSlice from "./updateSlice";
import subCategorySlice from "./subCategorySlice";
import createProductSlice from "./createProductSlice";
import productUpdateSlice from "./productUpdateSlice";
import openReducer from "./open";
import productFilterSlice from "./productFilterSlice";
import subCategoryFilterSlice from "./subCategoryFilterSlice";
import { productDetailsSlice } from "./ProductDetailsSlice";

export const store = configureStore({
    reducer: {
        [guessApi.reducerPath]: guessApi.reducer,
        update: updateSlice,
        subCategory: subCategorySlice,
        createProduct: createProductSlice,
        productUpdate: productUpdateSlice,
        open: openReducer,
        productFilter: productFilterSlice,
        subCategoryFilter: subCategoryFilterSlice,
        subcategory: subCategorySlice,
        productDetails: productDetailsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(guessApi.middleware)
});