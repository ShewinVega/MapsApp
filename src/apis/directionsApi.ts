/* eslint-disable */
import axios from "axios";
import { accessToken } from "mapbox-gl";

const directionsApi = axios.create({
  baseURL: `https://api.mapbox.com/directions/v5/mapbox/driving`,
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:'pk.eyJ1Ijoic2hld2luIiwiYSI6ImNsd21udmxmNDB0M3EycW1qN21hcGI1ZXcifQ.Lbd-I15YL7dP3Mcj_9XahA'
    
  }
});

export default directionsApi;