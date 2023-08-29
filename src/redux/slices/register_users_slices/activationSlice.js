import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosActivationUser = createAsyncThunk(
  "activation",
  async (data) => {
    const url = `${"http://127.0.0.1:8000"}/user_system/auth/users/activation/`;
    const response = await axios.post(url, data);
    return response.data;
  }
);

const initialState = {
  status: null,
  error: null,
};

const activationUserSlice = createSlice({
  name: "activationUser",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosActivationUser.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosActivationUser.fulfilled, function (state) {
      state.status = "fulfilled";
    });
    builder.addCase(axiosActivationUser.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default activationUserSlice.reducer;
