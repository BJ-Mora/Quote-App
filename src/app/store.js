import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from '../features/quotes/quotesSlice';
import colorsReducer from '../features/colors/colorsSlice';

const store = configureStore({
    reducer: {
        quotes: quotesReducer,
        colors: colorsReducer
    }
});

export default store;