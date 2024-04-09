import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://requesty.com.ua/api/v1";

export const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = "";
};

const clearToken = () => {
  instance.defaults.headers.common.authorization = null;
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {

    const storedAccessToken = localStorage.getItem('accessToken')
    if (error.response.status === 401) {
      const storedRefreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post("/users/refresh", {
          refreshToken: storedRefreshToken,
        });

        setToken(data.data.accessToken);

        localStorage.setItem('accessToken', data.data.accessToken);
        localStorage.setItem('refreshToken', data.data.refreshToken);

        const updatedConfig = { ...error.config };

        updatedConfig.headers.Authorization = `Bearer ${data.data.accessToken}`;

        if (error.config.url !== "/users/current-user") {
          return instance(error.config);
        }
        return instance(updatedConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    if (error.response.status === 403 && storedAccessToken) {
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
      // window.location.replace(`${process.env.REACT_APP_BASEURL}/signin`);
    }
    return Promise.reject(error);
  }
);

export default instance;

export const currentUser = createAsyncThunk(
  "user/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      setToken(accessToken);
      if (!accessToken) {
        return rejectWithValue("Unable to fetch user");
      }
      const result = await instance.get("/users/current-user");
      return result.data.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/update",
  async (body, { rejectWithValue, getState }) => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      setToken(accessToken);
      if (!accessToken) {
        return rejectWithValue("Unable to fetch user");
      }
      const result = await instance.patch("/users/update-user", body);
      return result.data.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
export const updateVolunteer = createAsyncThunk(
  "user/updateVolunteer",
  async (body, { rejectWithValue, getState }) => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      setToken(accessToken);
      if (!accessToken) {
        return rejectWithValue("Unable to fetch user");
      }
      const result = await instance.patch("/volunteers/update-volunteer", body);
      return result.data.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    document.cookie = `accessToken=""; path=/;`;
    document.cookie = `refreshToken=""; path=/;`;
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
