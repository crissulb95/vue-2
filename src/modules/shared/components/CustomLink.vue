<template>
  <a
    v-if="isExternalLink"
    class="normal-link"
    :href="link.to"
    target="_blank"
    >{{ linkTag }}</a
  >
  <router-link v-else :to="link" v-slot="{ href, isActive }">
    <a :class="isActive ? 'is-active' : 'normal-link'" :href="href">{{
      linkTag
    }}</a>
  </router-link>
</template>

<script>
export default {
  name: 'CustomLink',
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    linkTag() {
      return this.link.meta.tagName || 'Default Link'
    },
    isExternalLink() {
      return this.link.to.startsWith('http')
    }
  }
}
</script>

<style scoped>
.router-link-active.router-link-exact-active .is-active {
  color: lightcoral;
}

.normal-link,
.router-link-active:not(.router-link-exact-active) .is-active {
  color: grey;
}

.normal-link,
.is-active {
  text-decoration: none;
}
</style>
