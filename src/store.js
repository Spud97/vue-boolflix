import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
  moviesList: [],
  seriesList: [],
});

export function searchData(searchText, type) {
  axios
    .get("https://api.themoviedb.org/3/search/" + type, {
      params: {
        api_key: "32665c092ac62052d48fc094b42d24ba",
        query: searchText,
        language: "it-IT",
      },
    })
    .then((resp) => {
      if (type === "movie") {
        state.moviesList = resp.data.results;
      } else if (type === "tv") {
        state.seriesList = resp.data.results;
      }
    });
}
