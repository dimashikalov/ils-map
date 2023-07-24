import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  positionState: [
    {
      id: 1,
      name: "Маршрут 1",
      startPoint: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      checkPoint: {
        lat: 59.84934196,
        lng: 30.42423701,
      },
      endPoint: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
    },
    {
      id: 2,
      name: "Маршрут 2",
      startPoint: {
        lat: 59.82934196,
        lng: 30.42423701,
      },
      checkPoint: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
      endPoint: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
    },
    {
      id: 3,
      name: "Маршрут 3",
      startPoint: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
      checkPoint: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      endPoint: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
    },
  ],
  isLoading: false,
  isError: "",
  selectedWay: null,
  selectedWayPolyline: [],
};

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    setSelectedWay: (state, action) => {
      state.isLoading = true;
      state.selectedWay = action.payload;
      state.isError = "";
    },
    setSelectedWayPolyline: (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.selectedWayPolyline = action.payload;
    },
    setSelectedWayPolylineError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {
  setSelectedWay,
  setSelectedWayPolyline,
  setSelectedWayPolylineError,
} = mapSlice.actions;
