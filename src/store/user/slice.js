import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  currentUser,
  updateUser,
  updateVolunteer
} from './operations';

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    avatarIMG: null,
    role: null,
    volunteerInfo: {
      specialization: [],
      phone: "",
      telegram: "",
      fbUrl: ""
    }
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
          avatarIMG: null,
          role: null,
          volunteerInfo: {
            specialization: [],
            phone: "",
            telegram: "",
            fbUrl: ""
          }
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
          avatarIMG: null,
          role: null,
          volunteerInfo: {
            specialization: [],
            phone: "",
            telegram: "",
            fbUrl: ""
          }
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
      .addCase(updateVolunteer.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateVolunteer.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateVolunteer.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;