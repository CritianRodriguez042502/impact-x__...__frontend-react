import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosJWTRefresh = createAsyncThunk("JWTRefresh", async (data) => {
  const url = `${"http://127.0.0.1:8000"}/user_system/auth/jwt/refresh/`;
  const response = await axios.post(url, data);
  return response.data;
});

const initialState = {
  status: null,
  error: null,
};

const JWTRefresh = createSlice({
  name: "JWTRefresh",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosJWTRefresh.pending, function (state) {
      state.status = "pending";
    });

    builder.addCase(axiosJWTRefresh.fulfilled, function (state, action) {
      state.status = "fulfilled";
      localStorage.setItem("access", JSON.stringify(action.payload.access));
    });

    builder.addCase(axiosJWTRefresh.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default JWTRefresh.reducer;
