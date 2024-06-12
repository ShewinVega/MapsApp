<template>

  <MapView />

  <SearchBar />
  <MyLocationButton />

</template>

<script lang="ts">
import MapView from '@/components/mapview/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton, SearchBar },

  setup() {
    usePlacesStore();
  },

});
</script>
