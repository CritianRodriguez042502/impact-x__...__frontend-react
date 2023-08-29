import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAllBlogs = createAsyncThunk("allBlogs", async () => {
  const url = `${"http://127.0.0.1:8000"}/blog/all_blog/`;
  const response = await axios.get(url);
  console.log(response)
  return response.data;
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const allBlogsSlice = createSlice({
  name: "allBlogs",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosAllBlogs.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosAllBlogs.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosAllBlogs.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default allBlogsSlice.reducer;
