<!-- eslint-disable -->
<script lang="ts" src="./SearchBar.ts">

  

</script>
<!-- eslint-disable -->
<template>


  <div class="searchbar-container">
    <input
      class="form-control"
      type="text"
      placeholder="Search places..."
      v-model="searchTerm"
    />
    <SearchResult />
  </div>


</template>
<!-- eslint-disable -->
<style scoped>

  .searchbar-container {
    background-color: white;
    border-radius: 10px !important;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    left: 30px;
    overflow: hidden;
    padding: 5px;
    position: fixed;
    top: 30px;
    width: 250px;
    z-index: 9999;
  }

  li {
    cursor: pointer;
  }

</style>