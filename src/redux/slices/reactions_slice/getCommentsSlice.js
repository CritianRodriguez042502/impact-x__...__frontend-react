import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosGetCommentsBlog = createAsyncThunk(
  "getCommentsBlog",
  async (slug) => {
    const url = `${"http://127.0.0.1:8000"}/blog/get_blog_comments/?slug=${slug}`;
    try {
      const response = await axios.request({ url: url, method: "get" });
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return {
        status: error.response.status,
        data: error.response.data,
      };
    }
  }
);

const initialState = {
  info: null,
  status: null,
  error: null,
};

const commentsBlogSlices = createSlice({
  name: "GetComments",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosGetCommentsBlog.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosGetCommentsBlog.fulfilled, function (state, action) {
      if (action.payload.status == 200) {
        state.status = "fulfilled";
        state.info = action.payload.data;
      } else {
        state.status = "rejected";
        state.info = action.payload.data;
      }
    });
  },
});

export default commentsBlogSlices.reducer;
