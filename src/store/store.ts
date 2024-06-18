import { configureStore } from '@reduxjs/toolkit';
import flightsSlice from './slices/flightsSlice';
import filtersSlice from './slices/filtersSlice';
import paginationSlice from './slices/paginationSlice';

const store = configureStore({
  reducer: {
    filters: filtersSlice,
    flights: flightsSlice,
    pagination: paginationSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>