import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosResendEmail = createAsyncThunk("resendEmail", async (data) => {
  const url = `${"https://server-agency-1203.onrender.com"}/user_system/auth/users/resend_activation/`;
  const response = await axios.post(url, data);
  return response.data;
});

const initialState = {
  status: null,
  error: null,
};

const resendEmailSlice = createSlice({
  name: "resendEmail",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosResendEmail.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosResendEmail.fulfilled, function (state) {
      state.status = "fulfilled";
    });
    builder.addCase(axiosResendEmail.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default resendEmailSlice.reducer;
