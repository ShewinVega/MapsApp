/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable object-curly-spacing */
/* eslint-disable import/no-cycle */
import { ActionTree } from 'vuex';
import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        // todo: Colocal Loading
        navigator.geolocation.getCurrentPosition(
            ({ coords}) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude}),
            (error) => {
                console.log(error);
                throw new Error('No geolocation 😒');
            },
        );
    },

    // TODO: put the value to return
    async searchPlacesByTerm({commit, state}, query: string): Promise<Feature[]> {
        if (query.length === 0) {
            commit('setPlaces', []);
            return [];
        }

        if (!state.userLocation) {
            throw new Error('No user location');
        }

        commit('setIsloadingPlaces');

        const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(','),
            },
        });

        commit('setPlaces', response.data.features);
        return response.data.features;
    },

};

export default actions;