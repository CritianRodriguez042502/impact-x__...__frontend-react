import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosSearchBlogs = createAsyncThunk("SearchBlogs", async (slug) => {
  const url = `${"http://127.0.0.1:8000"}/blog/search_blogs/?slug=${slug}`;
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const searchBlogsSlice = createSlice({
  name: "searchBlogs",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosSearchBlogs.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosSearchBlogs.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosSearchBlogs.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default searchBlogsSlice.reducer;
