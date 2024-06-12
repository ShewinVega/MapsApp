<!-- eslint-disable -->
<script lang="ts" src="./SearchResult.ts"></script>
<!-- eslint-disable -->
<template>
  
  <div class="alert alert-primary text-center" v-if="isLoadingPage">
    <h5>Loading...</h5>
    <span>Please wait...</span>
  </div>

  <ul class="list-group mt-3" v-else-if="places.length > 0">
    <li 
      class="list-group-item list-group-item-action"
      :class="{ 'active': place.id === activePlace }"
      v-for="place in places" 
      :key="place.id" 
      @click="onPlaceClicked(place)">
      <h5>{{place.text}}</h5>
      <p>
        {{ place.place_name }}
        <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolor veniam praesentium sapiente nosporis necessitatibus at dicta. -->
      </p>
      <div align="right">
        <button 
          class="btn btn-sm"
          :class="( place.id === activePlace ) ? 'btn-outline-light' : 'btn-outline-primary'"
          @click.self="getRouteDirections(place)"
        >
          Directions
        </button>
      </div>
    </li>
    
  </ul>

</template>
<!-- eslint-disable -->
<style scoped>

  h5 {
    font-size: 15px;
    font-weight: bold;
  }

  p {
    font-size: 13px;
  }

</style>