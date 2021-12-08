<template>
  <div class="pokemon-options-container">
    <div class="message">
      <span v-if="show">
        Es <strong>{{ correctPokemon.name }} !</strong>
      </span>
    </div>
    <ul>
      <li
        v-for="(pokemon, index) in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
        :class="afterClass(pokemon.id)"
        :id="'option-' + (index + 1)"
      >
        <span>{{ pokemon.name }}</span>
      </li>
    </ul>
    <button @click="$emit('newGame')">Volver a jugar !</button>
  </div>
</template>

<script>
export default {
  name: "Pokemon Options",
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    correctPokemon: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    afterClass(value) {
      let auxClass = "fade-in";
      if (this.show && value === this.correctPokemon.id)
        return `${auxClass} correct`;
      if (this.show) return `${auxClass} wrong`;
      return auxClass;
    },
  },
};
</script>

<style scoped>
.pokemon-options-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.pokemon-options-container > .message {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  height: 2rem;
}
.pokemon-options-container > .message > span {
  font-size: 1.5rem;
}
.pokemon-options-container > .message > span > strong {
  margin-left: 4px;
  color: lightgreen;
  text-transform: uppercase;
}
.pokemon-options-container ul {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  justify-content: space-between;
  padding-left: 0;
  position: relative;
}

.pokemon-options-container ul::after {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background-color: lightgrey;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border-radius: 2px;
  box-shadow: inset 1px 1px 4px 0 white;
  transition: 0.4s all ease-in-out;
}

@media (max-width: 575px) {
  .pokemon-options-container ul {
    order: 2;
  }
  .pokemon-options-container ul::after {
    bottom: 0px;
    top: unset;
    transform: translate(-50%, 50%) rotate(45deg);
  }
}
.pokemon-options-container li {
  align-items: center;
  background-color: white;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  display: flex;
  flex: 0 0 100%;
  flex: 0 0 calc(50% - 10px);
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px 80px;
  position: relative;
  transition: 0.4s all linear;
  width: 100%;
}
.pokemon-options-container li:nth-child(3),
.pokemon-options-container li:nth-child(4) {
  margin-bottom: 0;
}

@media (max-width: 575px) {
  .pokemon-options-container li {
    flex: 0 0 100%;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px !important;
  }
}
.pokemon-options-container li::after {
  background-color: red;
  border-bottom: 4px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  content: "";
  height: 50%;
  left: 50%;
  opacity: 1;
  position: absolute;
  top: 0%;
  transform: translate(-50%, 0%);
  transition: 0.4s all ease-in-out;
  width: 100%;
  z-index: 0;
}

.pokemon-options-container li > span {
  position: relative;
  display: block;
  z-index: 3;
  padding: 5px;
  flex: 0 0 100%;
  transition: 0.4s all ease-in-out;
  text-transform: capitalize;
  line-height: 1.5rem;
  font-size: 1rem;
}
.pokemon-options-container li > span::after {
  border-radius: 10px;
  border: 4px solid transparent;
  content: "";
  display: block;
  height: 100%;
  left: 50%;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s all ease-in-out;
  width: 100%;
  z-index: -1;
  background-color: white;
  border-color: black;
}

.pokemon-options-container li:hover {
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
}

.pokemon-options-container li:hover::after {
  height: 0%;
  opacity: 0;
}
.pokemon-options-container li:hover > span::after {
  background-color: transparent;
  border-color: transparent;
}
.pokemon-options-container li:hover > span {
  font-size: 1.3rem;
}
.pokemon-options-container li.wrong {
  background-color: lightpink;
}

.pokemon-options-container li.correct {
  background-color: lightgreen;
}
.pokemon-options-container li.correct::after,
.pokemon-options-container li.wrong::after {
  height: 0;
  opacity: 0;
}
.pokemon-options-container li.correct > span,
.pokemon-options-container li.wrong > span {
  font-size: 1.3rem;
  color: white;
}
.pokemon-options-container li.correct > span::after,
.pokemon-options-container li.wrong > span::after {
  background-color: transparent;
  border-color: transparent;
}

.pokemon-options-container > button {
  position: absolute;
  top: 20px;
  right: 20px;
  border: 2px solid transparent;
  padding: 10px 30px;
  transition: 0.4s all ease-in-out;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
}
.pokemon-options-container > button:hover {
  background-color: transparent;
  border-color: white;
  color: white;
}

@media (max-width: 575px) {
  .pokemon-options-container > button {
    position: relative;
    right: unset;
    top: unset;
    margin: 20px 0;
    order: 0;
  }
}
</style>
