import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoiZXNwaHVtYSIsImEiOiJja25tamV3NmowcXZ5MndvNTQ3NmVxYjR1In0.Vwn_7x7iWoy69bdK2Pc5Vw',
  },
});

export default searchApi;
