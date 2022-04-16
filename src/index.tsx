import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZXNwaHVtYSIsImEiOiJja25tamV3NmowcXZ5MndvNTQ3NmVxYjR1In0.Vwn_7x7iWoy69bdK2Pc5Vw';

if (!navigator.geolocation) {
  const mensaje: string = 'Tu navegador no tiene opcion de geolocalizacion';
  alert(mensaje);
  throw new Error(mensaje);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
