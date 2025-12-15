"use client";

import { MapContainer, TileLayer, Marker, CircleMarker } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const center: [number, number] = [35.994, -78.898];

export default function CADMap() {
  const [stations, setStations] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [incidents, setIncidents] = useState<any>(null); //Fire incidents state

  useEffect(() => {
    setMounted(true); // mark as mounted

    fetch("/geojson/Fire_Stations.geojson")
      .then((res) => res.json())
      .then((data) => setStations(data));

    fetch("/geojson/Fire_Incidents.geojson")
      .then((res) => res.json())
      .then((data) => setIncidents(data));
  }, []);

  const createStationIcon = (stationNumber: string) => {
    return L.divIcon({
      className: "", // removes default leaflet styles
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      html: `<div style="
        background-color:red;
        color:white;
        border-radius:50%;
        width:24px;
        height:24px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:12px;
        font-weight:bold;
      ">${stationNumber}</div>`,
    });
  };

  if (!mounted) return null; // <-- prevents server/client mismatch

  return (
    <MapContainer
      {...({} as any)}
      center={center}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

      {/* Fire Stations */}
      {stations &&
        stations.features.map((feature: any, idx: number) => {
          const [lon, lat] = feature.geometry.coordinates;
          const stationNumber = feature.properties.Station.replace("Station ", "");
          return (
            <Marker
              key={`station-${idx}`}
              position={[lat, lon]}
              icon={createStationIcon(stationNumber)}
            />
          );
        })}

      {/* Fire Incidents*/}
      {incidents &&
        incidents.features.map((feature: any, idx: number) => {
          const [lon, lat] = feature.geometry.coordinates;
          return (
            <CircleMarker
              key={`incident-${idx}`}
              center={[lat, lon]}
              radius={5}
              pathOptions={{
                color: "#000080",       // Navy blue
                fillColor: "#000080",
                fillOpacity: 1,
              }}
            />
          );
        })}
    </MapContainer>
  );
}
