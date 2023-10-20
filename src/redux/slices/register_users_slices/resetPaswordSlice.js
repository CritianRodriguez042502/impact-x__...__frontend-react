import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosResetPassword = createAsyncThunk(
  "restPassword",
  async (data) => {
    const url = `${"https://server-agency-1203.onrender.com"}/user_system/auth/users/reset_password/`;
    try {
      const response = await axios.post(url, data);
      return response.status;
    } catch (errro) {
      throw new Error("El apartado de correo no puede ir vacio");
    }
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
      state.status = "fulfilled";
    });
    builder.addCase(axiosResetPassword.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default resetPasswordSlice.reducer;
