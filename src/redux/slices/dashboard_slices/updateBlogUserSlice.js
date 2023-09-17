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

    const response = await axios.put(url, data.info, { headers });
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
