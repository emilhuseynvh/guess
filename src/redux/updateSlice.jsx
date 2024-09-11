import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
    name: "update",
    initialState: {
        flag: null
    },
    reducers: {
        setFlag(state, action) {
            state.flag = action.payload;
        }
    }
});

export const { setFlag } = updateSlice.actions;
export default updateSlice.reducer;

