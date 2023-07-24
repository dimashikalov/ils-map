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
      poiendPointnt3: {
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
    },
    setSelectedWayPolyline: (state, action) => {
      state.isLoading = false;
      state.selectedWayPolyline = action.payload;
    },
  },
});

export const { setSelectedWay, setSelectedWayPolyline } = mapSlice.actions;
