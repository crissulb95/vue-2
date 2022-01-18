<template>
  <div>
    <h2>Detail Page</h2>
    <p>Pokemon #{{ id }}</p>
    <figure v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      // pokemonId :null
      pokemon: null
    }
  },
  methods: {
    async getPokemon(id) {
      const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        .then((res) => res.json())
        .catch((err) => console.log('err: ', err))
      // console.log(poke)
      this.pokemon = poke
    }
  },
  created() {
    /* const { id } = this.$route.params
    this.pokemonId = id */
    // console.log(this.id)
    this.getPokemon()
  },
  watch: {
    id: 'getPokemon'
  }
}
</script>

<style></style>
