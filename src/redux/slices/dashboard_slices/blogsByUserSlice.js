import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosBlogsByUser = createAsyncThunk("blogByUser", async (jwt) => {
  const headers = {
    Authorization: `JWT ${jwt}`,
  };
  const url = `${"https://server-agency-1203.onrender.com"}/dashboard/blog_by_user/`;
  const response = await axios.get(url, { headers });
  return response.data;
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const blogByUserSlices = createSlice({
  name: "blogByUser",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosBlogsByUser.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosBlogsByUser.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosBlogsByUser.rejected, function (state, action) {
      state.status = "rejected";
      state.error = {
        name: action.error.name,
        message: action.error.message,
        code: action.error.code,
      };
    });
  },
});

export default blogByUserSlices.reducer;
