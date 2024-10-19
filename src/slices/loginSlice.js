import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
  isLoggedIn: false,
};

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
  extraReducers: (builder) => {},
});

export const { clearSession } = loginSlice.actions;
export default loginSlice.reducer;
