import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";

const initialState = {
  session: null,
  isLoggedIn: false,
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
      console.log("response", response);
    });
  },
});

export const { clearSession } = loginSlice.actions;
export default loginSlice.reducer;
