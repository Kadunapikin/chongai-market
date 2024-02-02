// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for authentication.
const initialState = {
  user: null, // The user object will be null when not logged in.
  isLoading: false, // Represents if we're waiting for something (like an API call).
  isError: false, // Represents if an error occurred.
  isSuccess: false, // Represents if the action (like login) was successful.
  message: '', // A message for errors or other info.
};

// Create a slice for authentication with reducers to handle actions.
export const authSlice = createSlice({
  name: 'auth', // The name of this slice of state.
  initialState, // The initial state this reducer will hold.
  reducers: {
    // Actions are functions that create action objects.
    reset: (state) => initialState, // Resets to initial state.
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload; // Payload is the user data.
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload; // Payload is the error message.
    },
  },
});

// Export the actions to use them in components.
export const { reset, loginStart, loginSuccess, loginFail } = authSlice.actions;

// Export the reducer as default export.
export default authSlice.reducer;
