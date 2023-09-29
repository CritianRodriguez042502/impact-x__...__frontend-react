import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const axiosCommentsBlog = createAsyncThunk("comments", async (data) => {
  const headers = {
    Authorization: `JWT ${data.jwt}`,
  };

  const url = `${"http://127.0.0.1:8000"}/blog_reactions/comments/`;
  try {
    const response = await axios.get(url, data, { headers });
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

const commentsBlogSlices = createSlice({
  name: "CommentsBlog",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosCommentsBlog.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosCommentsBlog.fulfilled, function (state, action) {
      if (action.payload.status === 200) {
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
