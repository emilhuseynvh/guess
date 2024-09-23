import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    paginate: 1,
    limit: 10,
  },
  reducers: {
    setPaginate: (state, action) => {
      state.paginate = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setPaginate, setLimit } = paginationSlice.actions;

export default paginationSlice.reducer;
