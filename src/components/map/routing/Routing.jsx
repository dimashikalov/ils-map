import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
// });

const Routing = () => {
  const wayPoints = useSelector((state) => state.maps.selectedWay);

  const map = useMap();

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  useEffect(() => {
    if (!wayPoints) return;
    if (!map) return;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

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
