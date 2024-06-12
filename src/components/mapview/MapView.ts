/* eslint-disable */
import { useMapStore, usePlacesStore } from "@/composables";
import mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({

  name: 'MapView',
  setup() {

    const mapElement = ref<HTMLDivElement>();
    const { /* isLoading, */ userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {
      if(!mapElement.value) throw new Error(`Element does not exist`);
      if(!userLocation.value) throw new Error(`Element does not exist`);
  
      await Promise.resolve();

      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation.value,// [-74.5, 40], // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      // Create Popup 
      const myLocationPopup = new mapboxgl.Popup()
        .setLngLat(userLocation.value)
        .setHTML(`
          <h4>Here i am</h4>
          <p>this is my current Location</p>
          <p>${userLocation.value}</p>
        `)

      // create Market
      const myLocationMarket = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map);
      
      //TODO: Establecer el mapa en Vuex
      setMap(map);  

    }


    onMounted(() => {
      if(isUserLocationReady.value) {
        return initMap();
      }
      console.log(`I dont have location yet.`);
    });

    watch(isUserLocationReady,(newVal) => {
      if(isUserLocationReady.value) {
        initMap();
      }
    });

    return {
      /* isLoading,
      userLocation, */
      isUserLocationReady,
      mapElement,
    }
  }

});