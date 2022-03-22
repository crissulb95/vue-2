<template>
  <nav class="navbar">
    <figure class="img-container">
      <img src="/favicon.png" alt="logo icon" />
      <img class="hidden" src="/favicon.png" alt="logo icon shadow" />
    </figure>
    <div class="links-container">
      <!-- <router-link :to="{ name: 'home' }"> Pokemon List</router-link>
      <router-link :to="{ name: 'pokemon-id', params: { id: 643 } }"
        >Pokemon by ID</router-link
      >
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'quiz' }">Pokemon Quiz</router-link> -->
      <custom-link
        v-for="link in links"
        :key="link.name"
        :link="link"
        :class="link.name.includes('dbz') && 'dbz'"
      />
      <button class="btn btn-outline-secondary">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  data() {
    return {
      links: [
        { meta: { tagName: 'Home' }, to: '/', name: 'no-entry' },
        { meta: { tagName: 'About' }, to: '/about', name: 'pokemon-about' },
        { meta: { tagName: 'Quiz' }, to: '/quiz', name: 'pokemon-quiz' },
        {
          meta: { tagName: 'DBZ Characters' },
          to: '/characters',
          name: 'dbz-characters'
        },
        { meta: { tagName: 'About' }, to: '/about', name: 'dbz-about' }
      ]
    }
  },
  components: {
    CustomLink: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Custom Link" */ './CustomLink')
    )
  }
  /* methods: {
    test() {
      console.log(this.$route)
    }
  },
  mounted() {
    this.test()
  } */
}
</script>

<style scoped>
.navbar {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
}
.navbar .img-container {
  height: 60px;
  position: relative;
  width: 60px;
  margin: 0;
}
.navbar .img-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: contain;
  object-position: center;
}
.navbar .img-container img.hidden {
  filter: brightness(0);
  transform: translate(-52%, -48%);
  z-index: -1;
  opacity: 0.5;
}
.navbar .links-container {
  display: flex;
  justify-content: space-around;
}

.navbar .links-container a {
  margin-right: 45px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 5px;
  padding-bottom: 2px;
  transition: 0.3s all ease-in-out;
  border-bottom: 4px dotted transparent;
}

.navbar .links-container a:hover,
.navbar .links-container a.router-link-active.router-link-exact-active {
  color: lightcoral;
  border-color: rgb(138, 221, 217);
}
.navbar .links-container a.router-link-active.router-link-exact-active {
  position: relative;
  display: block;
}

.navbar .links-container a.router-link-active.router-link-exact-active::before {
  content: '';
  position: absolute;
  background-image: url('/favicon.png');
  background-size: contain;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  top: 50%;
  left: -10px;
  transition: 1s all ease-in-out;
  animation: fadeIn 1s, rotation 8s infinite linear;
}

.navbar
  .links-container
  a.router-link-active.router-link-exact-active.dbz::before {
  background-image: url('/dragonball.png');
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes rotation {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(359deg);
  }
}

@keyframes rotate {
}
</style>
