import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const bodyScrollSlice = createSlice({
  name: "bodyFixed",
  initialState,
  reducers: {
    setBodyFixed: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBodyFixed } = bodyScrollSlice.actions;

export default bodyScrollSlice.reducer;
