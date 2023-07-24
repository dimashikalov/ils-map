import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const Routing = () => {
  const wayPoints = useSelector((state) => state.maps.selectedWay);

  const map = useMap();

  useEffect(() => {
    if (!wayPoints) return;
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(wayPoints.startPoint.lat, wayPoints.startPoint.lng),
        L.latLng(wayPoints.checkPoint.lat, wayPoints.checkPoint.lng),
        L.latLng(wayPoints.endPoint.lat, wayPoints.endPoint.lng),
      ],
      router: new L.Routing.OSRMv1({
        profile: "driving",
      }),
      lineOptions: {
        styles: [
          {
            color: "#6FA1EC",
            opacity: 1,
            weight: 5,
          },
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0,
      },
      draggableWaypoints: false,
      routeWhileDragging: false,
      useZoomParameter: true,
      fitSelectedRoutes: true,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [wayPoints]);

  return null;
};

export default Routing;
