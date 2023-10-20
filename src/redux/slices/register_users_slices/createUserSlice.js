import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCreateUser = createAsyncThunk("create_user", async (data) => {
  const url = `${"https://server-agency-1203.onrender.com"}/user_system/auth/users/`;
  try {
    const response = await axios.post(url, data);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data,
    };
  }
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosCreateUser.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosCreateUser.fulfilled, function (state, action) {
      if (action.payload.status === 400) {
        state.status = "rejected";
        state.info = action.payload.data;
      } else {
        state.status = "fulfilled";
        state.info = action.payload.data;
      }
    });
  },
});

export default createUserSlice.reducer;
