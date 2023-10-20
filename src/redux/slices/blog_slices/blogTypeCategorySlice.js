import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosBlogTypeCategory = createAsyncThunk(
  "blogTypeCategory",
  async (slug) => {
    const url = `${"https://server-agency-1203.onrender.com"}/blog/blog_by_category/?slug=${slug}`;
    const response = await axios.get(url);
    return response.data;
  }
);

const blogTypeCategorySlice = createSlice({
  name: "BlogTypeCategory",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosBlogTypeCategory.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosBlogTypeCategory.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosBlogTypeCategory.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default blogTypeCategorySlice.reducer;
