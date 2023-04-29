import pageReducer from "./features/activePageSlice";
import bodyReducer from "./features/bodyScrollSlice";

import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  activePage: pageReducer,
  bodyFixed: bodyReducer,
});

export default reducers;
