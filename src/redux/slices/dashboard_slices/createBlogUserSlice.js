import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCreateBlogUser = createAsyncThunk(
  "createBlog",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${"http://127.0.0.1:8000"}/dashboard/create_blog_by_user/`;
    const response = await axios.post(url, data.info, { headers });
    return response.data;
  }
);

const initialState = {
  status: null,
  error: null,
};

const createBlogUserSlices = createSlice({
  name: "CreateBlogUser",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosCreateBlogUser.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosCreateBlogUser.fulfilled, function (state) {
      state.status = "fulfilled";
    });
    builder.addCase(axiosCreateBlogUser.rejected, function (state,action) {
      state.status = "rejected";
      state.error = action.error.message
    });
  },
});

export default createBlogUserSlices.reducer;
