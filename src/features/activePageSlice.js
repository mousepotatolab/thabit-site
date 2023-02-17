import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home",
};

export const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActivePage } = activePageSlice.actions;

export default activePageSlice.reducer;
