// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: { email: string; username?: string } | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    requestLogin: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<{ email: string; username: string }>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    requestSignup: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state, action: PayloadAction<{ email: string; username: string }>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    signupFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { requestLogin, loginSuccess, loginFailure, requestSignup, signupSuccess, signupFailure } = authSlice.actions;

export default authSlice.reducer;
