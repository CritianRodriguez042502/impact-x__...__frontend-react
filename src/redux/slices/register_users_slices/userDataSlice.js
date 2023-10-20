import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosUserData = createAsyncThunk("userData", async (data) => {
  const headers = {
    Authorization: `JWT ${data.jwt}`,
  };
  if (data.method === "get") {
    try {
      const url = `${"https://server-agency-1203.onrender.com"}/user_system/auth/users/me/`;
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
  } else if (data.method === "put") {
    try {
      const url = `${"https://server-agency-1203.onrender.com"}/user_system/auth/users/me/`;
      const response = await axios.put(url, data.info, { headers });
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
  } else {
    throw new Error("Error");
  }
});

const initialState = {
  info: null,
  status: null,
  error: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosUserData.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosUserData.fulfilled, function (state, action) {
      if (action.payload.status === 200) {
        state.status = "fulfilled";
        state.info = action.payload.data;
        localStorage.setItem(
          "username",
          JSON.stringify(action.payload.data.username)
        );
      } else {
        state.status = "rejected";
        state.info = action.payload.data;
      }
    });
  },
});

export default userDataSlice.reducer;
