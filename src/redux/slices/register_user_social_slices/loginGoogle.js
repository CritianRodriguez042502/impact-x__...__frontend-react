import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js"

export const axiosLoginGoogle = createAsyncThunk(
  "loginGoogle",
  async (data) => {
    const config_http = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const url = `${config.env.base_url_server}/user_system/auth/o/google-oauth2/`;

    
    if (data.state && data.code) {
      const data = new URLSearchParams();
      data.append("state", data.state);
      data.append("code", data.code);

      try {
        const response = await axios.post(url, data.toString(), config_http);
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
    }
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

export default loginGoogleSlice.reducer;
