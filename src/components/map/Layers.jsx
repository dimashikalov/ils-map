import React from "react";
import {
  TileLayer,
  LayersControl,
  Popup,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";

const positionState = [
  {
    name: "way1",
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
    name: "way2",
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
    name: "way3",
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
];

const Layers = () => {
  const map = useMapEvents({
    // Use leaflet map event as the key and a call back with the
    // map method as the value:
    zoomend: () => {
      // Get the zoom level once zoom ended:
      console.log(map.getZoom());
    },
    moveend: () => {
      // Get bounds once move has ended:
      console.log(map.getBounds());
    },
  });
  return (
    <>
      <LayersControl position="topright">
        {/* <Marker
          position={[positionState[0].point2.lat, positionState[0].point2.lng]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        {positionState.map((way) => (
          <Marker position={[way.point1.lat, way.point1.lng]}>
            <Popup>{way.transcription}</Popup>
          </Marker>
        ))}
        <TileLayer
          attribution='Map data: &amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &amp;copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        />
        <LayersControl.BaseLayer checked name="Basic Map">
          <TileLayer
            attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Topo Map"></LayersControl.BaseLayer>
      </LayersControl>
    </>
  );
};

export default Layers;
