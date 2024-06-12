<!-- eslint-disable -->
<template>
  <button class="btn btn-primary" @click="onMyLocationClicked" v-if="isBtnReady">
    Go to my location
  </button>
</template>
<!-- eslint-disable -->
<script lang="ts">
  import { useMapStore, usePlacesStore } from "@/composables";
import { computed, defineComponent } from "vue";

  export default defineComponent({
    name: 'MyLocationBtn',
    setup() {

      const { userLocation, isUserLocationReady } = usePlacesStore();
      const { map, isMapReady } = useMapStore();

      return {
        isBtnReady: computed(() => isUserLocationReady.value && isMapReady.value ),
        onMyLocationClicked: () => {
          map.value?.flyTo({
            center: userLocation.value,
            zoom: 14
          })
        }

      }

    }
  });

</script>
<!-- eslint-disable -->
<style scoped>

  button {
    position: fixed;
    top:30px;
    right: 30px;
  }

</style>