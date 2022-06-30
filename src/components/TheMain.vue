<template>
  <div class="container d-flex">
    <div>
      <h1>Film</h1>
      <div class="row row-cols-3">
        <div class="col" v-for="movie in moviesList" :key="movie.id">
          <MovieCard :info="movie"></MovieCard>
        </div>
      </div>
    </div>
    <div>
      <h1>Serie TV</h1>
      <div class="row row-cols-3">
        <div class="col" v-for="serie in seriesList" :key="serie.id">
          <SerieCard :info="serie"></SerieCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import SerieCard from "./SerieCard.vue";
import { state } from "../store";
export default {
  name: "TheMain",
  computed: {
    moviesList() {
      return state.moviesList;
    },
    seriesList() {
      return state.seriesList;
    },
  },
  components: { MovieCard, SerieCard },
};
</script>

<style scoped lang="scss"></style>
