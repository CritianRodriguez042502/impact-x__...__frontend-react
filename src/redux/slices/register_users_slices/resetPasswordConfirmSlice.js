import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosResetPasswordConfirm = createAsyncThunk(
  "resetPasswordConfirm",
  async (data) => {
    const url = `${"http://127.0.0.1:8000"}/user_system/auth/users/reset_password_confirm/`;
    const response = await axios.post(url, data);
    return response.status;
  }
);

const initialState = {
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
    builder.addCase(
      axiosResetPasswordConfirm.fulfilled,
      function (state, action) {
        state.status = action.payload;
      }
    );
    builder.addCase(
      axiosResetPasswordConfirm.rejected,
      function (state, action) {
        state.status = "rejected";
        state.error = action.error.message;
      }
    );
  },
});

export default resetPasswordConfirmSlices.reducer;
