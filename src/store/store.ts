import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './slice';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
  }
})
