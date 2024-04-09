import instance from '../user/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchFunds = createAsyncThunk(
    'funds/fetchAll',
    async (page, thunkApi) => {
        try {
            const response = await instance.get(`/funds/active?page=${page}&limit=8`);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const addFund = async (body) => {
    try {

        const authToken = localStorage.getItem('accessToken')
        const result = await instance.post(`/admin/add-fund`, body, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        return result.data;
    } catch (error) {
        console.error(error.response.data.message);
        throw error;
    }
};