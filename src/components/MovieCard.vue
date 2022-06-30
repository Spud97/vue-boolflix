<template>
  <div>
    <img
      :src="imageCard(info.poster_path)"
      @error="replaceByDefault()"
      alt=""
    />
    <span class="px-3">Titolo: {{ info.title }}</span>
    <span class="px-3">Titolo originale: {{ info.original_title }}</span>
    <span class="px-3"
      >Lingua:
      <span
        class="fi"
        :class="'fi-' + countryFlag(info.original_language)"
      ></span
    ></span>
    <span class="px-3"
      >Voto:
      <span v-for="i in 5" :key="i"
        ><i
          v-if="i <= voteAdjustment(info.vote_average)"
          class="fa-solid fa-star"
        ></i
        ><i v-else class="fa-regular fa-star"></i></span
    ></span>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    info: Object,
  },
};
</script>

<style scoped lang="scss"></style>
