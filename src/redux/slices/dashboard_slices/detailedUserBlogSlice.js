import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js";

export const axiosDetailedUserBlog = createAsyncThunk(
  "detailedUserBlog",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${config.env.base_url_server}/dashboard/blog_detail_by_user/?slug=${data.slug}`;
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
