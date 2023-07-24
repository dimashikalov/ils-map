import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mapSlice from "./map/mapSlice";

export const rootReducer = combineReducers({
  map: mapSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
