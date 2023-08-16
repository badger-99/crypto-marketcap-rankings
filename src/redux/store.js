import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slices/cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
export default store;
