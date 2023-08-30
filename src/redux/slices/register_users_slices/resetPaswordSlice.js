import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosResetPassword = createAsyncThunk(
  "restPassword",
  async (data) => {
    const url = `${"http://127.0.0.1:8000"}/user_system/auth/users/reset_password/`;
    const response = await axios.post(url, data);
    return response.status;
  }
);

const initialState = {
  status: null,
  error: null,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosResetPassword.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosResetPassword.fulfilled, function (state, action) {
      state.status = action.payload;
    });
    builder.addCase(axiosResetPassword.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default resetPasswordSlice.reducer;
