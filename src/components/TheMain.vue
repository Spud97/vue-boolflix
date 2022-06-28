<template>
  <div class="container d-flex justify-content-center">
    <ul>
      <li v-for="movie in moviesList" :key="movie.id">
        <span class="px-3">Titolo: {{movie.title}}</span>
        <span class="px-3">Titolo originale: {{movie.original_title}}</span>
        <span class="px-3">Lingua: {{movie.original_language}}</span>
        <span class="px-3">Voto: {{movie.vote_average}}</span>
      </li>
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
};
</script>

<style scoped lang="scss"></style>
