<template>
  <div class="container d-flex">
    <div>
      <h1>Film</h1>
      <ul>
        <li v-for="movie in moviesList" :key="movie.id">
          <img
            :src="imageCard(movie.poster_path)"
            @error="replaceByDefault()"
            alt=""
          />
          <span class="px-3">Titolo: {{ movie.title }}</span>
          <span class="px-3">Titolo originale: {{ movie.original_title }}</span>
          <span class="px-3"
            >Lingua:
            <span
              class="fi"
              :class="'fi-' + countryFlag(movie.original_language)"
            ></span
          ></span>
          <span class="px-3"
            >Voto: {{ voteAdjustment(movie.vote_average) }}</span
          >
        </li>
      </ul>
    </div>
    <div>
      <h1>Serie TV</h1>
      <ul>
        <li v-for="serie in seriesList" :key="serie.id">
          <img :src="imageCard(serie.poster_path)" alt="" />
          <span class="px-3">Titolo: {{ serie.name }}</span>
          <span class="px-3">Titolo originale: {{ serie.original_name }}</span>
          <span class="px-3"
            >Lingua:
            <span
              class="fi"
              :class="'fi-' + countryFlag(serie.original_language)"
            ></span
          ></span>
          <span class="px-3"
            >Voto:
            <span v-for="y in 5" :key="y"
              ><i
                v-if="y <= voteAdjustment(serie.vote_average)"
                class="fa-solid fa-star"
              ></i
              ><i v-else class="fa-regular fa-star"></i></span
          ></span>
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
};
</script>

<style scoped lang="scss"></style>
