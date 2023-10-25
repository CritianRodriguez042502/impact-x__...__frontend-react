import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const axiosCommentsBlog = createAsyncThunk("comments", async (data) => {
  const headers = {
    Authorization: `JWT ${data.jwt}`,
  };
  
  if (data.method === "get") {
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
  } else if (data.method === "post") {
    try {
      const url = `${"https://server-agency-1203.onrender.com"}/blog_reactions/comments/`;
      const response = await axios.post(url, data, { headers });
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
  } else if (data.method === "patch") {
    try {
      const url = `${"https://server-agency-1203.onrender.com"}/blog_reactions/comments/`;
      const response = await axios.patch(url, data, { headers });
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
  } else if (data.method === "delete") {
    try {
      const url = `${"https://server-agency-1203.onrender.com"}/blog_reactions/comments/?unique_key=${
        data.unique_key
      }`;
      const response = await axios.delete(url, { headers });
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
    return {
      status: "Error",
    };
  }
});

const commentsBlogSlices = createSlice({
  name: "CommentsBlog",
  initialState: { info: null, status: null, error: null },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(axiosCommentsBlog.pending, function (state) {
      state.status = "pending";
    });
    builder.addCase(axiosCommentsBlog.fulfilled, function (state, action) {
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

export default commentsBlogSlices.reducer;
