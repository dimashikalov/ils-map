import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mapSlice } from "./map/mapSlice";

export const rootReducer = combineReducers({
  maps: mapSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
