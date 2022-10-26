<template>
  <div class="text-white pt-3">
    <div>
      <img
        :src="imageCard(info.poster_path)"
        alt=""
      />
    </div>
    <div>
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
  </div>
</template>

<script>
export default {
  name: "MovieCard",
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
      if (!image) {
        return "../../public/img/notFound.png";
      }
      return `https://image.tmdb.org/t/p/w342/${image}`;
    },
    voteAdjustment(vote) {
      return Math.ceil(vote / 2);
    },
  },
};
</script>

<style scoped lang="scss">
.fa-star {
  color: yellow;
}
</style>
