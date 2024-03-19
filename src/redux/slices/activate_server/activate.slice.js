import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config/index.config.js";

export const axiosActivateServer = createAsyncThunk(
  "activate_server",
  async () => {
    const url = config.env.base_url_server;

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
  }
);

const activateServer = createSlice({
  name: "activateServer",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosActivateServer.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosActivateServer.fulfilled, function (state, action) {
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

export default activateServer.reducer;
