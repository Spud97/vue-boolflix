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
  methods: {
    countryFlag(lingua) {
      const langsMap = {
        en: "us",
        ja: "jp",
        ko: "kr",
      };
      let bandiera = langsMap[lingua];
      if (bandiera == undefined) {
        return lingua;
      }
      return langsMap[lingua];
    },
    imageCard(image) {
      return `https://image.tmdb.org/t/p/w342/${image}`;
    },
    //DA SISTEMARE VVV
    replaceByDefault() {
      return "../../public/img/notFound.png";
    },
    //
    voteAdjustment(vote) {
      return Math.ceil(vote / 2);
    },
  },
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
