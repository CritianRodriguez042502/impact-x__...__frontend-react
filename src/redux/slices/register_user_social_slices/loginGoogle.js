import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {stringify} from "qs"

export const axiosLoginGoogle = createAsyncThunk(
  "loginGoogle",
  async (state,code) => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    // decodeuri --- decodeuricomponent
    const params = new URLSearchParams()
    params.append("state", state)
    params.append("code", code)
    const url = `http://127.0.0.1:8000/user_system/auth/o/google-oauth2/`;
    const response = await axios.post(url,stringify(params), config);
    return response.data;
  }
);

const initialState = {
  info: null,
  status: null,
  error: null,
};

const loginGoogleSlice = createSlice({
  name: "loginGoogle",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosLoginGoogle.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosLoginGoogle.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosLoginGoogle.rejected, function (state, action) {
      state.status = "rejected";
      state.error = {
        name: `${action.error.name}`,
        message: `${action.error.message}`,
        code: `${action.error.code}`,
        stack : `${action.error.stack}`
      };
    });
  },
});

export default loginGoogleSlice.reducer;
