/* eslint-disable */

import { StateInterface } from "@/store/index";
import { computed, onMounted } from "vue";
import { useStore } from "vuex"

/* eslint-disable import/prefer-default-export */
export const usePlacesStore = () => {

  const store = useStore<StateInterface>();


  onMounted(() => {
    if(!store.getters['places/isUserLocationReady']) {
      store.dispatch('places/getInitialLocation');
    }
  });

  return {
    // State
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),
    places: computed(() =>  store.state.places.places),
    isLoadingPlaces: computed(() =>  store.state.places.isLoadingPlaces),
    // Getters
    isUserLocationReady: computed<Boolean>(() => store.getters['places/isUserLocationReady']),
    // Actions
    searchPlacesByTerm: (query: string) => store.dispatch('places/searchPlacesByTerm', query),
    // Mutations

  }
}