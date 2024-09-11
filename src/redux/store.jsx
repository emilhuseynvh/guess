import { configureStore } from "@reduxjs/toolkit";
import { guessApi } from "./api";
import updateSlice from "./updateSlice";
import dropdownSlice from "./dropdownSlice";

export const store = configureStore({
    reducer: {
        [guessApi.reducerPath]: guessApi.reducer,
        update: updateSlice,
        dropdown: dropdownSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(guessApi.middleware)
});