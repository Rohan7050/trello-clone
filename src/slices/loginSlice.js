import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import { tokenRepo } from "../cache/db";

const initialState = {
  session: null,
};

export const getOtpApi = createAsyncThunk(
  "login/getOtpApi",
  async (data, { getState, rejectWithValue }) => {
    try {
      const response = await authService.getOTP(data);
      return response;
    } catch (error) {
      console.log("error :>> ", error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    startSession: (state, action) => {
      state.session = action.token;
      state.isLoggedIn = true;
    },
    clearSession: (state, action) => {
      state.session = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOtpApi.fulfilled, (state, action) => {
      const response = action.payload;
      // tokenRepo.appToken.add({ token: response.session.token, id: 1 });
      console.log("response", response);
    });
  },
});

export const { clearSession } = loginSlice.actions;
export default loginSlice.reducer;

// session: {
//   userId:"12252341275645",
//   token:`IaGilgUOLofOzbRuRKM5jUI70S1oORxWRGUMNPW8yYDLGbNmHfZOOodWZFGk55j7KsBOVr1jZgQuZPfN5NZniRtGoanyzNlgb7GDEc0nIJFtadtexBEptRJWE4vhWVDt`,

// }
