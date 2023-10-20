import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosLikeBlog = createAsyncThunk("LikeBlog", async (data) => {
  const headers = {
    Authorization: `JWT ${data.jwt}`,
  };

  const url = "https://server-agency-1203.onrender.com/blog_reactions/likes/";
  try {
    const response = await axios.patch(url, data, { headers });
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

const LikeBlogSlices = createSlice({
  name: "LikeBlogs",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosLikeBlog.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosLikeBlog.fulfilled, function (state, action) {
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

export default LikeBlogSlices.reducer;
