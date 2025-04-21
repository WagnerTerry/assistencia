"use client";

import { FC } from "react";
import dynamic from "next/dynamic";

// Carregamos o mapa dinamicamente sem SSR
const DynamicMap = dynamic(() => import("./MapContent"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-gray-200 flex items-center justify-center">
      Carregando mapa...
    </div>
  ),
});

// Componente principal
export const LeafletMap: FC = () => (
  <div className="mt-10 rounded-lg overflow-hidden shadow-md">
    <DynamicMap />
  </div>
);
