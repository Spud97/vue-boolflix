<template>
  <div class="bg-main">
    <div class="container main-container d-flex flex-column">
      <div class="pt-3">
        <h1 class="text-white">Film</h1>
        <div class="row row-cols-3 scroll">
          <div class="col" v-for="movie in moviesList" :key="movie.id">
            <MovieCard :info="movie"></MovieCard>
          </div>
        </div>
      </div>
      <div class="pt-3">
        <h1 class="text-white">Serie TV</h1>
        <div class="row row-cols-3 scroll">
          <div class="col" v-for="serie in seriesList" :key="serie.id">
            <SerieCard :info="serie"></SerieCard>
          </div>
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

<style scoped lang="scss">
.main-container {
  height: 100%;
}

.bg-main {
  background-color: black;
}

</style>
