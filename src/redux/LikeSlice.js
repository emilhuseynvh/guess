import { createSlice } from "@reduxjs/toolkit";
const likedItems = JSON.parse(localStorage.getItem('likedItems')) || []

const initialState = {
    like: likedItems.length
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