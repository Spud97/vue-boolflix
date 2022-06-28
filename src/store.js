import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
  moviesList: [],
  seriesList: [],
});

export function searchMovies(searchText) {
  debugger

  axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "32665c092ac62052d48fc094b42d24ba",
        query: searchText,
        language: "it-IT",
      },
    })
    .then((resp) => {
      state.moviesList = resp.data.results;
    });
}
