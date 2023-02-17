import pageReducer from "./features/activePageSlice";

import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  activePage: pageReducer,
});

export default reducers;
