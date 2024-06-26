import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  currentUser,
} from './operations';

const initialState = {
  user: {
    _id: null,
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
          _id: null,
          email: null,
          name: null,
        };
        state.isLoggedIn = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoggedIn = false;
        state.user = {
          _id: null,
          email: null,
          name: null,
        };
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
  },
});

export const userReducer = userSlice.reducer;