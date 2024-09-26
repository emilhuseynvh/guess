import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: 0
}

const LikeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        setLike: (state, action) => {
            state.like = action.payload
        }
    }
})
export const { setLike } = LikeSlice.actions
export default LikeSlice.reducer