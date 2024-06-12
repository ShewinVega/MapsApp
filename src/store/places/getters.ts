/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
/* eslint-disable no-trailing-spaces */
import { GetterTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<PlacesState, StateInterface> = {
    isUserLocationReady(state) {
        return !!state.userLocation;
    },   
};

export default getters;