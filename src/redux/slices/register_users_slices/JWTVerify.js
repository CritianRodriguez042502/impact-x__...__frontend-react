import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosJWTVerify = createAsyncThunk("JWTVerify", async (data) => {
  const url = `${"http://127.0.0.1:8000"}/user_system/auth/jwt/verify/`;
  try {
    const response = await axios.post(url, data)
    return response.status
  } catch (error) {
    return error.response.status
  }
});

const initialState = {
  status: null,
  error: null,
};

const JWTVerifySlice = createSlice({
  name: "JWTVerify",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosJWTVerify.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosJWTVerify.fulfilled, function (state,action) {
      if (action.payload == 200) {
        state.status = "fulfilled"
      } else {
        state.status = "rejected"
      }
    });
    
  },
});

export default JWTVerifySlice.reducer;
