import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  currentUser,
  updateUser
} from './operations';

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
  },
  error: null,
  isRefreshing: false,
  isLoggedIn: false,
  authError: null,
  updateUserDataLoading: false,
  toggleFavoriteLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = {
          id: null,
          email: null,
          name: null,
        };
        state.isLoggedIn = false;
      })
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, state => {
        state.user = {
          id: null,
          email: null,
          name: null,
        };
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export const userReducer = userSlice.reducer;