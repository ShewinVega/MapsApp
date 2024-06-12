/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import { Feature } from "@/interfaces/places";

/* eslint-disable eol-last */
export interface PlacesState {
  isLoading: boolean,
  userLocation?: [number, number], // lng, lat
  isLoadingPlaces: boolean,
  places: Feature[],
}

function state(): PlacesState {
  return {
    isLoading: false,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
  };
}

export default state;