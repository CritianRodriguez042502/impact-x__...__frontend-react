import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const axiosDetailedCommentsBlog = createAsyncThunk(
  "Detaildecomments",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };

    const url = `${"https://server-agency-1203.onrender.com"}/blog_reactions/comments/?unique_brand=${
      data.unique_brand
    }`;
    try {
      const response = await axios.get(url, { headers });
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

const DetailedCommentsBlogSlice = createSlice({
  name: "DetailedCommentsBlog",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosDetailedCommentsBlog.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(
      axiosDetailedCommentsBlog.fulfilled,
      function (state, action) {
        if (action.payload.status === 200) {
          state.status = "fulfilled";
          state.info = action.payload.data;
        } else {
          state.status = "rejected";
          state.info = action.payload.data;
        }
      }
    );
  },
});

export default DetailedCommentsBlogSlice.reducer;
