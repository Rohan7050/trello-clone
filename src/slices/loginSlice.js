import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearSession: (state, action) => {
      state.session = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { clearSession } = loginSlice.actions;
export default loginSlice.reducer;
