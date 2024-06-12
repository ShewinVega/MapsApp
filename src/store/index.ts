/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */
import { createStore } from 'vuex';
import { PlacesState } from './places/state';
import placesModule from './places';
import { MapState } from './map/state';
import mapModule from './map';

export interface StateInterface {

  places: PlacesState,
  map: MapState,

}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule,
  },
});