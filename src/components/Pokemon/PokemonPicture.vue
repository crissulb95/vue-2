<template>
  <figure class="pokemon-picture-container">
    <img :src="imgSrc" alt="pokemon image" class="hidden-pokemon fade-in" />
    <img :src="imgSrc" alt="pokemon image" class="fade-in" v-if="show" />
  </figure>
</template>

<script>
export default {
  name: "Pokemon Picture",
  props: {
    pokeId: {
      type: [Number, String],
      required: true,
      default: 151,
      validator(value) {
        return parseInt(value) > 0;
      },
    },
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-picture-container {
  position: relative;
  height: 35vh;
}
.pokemon-picture-container > img {
  height: 100%;
  left: 50%;
  object-fit: contain;
  object-position: center;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.pokemon-picture-container > .hidden-pokemon {
  filter: brightness(0);
}
</style>
