/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
import { MutationTree } from 'vuex';
import { Feature } from '@/interfaces/places';
import { PlacesState } from './state';

const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, { lng, lat }: { lng: number, lat: number }) {
        state.userLocation = [lng, lat];
        state.isLoading = false;
    },
    setIsloadingPlaces(state: PlacesState) {
        state.isLoadingPlaces = true;
    },
    setPlaces(state: PlacesState, places: Feature[]) {
        state.places = places;
        state.isLoadingPlaces = false;
    },
};

export default mutation;