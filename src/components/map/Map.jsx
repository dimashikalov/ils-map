import React from "react";
import { MapContainer, ZoomControl } from "react-leaflet";
import "../../styles/map.scss";
import Layers from "./Layers";

const Map = () => {
  return (
    <div id="map">
      <MapContainer
        center={[59.82934196, 30.42423701]}
        zoom={8}
        zoomControl={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <Layers />
        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
};

export default Map;
