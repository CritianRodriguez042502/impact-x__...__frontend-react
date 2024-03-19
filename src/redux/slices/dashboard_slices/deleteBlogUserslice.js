import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js"

export const axiosDeleteBlogUser = createAsyncThunk(
  "deleteBlogUser",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${config.env.base_url_server}/dashboard/delete_blog_by_user/?slug=${
      data.slug
    }`;
    const response = await axios.delete(url, { headers });
    return response.data;
  }
);

const initialState = {
  status: null,
  error: null,
};

const deleteBlogUserSlices = createSlice({
  name: "deleteBlogUser",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosDeleteBlogUser.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosDeleteBlogUser.fulfilled, function (state) {
      state.status = "fulfilled";
    });
    builder.addCase(axiosDeleteBlogUser.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default deleteBlogUserSlices.reducer;
