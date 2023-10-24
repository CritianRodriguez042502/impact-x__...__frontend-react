import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCreateBlogUser = createAsyncThunk(
  "createBlog",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${"https://server-agency-1203.onrender.com"}/dashboard/create_blog_by_user/`;
    const body = new FormData()
    body.append("title", data.info.title)
    body.append("description", data.info.description)
    body.append("content", data.info.content)
    body.append("public", data.info.public)
    body.append("category",data.info.category)
    body.append("file", data.info.img)
    const response = await axios.post(url, body, {headers});
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
