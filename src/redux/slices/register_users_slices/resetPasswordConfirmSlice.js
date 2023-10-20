import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosResetPasswordConfirm = createAsyncThunk(
  "resetPasswordConfirm",
  async (data) => {
    const url = `${"https://server-agency-1203.onrender.com"}/user_system/auth/users/reset_password_confirm/`;
    try {
      const response = await axios.post(url, data);
      return response.status;
    } catch (error) {
      return {
        status : error.response.status,
        data : error.response.data
      }
    }
  }
);

const initialState = {
  info : null,
  status: null,
  error: null,
};

const resetPasswordConfirmSlices = createSlice({
  name: "resetPasswordConfirm",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosResetPasswordConfirm.pending, function (state) {
      state.status = "pending";
    });

    builder.addCase(axiosResetPasswordConfirm.fulfilled, function (state,action) {
      if (action.payload.status === 204) {
        state.status = "fulfilled"
      } else {
        state.status = "rejected"
        state.info = action.payload.data
      }
    })
  },
});

export default resetPasswordConfirmSlices.reducer;
