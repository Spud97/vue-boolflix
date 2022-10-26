<template>
  <div class="bg-dark">
    <div class="container d-flex justify-content-between py-3">
      <div>
        <h2 class="text-danger">Boolflix</h2>
      </div>
      <div class="d-flex align-items-center">
        <div class="form-group">
          <input
            type="filtro contenuti"
            class="form-control"
            placeholder="Film o Serie TV"
            v-model="titolo"
            @keyup.enter="onSearch()"
          />
        </div>
        <button type="submit" class="btn btn-primary" @click="onSearch()">
          Cerca
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { searchData } from "../store";

export default {
  name: "TheHeader",
  data() {
    return {
      titolo: "",
    };
  },
  methods: {
    onSearch() {
      searchData(this.titolo, "movie");
      searchData(this.titolo, "tv");
    },
  },
  mounted() {
    searchData(this.titolo, "movie");
    searchData(this.titolo, "tv");
  },
};
</script>

<style scoped lang="scss"></style>
