import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  positionState: [
    {
      id: 1,
      transcription: "Маршрут 1",
      point1: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      point2: {
        lat: 59.84934196,
        lng: 30.42423701,
      },
      point3: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
    },
    {
      id: 2,
      transcription: "Маршрут 2",
      point1: {
        lat: 59.82934196,
        lng: 30.42423701,
      },
      point2: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
      point3: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
    },
    {
      id: 3,
      transcription: "Маршрут 3",
      point1: {
        lat: 59.83567701,
        lng: 30.38064206,
      },
      point2: {
        lat: 59.84660399,
        lng: 30.29496392,
      },
      point3: {
        lat: 59.82761295,
        lng: 30.41705607,
      },
    },
  ],
  isLoading: false,
  selectedWay: null,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    seSelectedWay: (state, action) => {
      state.isLoading = true;
      state.selectedWay = action.payload;
    },
  },
});

export const { seSelectedWay } = mapSlice.actions;

export default mapSlice.reducer;
