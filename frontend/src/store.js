// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

// Configure the Redux store by combining reducers. Here, we're only using authReducer.
export const store = configureStore({
  reducer: {
    auth: authReducer, // This tells Redux that our auth state is managed by the authReducer.
  },
});
