import { createSlice } from '@reduxjs/toolkit';

export const openSlice = createSlice({
    name: 'open', // Ensure the name property is defined
    initialState: {
        open: false
    },
    reducers: {
        setOpen(state) {
            state.open = !state.open;
        }
    }
});

export const { setOpen } = openSlice.actions;
export default openSlice.reducer;