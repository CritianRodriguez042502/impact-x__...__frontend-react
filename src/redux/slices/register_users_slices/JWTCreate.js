import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js"

export const axiosJWTCreate = createAsyncThunk("JWTCreate", async (data) => {
  const url = `${config.env.base_url_server}/user_system/auth/jwt/create/`;
  const response = await axios.post(url, data);
  return response.data;
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const JWTCreateSlice = createSlice({
  name: "signinUser",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosJWTCreate.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosJWTCreate.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload.refresh;
    });
    builder.addCase(axiosJWTCreate.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default JWTCreateSlice.reducer;
