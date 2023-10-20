import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAllUsernames = createAsyncThunk(
  "AllUsernames",
  async (data) => {
    const headers = {
      Authorization: `JWT ${data.jwt}`,
    };
    const url = `${"https://server-agency-1203.onrender.com"}/dashboard/get_all_usernames/`;

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

const allUsernamesSlice = createSlice({
  name: "allUsernames",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosAllUsernames.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(
      axiosAllUsernames.fulfilled,
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

export default allUsernamesSlice.reducer
