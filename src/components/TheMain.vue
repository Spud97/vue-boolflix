<template>
  <div class="container d-flex">
    <div>
      <h1>Film</h1>
      <ul>
        <li v-for="movie in moviesList" :key="movie.id">
          <span class="px-3">Titolo: {{ movie.title }}</span>
          <span class="px-3">Titolo originale: {{ movie.original_title }}</span>
          <span class="px-3"
            >Lingua: <span class="fi" :class="'fi-' + countryFlag(movie.original_language)"></span
          ></span>
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
          <span class="px-3"
            >Lingua:
            <span class="fi" :class="'fi-' + countryFlag(serie.original_language)"></span
          ></span>
          <span class="px-3">Voto: {{ serie.vote_average }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { state } from "../store";
export default {
  methods: {
    countryFlag(lingua) { 
      const langsMap = {
        "en" : "us",
        "ja" : "jp",
        "ko" : "kr"
      };
      let bandiera = langsMap[lingua]
      if (bandiera == undefined) {
        return lingua
      }
      return langsMap[lingua];
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
};
</script>

<style scoped lang="scss"></style>
