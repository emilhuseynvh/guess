import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = productsSlice.actions;
export default productsSlice.reducer;
