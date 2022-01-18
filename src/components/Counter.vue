<template>
  <div class="counter-container">
    <h3 class="counter-title">{{ customTitle }}</h3>
    <p>{{ counter }}<sup>2</sup> = {{ getSquareCounter }}</p>
    <p data-testId="counter">{{ counter }}</p>
    <div class="counter-btn-container">
      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    start: {
      type: Number,
      default: 5,
      validator(value) {
        return value >= 0
      }
    }
  },
  /* props:[title] //Si no quieres especificar el tipado */
  name: 'Counter',
  data() {
    return {
      counter: this.start
    }
  },
  methods: {
    //Rerenderea cada vez que se invoca
    /* squareCounter() {
      console.log("from methods");
      return this.counter * this.counter;
    }, */
    increase() {
      return this.counter++
    },
    decrease() {
      return this.counter--
    }
  },
  computed: {
    //Renderea y cachea el resultado; cambia solo cuando ocurre
    //algún cambio en las dependencias
    getSquareCounter() {
      //console.log("from computed");
      return this.counter * this.counter
    },
    customTitle() {
      return this.title || 'Default title'
    }
  }
}
</script>

<style scoped>
.counter-container {
  display: block;
  width: 50%;
  flex: 0 0 50%;
  padding: 50px;
}
.counter-title {
  margin-top: 50px;
  font-size: 3rem;
}
.counter-btn-container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
}
.counter-btn-container > button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
  margin-right: 20px;
  padding: 5px 30px;
  transition: 0.4s all ease-in-out;
}
.counter-btn-container > button:last-child {
  margin-right: 0;
}
.counter-btn-container > button:hover {
  background-color: lightgreen;
  border-color: lightgreen;
  color: darkslategray;
}
</style>
