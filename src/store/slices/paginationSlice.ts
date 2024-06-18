import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemsShowed: 5
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setItemsShowed: (state, action) => {
            state.itemsShowed = action.payload
        },
    },
});

export const { setItemsShowed } = paginationSlice.actions;
export default paginationSlice.reducer;