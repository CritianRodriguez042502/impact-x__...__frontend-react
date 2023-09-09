import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAuthGoogle = createAsyncThunk("authGoogle", async () => {
  const url = `${"http://127.0.0.1:8000"}/user_system/auth/o/google-oauth2/?redirect_uri=http://localhost:5173/access/signin`;
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
