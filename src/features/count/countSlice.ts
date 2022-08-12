import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const { setCount } = countSlice.actions;

export default countSlice.reducer;
