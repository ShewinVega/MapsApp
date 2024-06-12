/* eslint-disable import/order */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hld2luIiwiYSI6ImNrY3FscmVsZjE0ZjEyeW8yb2NxZng3eWEifQ.Be43i3-qPwxEK4pK3lshUg';

if (!navigator.geolocation) {
  alert('Your navigator does not support geolocation');
  throw new Error('Your navigator does not support geolocation');
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
