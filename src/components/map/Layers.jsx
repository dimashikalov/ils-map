import React from "react";
import {
  TileLayer,
  LayersControl,
  Popup,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

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
