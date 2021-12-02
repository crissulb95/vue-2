<template>
  <loader v-if="!pokemon" />
  <div v-else class="pokemon-page">
    <h2>¿Quién es este pokemon?</h2>
    <PokemonPicture :poke-id="pokemon.id" :show="show" />
    <PokemonOptions
      @selection="checkAnswer"
      @newGame="newGame"
      :pokemons="pokemonsArr"
      :correct-pokemon="pokemon"
      :show="show"
    />
  </div>
</template>

<script>
import { PokemonOptions, PokemonPicture } from "../components/Pokemon";
import { getPokemonOptions } from "@/helpers/pokemon/getPokemon";
import Loader from "../components/Pokemon/Loader.vue";
//console.log(getPokemonOptions());
export default {
  components: { PokemonPicture, PokemonOptions, Loader },
  name: "pokemon-page",
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      show: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async pokemonMix() {
      this.pokemonsArr = await getPokemonOptions();
      const rnd = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArr[rnd];
    },
    checkAnswer() {
      /* if (value === this.pokemon.id) {
        this.show = true;
      } */

      this.show = true;
    },
    newGame() {
      this.pokemonsArr = [];
      this.pokemon = null;
      this.show = false;
      this.showAnswer = false;
      this.pokemonMix();
    },
  },
  mounted() {
    this.pokemonMix();
  },
};
</script>
<style scoped>
.pokemon-page {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
}
.pokemon-page .pokemon-picture-container,
.pokemon-page .pokemon-options-container {
  flex: 0 0 100%;
  width: 100%;
}
</style>
