import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosDetailedUserBlog = createAsyncThunk(
  "detailedUserBlog",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${"https://server-agency-1203.onrender.com"}/dashboard/blog_detail_by_user/?slug=${data.slug}`;
    const response = await axios.get(url, { headers });
    return response.data;
  }
);

const initialState = {
  info: null,
  status: null,
  error: null,
};

const detailedUserBlogSlices = createSlice({
  name: "detailedUserBlog",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosDetailedUserBlog.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosDetailedUserBlog.fulfilled, function (state, action) {
      state.info = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(axiosDetailedUserBlog.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default detailedUserBlogSlices.reducer;
