import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stringify } from "qs";

// decodeuri --- decodeuricomponent
export const axiosLoginGoogle = createAsyncThunk(
  "loginGoogle",
  async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const url = `http://127.0.0.1:8000/user_system/auth/o/google-oauth2/`;

    const params = new URLSearchParams();
    params.append("state", data.state);
    params.append("code", data.code);

    try {
      const response = await axios.post(url, stringify(params), config);
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
        state.status = "rejected"
        state.info = action.payload.data
      } else {
        state.status = "fulfilled"
        state.info = action.payload.data
      }
    });
  },
});

export default loginGoogleSlice.reducer;
