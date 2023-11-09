import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAuthGoogle = createAsyncThunk("authGoogle", async () => {
  const url = `${"https://server-agency-1203.onrender.com"}/user_system/auth/o/google-oauth2/?redirect_uri=https://impact-x.onrender.com/#/access/signin`;
  const respose = await axios.get(url);
  return respose.data;
});

const initialState = {
  url: null,
  status: null,
  error: null,
};

const authGoogleSlice = createSlice({
  name: "authGoogle",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosAuthGoogle.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosAuthGoogle.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.url = action.payload.authorization_url;
    });
    builder.addCase(axiosAuthGoogle.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default authGoogleSlice.reducer;
