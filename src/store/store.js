import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mapSlice } from "./map/mapSlice";
import createSagaMiddleware from "redux-saga";
import waitFetchWaySelection from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  maps: mapSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(waitFetchWaySelection);
