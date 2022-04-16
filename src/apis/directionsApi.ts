import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    steps: false,
    overview: 'simplified',
    access_token:
      'pk.eyJ1IjoiZXNwaHVtYSIsImEiOiJja25tamV3NmowcXZ5MndvNTQ3NmVxYjR1In0.Vwn_7x7iWoy69bdK2Pc5Vw',
  },
});

export default directionsApi;
