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
import { ProductTourJS } from "@/lib/Product Tour/lib.js";
import "@/lib/Product Tour/lib.css";
//import Tour from "@/lib/tour";
//import "@/lib/tour/bootstrap-tour/build/css/bootstrap-tour-standalone.css";
//import introJs from "intro.js";
//console.log(getPokemonOptions());
//console.log("test", Tour);
export default {
  components: { PokemonPicture, PokemonOptions, Loader },
  name: "pokemon-page",
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      show: false,
      showAnswer: false,
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

    /*setTimeout(() => {
       introJs()
        .setOptions({
          steps: [
            {
              title: "Welcome",
              intro: "Hello World! 👋",
            },
            {
              element: document.querySelector(".hidden-pokemon"),
              intro: "This step focuses on this hidden image",
              position: "top",
            },
            {
              element: document.querySelector(
                ".pokemon-options-container #option-3"
              ),
              intro: "This step focuses on this option and position",
              position: "right",
            },
            {
              title: "Farewell!",
              element: document.querySelector(".pokemon-options-container"),
              intro: "And this is our final step!",
            },
          ],
        })
        .start(); 
    }, 2000);*/
    /* var tour = new Tour({
      steps: [
        {
          element: "#hidden-pokemon",
          title: "<h4>Title of my step</h4>",
          content: "Content of my step",
          placement: "auto",
        },
        {
          element: ".pokemon-options-container #option-3",
          title: "<h4>Title of next step</h4>",
          content: "Content of next step, searching for option",
          placement: "auto",
          backdrop: true,
          backdropPadding: 15,
        },
      ],
      storage: false,
    });

    setTimeout(() => {
      // Initialize the tour
      tour.init();
      // Start the tour
      tour.start();
      console.log("inside timeout", tour);
    }, 3000);
    console.log("test", tour); */
    const tourOptions = {
      options: {
        darkLayerPersistence: true,
        next: "Next",
        prev: "Previous",
        finish: "Okay!",
        mobileThreshold: 768,
      },

      tips: [
        {
          title: "🤘🏼 My title",
          description: "<h2>My description</h2>",
          selector: ".pokemon-options-container #option-3",
          x: 100,
          y: 50,
          offx: 0,
          offy: 0,
          position: "right",
          onSelected: false,
        },
        {
          title: "Another title",
          description:
            "<h2>My description</h2> <p>this is another description</p>",
          selector: ".pokemon-picture-container #hidden-pokemon",
          x: 50,
          y: 100,
          offx: 0,
          offy: 0,
          position: "bottom",
          onSelected: false,
        },
      ],
    };

    setTimeout(() => {
      ProductTourJS.init(tourOptions);
      ProductTourJS.start();
      console.log("object");
    }, 2000);
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
