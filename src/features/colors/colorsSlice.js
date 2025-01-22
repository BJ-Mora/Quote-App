import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentColor: {
        color: '#3e424b'
    }
};

const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        setNewColor(state, action) {
            state.currentColor = action.payload;
        }
    }
});

export const { setNewColor } = colorsSlice.actions;

export const selectCurrentColor = (state) => state.colors.currentColor;

export default colorsSlice.reducer;