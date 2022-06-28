<template>
  <div class="container d-flex justify-content-center">
    <ul>
      <li v-for="movie in moviesList" :key="movie"></li>
    </ul>
  </div>
</template>

<script>
import { state } from "../store";
export default {
  computed: {
    moviesList() {
      return state.moviesList;
    },
  },
  methods: {
    
  },
};
</script>

<style scoped lang="scss"></style>
