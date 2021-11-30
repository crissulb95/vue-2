<template>
  <div class="indecision-container">
    <figure class="img-container">
      <img v-if="bgGif" :src="bgGif" alt="bg" />
    </figure>
    <div class="input-container">
      <input
        type="text"
        placeholder="Haz una pregunta"
        v-model="question"
        data-test-id="input-question"
      />
      <small>Recuerda terminar con un signo de interrogación (?)</small>
    </div>
    <div v-if="isValidQuestion" class="question-container">
      <p>{{ question }}</p>
      <h3>{{ answer }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "primer valor",
      answer: null,
      bgGif: null,
      isValidQuestion: false,
    };
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = "pensando...";

        const { answer, image } = await fetch("https://yesno.wtf/api")
          .then((res) => res.json())
          .catch((err) => console.error(err));

        this.answer =
          answer === "yes" ? "Si" : answer === "maybe" ? "Tal vez" : "No!";
        this.bgGif = image;
      } catch (error) {
        this.answer = "Hubo un error en la carga desde el API";
        this.bgGif = null;
        console.log(
          "IndecisionComponent: Error en la carga desde el API",
          error
        );
      }
    },
  },
  watch: {
    question(val) {
      this.isValidQuestion = false;
      console.log({ val });

      if (!val.includes("?")) return false;

      console.log({ val });
      this.isValidQuestion = true;
      this.getAnswer();
    },
  },
};
</script>

<style scoped>
.indecision-container {
  display: block;
  width: 50%;
  flex: 0 0 50%;
  position: relative;
  padding: 150px 20px;
  margin: 0;
}

.indecision-container .img-container {
  height: 100%;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 0;
}
.indecision-container .img-container::after {
  background-color: rgba(0, 0, 0, 0.3);
  content: "";
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1;
}
.indecision-container .img-container img {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  object-fit: cover;
  object-position: center;
  transform: translate(-50%, -50%);
}

.input-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.input-container > input {
  padding: 15px;
  flex: 0 0 50%;
  border-radius: 5px;
  margin-bottom: 10px;
}
.input-container > small {
  flex: 0 0 100%;
}

.question-container {
  display: flex;
  flex: 0 0 100%;
  position: relative;
  z-index: 2;
  flex-wrap: wrap;
  margin-top: 30px;
}
.question-container p,
.question-container h3 {
  display: block;
  width: 100%;
  flex: 0 0 100%;
  min-height: 20px;
}
</style>
