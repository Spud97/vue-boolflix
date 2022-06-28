<template>
  <div class="container d-flex justify-content-center pt-5">
    <div class="form-group">
      <input type="filtro contenuti" class="form-control" placeholder="Film o Serie TV" v-model="titolo" />
    </div>
    <button type="submit" class="btn btn-primary" @click="onSearch()">Cerca</button>
  </div>
</template>

<script>
import { searchData } from "../store";

export default {
  data() {
    return {
      titolo: "",
    };
  },
  methods: {
    onSearch() {
      searchData(this.titolo, "movie")
    },
  },
  mounted() {
    searchData(this.titolo, "movie")  
  }
}
</script>

<style scoped lang="scss"></style>
