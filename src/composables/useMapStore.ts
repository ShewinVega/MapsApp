/* eslint-disable */

import { Feature } from "@/interfaces/places";
import { StateInterface } from "@/store"
import { LngLat } from "@/store/map/actions";
import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"


export const useMapStore = () => {

  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    duration: computed(() => store.state.map.duration),
    distance: computed(() => store.state.map.distance),
    
    // Mutation
    setMap: ( map: mapboxgl.Map ) => ( store.commit('map/setMap',map) ),
    setPlaceMarkers: ( places: Feature[] ) => store.commit('map/setPlaceMarkers',places),

    // Getter
    isMapReady: computed<Boolean>(() => store.getters['map/isMapReady']),

    // actions
    getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints',{start,end})
  }

}

