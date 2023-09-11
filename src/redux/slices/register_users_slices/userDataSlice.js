import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosUserData = createAsyncThunk("userData", async (data) => {
  const headers = {
    Authorization: `JWT ${data}`,
  };
  const url = `${"http://127.0.0.1:8000"}/user_system/auth/users/me/`;
  const response = await axios.get(url, { headers });
  return response.data;
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosUserData.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosUserData.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosUserData.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default userDataSlice.reducer;
