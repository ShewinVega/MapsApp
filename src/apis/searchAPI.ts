/* eslint-disable */
import axios from "axios";
import { accessToken } from "mapbox-gl";

const searchApi = axios.create({
  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places`,
  params: {
    limit: 5,
    language: 'es',
    access_token:'pk.eyJ1Ijoic2hld2luIiwiYSI6ImNsd21udmxmNDB0M3EycW1qN21hcGI1ZXcifQ.Lbd-I15YL7dP3Mcj_9XahA'
    
  }
});

export default searchApi;