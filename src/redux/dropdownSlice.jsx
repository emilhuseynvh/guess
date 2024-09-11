import { createSlice } from "@reduxjs/toolkit";

export const dropdownSlice = createSlice({
    name: "dropdown",
    initialState: {
        show: null
    },
    reducers: {
        setShow(state, action) {
            state.show = action.payload;
        }
    }
});

export const { setShow } = dropdownSlice.actions;
export default dropdownSlice.reducer;
