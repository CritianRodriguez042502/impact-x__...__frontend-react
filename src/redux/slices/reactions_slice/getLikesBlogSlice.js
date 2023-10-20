import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosGetLikesBlog = createAsyncThunk("GetLikesBlog", async (slug) => {
  const url = `https://server-agency-1203.onrender.com/blog/get_blog_likes/?slug=${slug}`;

  try {
    const response = await axios.get(url);
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
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const getLikeBlogSlices = createSlice({
  name: "LikeBlogs",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosGetLikesBlog.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosGetLikesBlog.fulfilled, function (state, action) {
      if (action.payload.status == 200) {
        state.status = "fulfilled";
        state.info = action.payload;
      } else {
        state.status = "rejected";
        state.info = action.payload;
      }
    });
  },
});

export default getLikeBlogSlices.reducer;
