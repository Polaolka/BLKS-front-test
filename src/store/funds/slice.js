import { createSlice } from '@reduxjs/toolkit'
import { fetchFunds } from './operations';

const initialState = {
    funds: [],
    loading: false,
    error: null,
    count: 0,
    totalPages: 0,
    currentPage: 1,
}

export const fundsSlice = createSlice({
    name: 'funds',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchFunds.fulfilled, (state, { payload }) => {
                state.funds = payload.data;
                state.loading = false;
                state.totalPages = Math.ceil(payload.count / 8);
                state.count = payload.count
            })
            .addCase(fetchFunds.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFunds.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
    },
})

export default fundsSlice.reducer