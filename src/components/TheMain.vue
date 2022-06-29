<template>
  <div class="container d-flex">
    <div>
      <h1>Film</h1>
      <ul>
        <li v-for="movie in moviesList" :key="movie.id">
          <span class="px-3">Titolo: {{ movie.title }}</span>
          <span class="px-3">Titolo originale: {{ movie.original_title }}</span>
          <span class="px-3">Lingua: <span class="fi" :class="'fi-' + countryFlag()"></span></span>
          <span class="px-3">Voto: {{ movie.vote_average }}</span>
        </li>
      </ul>
    </div>
    <div>
      <h1>Serie TV</h1>
      <ul>
        <li v-for="serie in seriesList" :key="serie.id">
          <span class="px-3">Titolo: {{ serie.name }}</span>
          <span class="px-3">Titolo originale: {{ serie.original_name }}</span>
          <span class="px-3">Lingua: <span class="fi" :class="'fi-' + countryFlag()"></span></span>
          <span class="px-3">Voto: {{ serie.vote_average }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { state } from "../store";
export default {
  computed: {
    moviesList() {
      return state.moviesList;
    },
    seriesList() {
      return state.seriesList;
    },
    countryFlag() {
      if (this.movie) {
        return this.movie.original_language;
      } else if (this.serie) {
        return this.serie.original_language;
      }
    }
  },
};
</script>

<style scoped lang="scss"></style>
