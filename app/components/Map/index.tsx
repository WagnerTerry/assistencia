"use client";

import { FC } from "react";
import dynamic from "next/dynamic";

// Carregamos o mapa dinamicamente sem SSR
const DynamicMap = dynamic(() => import("./MapContent"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full flex justify-center">
      <div className="w-full lg:w-1/2 bg-gray-200 flex items-center justify-center">
        Carregando mapa...
      </div>
    </div>
  ),
});

// Componente principal
export const LeafletMap: FC = () => (
  <div className="mt-10 w-full">
    <DynamicMap />
  </div>
);
