import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosGetUserBlogReactions = createAsyncThunk(
  "getUserBlogReactions",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${"https://server-agency-1203.onrender.com"}/dashboard/get_user_blog_reactions/?slug=${
      data.slug
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

const getUserBlogReactionsSlices = createSlice({
  name: "getUserBlogReactions",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosGetUserBlogReactions.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(
      axiosGetUserBlogReactions.fulfilled,
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

export default getUserBlogReactionsSlices.reducer;
