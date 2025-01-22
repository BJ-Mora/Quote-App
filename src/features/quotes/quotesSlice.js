import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentQuote: {
        id: "text",
        text: "Go ahead, click it.",
        author: "Dev"
    }
};

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        setNewQuote(state, action) {
            state.currentQuote = action.payload;
        }
    }
});

export const { setNewQuote } = quotesSlice.actions;

export const selectCurrentQuote = (state) => state.quotes.currentQuote;

export default quotesSlice.reducer;
