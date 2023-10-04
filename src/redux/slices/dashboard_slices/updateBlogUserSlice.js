import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosUpdateBlogUser = createAsyncThunk(
  "updateBlogUser",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${"http://127.0.0.1:8000"}/dashboard/update_blogs_by_user/?slug=${
      data.slug
    }`;
    const body = new FormData()
    body.append("title", data.info.title)
    body.append("description", data.info.description)
    body.append("public",data.info.public)
    body.append("content",data.info.content)
    body.append("category",data.info.category)
    body.append("file", data.info.img)
    const response = await axios.put(url, body, { headers });
    return response.data;
  }
);

const initialState = {
  status: null,
  error: null,
};

const updateBlogUserSlices = createSlice({
  name: "UpdateBlog",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosUpdateBlogUser.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosUpdateBlogUser.fulfilled, function (state) {
      state.status = "fulfilled";
    });
    builder.addCase(axiosUpdateBlogUser.rejected, function (state) {
      state.status = "rejected";
    });
  },
});

export default updateBlogUserSlices.reducer;
