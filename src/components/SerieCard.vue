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
};
</script>

<style scoped lang="scss"></style>
