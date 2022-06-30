<template>
  <div>
    <img :src="imageCard(info.poster_path)" alt="" />
    <span class="px-3">Titolo: {{ info.name }}</span>
    <span class="px-3">Titolo originale: {{ info.original_name }}</span>
    <span class="px-3"
      >Lingua:
      <span
        class="fi"
        :class="'fi-' + countryFlag(info.original_language)"
      ></span
    ></span>
    <span class="px-3"
      >Voto:
      <span v-for="y in 5" :key="y"
        ><i
          v-if="y <= voteAdjustment(info.vote_average)"
          class="fa-solid fa-star"
        ></i
        ><i v-else class="fa-regular fa-star"></i></span
    ></span>
  </div>
</template>

<script>
export default {
  name: "SerieCard",
  props: {
    info: Object,
  },
};
</script>

<style scoped lang="scss"></style>
