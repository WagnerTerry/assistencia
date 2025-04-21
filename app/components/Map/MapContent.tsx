"use client";

import { FC, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [-22.7541617, -43.4550949];

const MapContent: FC = () => {
  // Configuramos o ícone apenas quando o componente é montado (cliente)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-md">
        <MapContainer
          center={position as L.LatLngExpression}
          zoom={14}
          style={{ height: "500px", width: "100%" }}
          className="z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position as L.LatLngExpression}>
            <Popup>
              <strong>iTech Soluções</strong>
              <br />
              Av. Gov. Roberto Silveira, 447 - Stand 67 - Centro, 26210-210
              <br />
              Nova Iguaçu - RJ
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapContent;
