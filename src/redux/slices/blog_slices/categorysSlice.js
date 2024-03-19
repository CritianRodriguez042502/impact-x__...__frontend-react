import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js"

export const axiosCategorys = createAsyncThunk("categorys", async () => {
  const url = `${config.env.base_url_server}/blog/all_categoryes/`;
  const response = await axios.get(url);
  return response.data;
});

const categorysSlice = createSlice({
  name: "categorys",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosCategorys.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosCategorys.fulfilled, function (state, action) {
      state.status = "fulfilled";
      state.info = action.payload;
    });
    builder.addCase(axiosCategorys.rejected, function (state, action) {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default categorysSlice.reducer;
