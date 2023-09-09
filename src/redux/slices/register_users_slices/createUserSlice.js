import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCreateUser = createAsyncThunk("create_user", async (data) => {
  const url = `${"http://127.0.0.1:8000"}/user_system/auth/users/`;
  const response = await axios.post(url, data);
  return response.data;
});

const initialState = {
  erorrMessage : null,
  status: null,
  error: null,
};

const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosCreateUser.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosCreateUser.fulfilled, function (state) {
      state.status = "fulfilled";
    });
    builder.addCase(axiosCreateUser.rejected, function (state, action) {
      state.erorrMessage = action.payload
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default createUserSlice.reducer;
